<script>
import UserService from "../services/user.service";
import SearchTable from "@/components/SearchTable.vue";
export default {
    data() {
        return {
            users: [],
            searchText: "",
            activeIndex: -1,
        }
    },
    components: {
        SearchTable
    },
    watch: {
        searchText() {
            this.activeIndex = -1;
        }
    },
    methods: {
        async DeleteUser(id) {
            await UserService.delete(id);
            this.users = await UserService.getAll();
        },
    },
    computed: {
        userStrings() {
            return this.users.map((user) => {
                const { username, id} = user;
                return [username, id].join("");
            });
        },
        // Trả về các product có chứa thông tin cần tìm kiếm.
        filteredUsers() {
            if (!this.searchText) return this.users;
            return this.users.filter((_user, index) =>
                this.userStrings[index].includes(this.searchText)
            );
        },
        activeUser() {
            if (this.activeIndex < 0) return null;
            return this.filteredUsers[this.activeIndex];
        },
        filteredUsersCount() {
            return this.filteredUsers.length;
        },
    },
    async created() {
        this.users = await UserService.getAll();
    }
};
</script>

<style>

</style>
<template>
    <div class="row col-12">
        <div class="row col-12">
            <router-link :to="{ name: 'AddUser', }" class="col-3">
                <button type="button" class="btn btn-primary">Thêm Mới</button>
            </router-link>
            <div class="col-5"></div>
            <SearchTable class="col-4" v-model="searchText" />
        </div>


        <table class="table table-striped mt-2" id="table_id" >
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Chức Năng</th>
                    <th scope="col">Họ Và Tên</th>
                    <th scope="col">Thời Gian Tạo</th>
                    <th scope="col">Hiệu Chỉnh</th>
                </tr>
            </thead>
            <tbody v-if="filteredUsersCount > 0"  v-for="(user, index) in  filteredUsers" :key="user._id" :class="{ active: index === activeIndex }">
                <tr id="rtable">
                    <th scope="row"></th>
                    <td>{{ user.username }}</td>
                    <td>{{ user.admin }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.createdAt }}</td>
                    <td>
                        <router-link :to="{
                            name: 'EditUser',
                            params: { id: user._id },
                        }">
                            <button type="button" class="btn btn-warning"><i
                                    class="fa-solid fa-pen-to-square"></i></button>
                        </router-link>
                        <button type="button" class="btn btn-danger ml-3" @click="DeleteUser(user._id)"><i
                                class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
            <tbody v-else class="text-center">
                Không tìm thấy người dùng
            </tbody>
        </table>
    </div>
</template>
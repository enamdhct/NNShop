<script>
import UserService from "@/services/user.service";
import Tableuser from "../components/UserTable.vue"
export default {
    components: {
        Tableuser
    },
    data() {
        return {
            users: [],
            activeIndex: -1,
        };
    },
    computed: {
    // Trả về các user có chứa thông tin cần tìm kiếm.
        filteredusers() {
            if (!this.searchText) return this.users;
                return this.users.filter((_user, index) =>
                    this.userStrings[index].includes(this.searchText)

                );
        },
        activeuser() {
            if (this.activeIndex < 0) return null;
            return this.filteredusers[this.activeIndex];
        },
        filteredusersCount() {
            return this.filteredusers.length;
        },
    },
    methods: {
        async retrieveusers() {
            try {
                this.users = await UserService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveusers();
            this.activeIndex = -1;
        },
    },
    mounted() {
        this.refreshList();
    },
};

</script>
<template>
    <div>
        <h2 class="mb-4">Danh sách tài khoản</h2>
        <div class="row">
            <Tableuser                 
                v-if="filteredusersCount > 0"
                :users="filteredusers"
                v-model:activeIndex="activeIndex">
            </Tableuser>
        </div>
    </div>
</template>
<style scoped>
    @import "../assets/style.css";
</style>

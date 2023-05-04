
<script>
import ContactService from "../services/contact.service";
import SearchTable from "@/components/SearchTable.vue";
export default{
    data() {
        return {
            contacts: [],
            searchText: "",
            activeIndex: -1,
            admin : localStorage.getItem('admin'),
            _id : localStorage.getItem('_id'),
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
        async Confirm(id){
            await ContactService.update(id,
                {
                    state: "đã xữ lý"
                })
            this.$router.go()
        },
        async DeleteUser(id) {
            await UserService.delete(id);
            this.users = await UserService.getAll();
        },
    },
    computed: {
        contactStrings() {
            return this.contacts.map((contact) => {
                const { name } = contact;
                return [name].join("");
            });
        },
        // Trả về các contact có chứa thông tin cần tìm kiếm.
        filteredContacts() {
            if (!this.searchText) return this.contacts;
            return this.contacts.filter((_contact, index) =>
                this.contactStrings[index].includes(this.searchText)
            );
        },
        activeContact() {
            if (this.activeIndex < 0) return null;
            return this.filteredContacts[this.activeIndex];
        },
        filteredContactsCount() {
            return this.filteredContacts.length;
        },
    },
    async created(){
        this.contacts = await ContactService.getAll();
        // this.$alert("Hello Vue Simple Alert.");
    }
};
</script>

<template>
<div class="container">
    <div class="row col-12">
        <div class="col-5"></div>
        <SearchTable class="col-4" v-model="searchText" />
    </div>
    <table class="table table-striped mt-2" id="table_id" v-if="admin === 'Admin'" >
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">UID</th>
                <th scope="col">Vấn đề</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Mô tả</th>
                <th scope="col">Xữ lý</th>
            </tr>
        </thead>
        <tbody  v-if="(filteredContactsCount > 0)"       
        v-for="(contact, index) in contacts.filter(contact => contact.state === 'chờ xữ lý')"
        :key="contact._id"
        :class="{ active: index === activeIndex }"
        >
            <tr id="rtable">
                <th scope="row"></th>
                <td>{{contact.userId}}</td>
                <td>{{contact.problem}}</td>
                <td >{{contact.state}}</td>
                <td >{{contact.description}}</td>
                <td>
                    <button type="button" class="btn btn-success ml-3" @click="Confirm(contact._id)">Đã xữ lý1111</button>
                    <button type="button" class="btn btn-danger ml-3" @click="DeleteUser(user._id)"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        </tbody>
        <tbody v-else class="text-center">
            Không tìm thấy liên hệ
        </tbody>
    </table>
    <table class="table table-striped mt-2" id="table_id" v-else >
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">UID</th>
                <th scope="col">Vấn đề</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Mô tả</th>
                <th scope="col">Thời gian</th>
            </tr>
        </thead>
        <tbody  v-if="filteredContactsCount > 0"       
        v-for="(contact, index) in contacts.filter(contact => contact.userId === this._id)"
        :key="contact._id"
        :class="{ active: index === activeIndex }"
        >
            <tr id="rtable">
                <th scope="row"></th>
                <td>{{contact.userId}}</td>
                <td>{{contact.problem}}</td>

                <td >{{contact.state}}</td>
                <td >{{contact.description}}</td>
                <td>
                    <!-- <button type="button" class="btn btn-success ml-3" @click="Confirm(contact._id)">Đã xữ lý</button> -->
                    {{contact.time}}
                </td>
            </tr>
        </tbody>
        <tbody v-else class="text-center">
            Không tìm thấy liên hệ
        </tbody>
    </table>
</div>
</template>
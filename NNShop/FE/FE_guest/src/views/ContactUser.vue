<script>
import ContactService from "../services/contact.service";
import ContactTable from "../components/ContactTable.vue"
export default {
    components: {
        ContactTable
    },
    data() {
        return {
            contacts: [],
            activeIndex: -1,
            _id : localStorage.getItem('_id'),
        };
    },
    computed: {
    // Trả về các contact có chứa thông tin cần tìm kiếm.
        filteredcontacts() {
            if (!this.searchText) return this.contacts;
                return this.contacts.filter((_contact, index) =>
                    this.contactStrings[index].includes(this.searchText)

                );
        },
        activecontact() {
            if (this.activeIndex < 0) return null;
            return this.filteredcontacts[this.activeIndex];
        },
        filteredcontactsCount() {
            return this.filteredcontacts.length;
        },
    },
    methods: {
        async retrievecontacts() {
            try {
                this.contacts = await ContactService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrievecontacts();
            this.activeIndex = -1;
        },
    },
    mounted() {
        this.refreshList();
        console.log(this._id)
        console.log(this.contacts.userId)
    },
};

</script>
<template>
    <div class="container shadow-sm mb-4">
        <h2 class="mb-4">Danh Sách Liên Hệ</h2>
        <div class="row">
            <ContactTable                 
                v-if="filteredcontactsCount > 0"
                :contacts="filteredcontacts"
                v-model:activeIndex="activeIndex">
            </ContactTable>
            <div v-else >
                <p class="text-center" style="width: 1200px; font-size: 20px">Bạn Chưa Thêm Liên Hệ Nào</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
    @import "../assets/style.css";
</style>

<template>
    <div class="px-5">
        <!-- edit modal -->
        <input type="checkbox" :id="`edit-modal-${editBtnId}`" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Edit Item {{ editBtnId }}</h3>
                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div class="modal-action">
                    <label :for="`edit-modal-${editBtnId}`" class="btn btn-outline btn-info">Edit</label>
                    <label :for="`edit-modal-${editBtnId}`" class="btn btn-outline btn-error" @click="cancelEditBtn">Cancel</label>
                </div>
            </div>
        </div>
        <!-- edit modal -->

        <!-- delete modal -->
        <input type="checkbox" :id="`delete-modal-${deleteBtnId}`" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Delete Item {{ deleteBtnId }}</h3>
                <p class="py-4">Are you sure want to delete this item? This action is irreversible.</p>
                <div class="modal-action">
                    <label :for="`delete-modal-${deleteBtnId}`" class="btn btn-outline btn-error" @click="deleteItem(deleteBtnId)">Delete</label>
                    <label :for="`delete-modal-${deleteBtnId}`" class="btn btn-outline btn-success" @click="cancelDeleteBtn">Cancel</label>
                </div>
            </div>
        </div>
        <!-- delete modal -->



        <div class="py-5 flex items-center justify-between">
            <div class="w-1/4 relative">
                <input class="input input-bordered w-full max-w-sm h-9" v-model="searchData" type="text" placeholder="Search by title" />
            </div>
            <button class="btn btn-sm btn-outline btn-info justify-self-end;" @click="addItem">Add Item</button>
        </div>
        <table class="table-auto">
            <thead class="h-12">
                <tr>
                    <th>User ID</th>
                    <th>ID</th> 
                    <th>Title</th> 
                    <th >Body</th>
                </tr>
            </thead>
            <tbody v-auto-animate>
                <tr v-for="({ userId, id, title, body }, index) in searchListData">
                    <td class="p-2 text-center">{{ userId }}</td> 
                    <td class="p-2 text-center">{{ id  }}</td> 
                    <td class="p-2">{{ title }}</td> 
                    <td class="p-2">{{ body }}</td> 
                    <td class="pr-3">
                        <label :for="`edit-modal-${editBtnId}`" class="btn btn-sm btn-outline btn-info" @click="changeEditBtnId(id)">Edit</label>
                    </td>
                    <td class="">
                        <label :for="`delete-modal-${deleteBtnId}`" class="btn btn-sm btn-outline btn-error" @click="changeDeleteBtnId(id)">Delete</label>
                    </td>  
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup lang="ts">
    import { ref, watch, computed } from 'vue';
    import autoAnimate from '@formkit/auto-animate';

    const props = defineProps({
        listData: Array<{
            userId: number,
            id: number,
            title: string,
            body: string,
        }>
    });

    const listData = ref(props.listData);
    const searchData = ref('');
    const editBtnId = ref(0);
    const deleteBtnId = ref(0);

    const searchListData = computed(() => {
        if(searchData.value.length === 0){
            return listData.value;
        }

        return listData.value.filter((item) => (item.title.includes(searchData.value.toLowerCase())))
    });




    function changeEditBtnId(id: number){
        editBtnId.value = id;
    }

    function cancelEditBtn(){
        setTimeout(()=>{
            editBtnId.value = 0;
        }, 200);
    }

    function changeDeleteBtnId(id: number){
        deleteBtnId.value = id;
    }

    function cancelDeleteBtn(){
        setTimeout(()=>{
            deleteBtnId.value = 0;
        }, 200);
    }

    function addItem(){
        listData.value.push({
            userId: listData.value.length + 1,
            id: listData.value.length + 1,
            title: 'test',
            body: 'body test',
        })
    }

    function deleteItem(id: number) {
        listData.value = listData.value.filter((item) => item.id !== id);
    }

    function sortAsc() {
        listData.value.sort()
    }

    function sortDesc() {
        listData.value.sort().reverse()
    }

</script>
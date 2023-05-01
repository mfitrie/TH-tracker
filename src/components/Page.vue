<template>
    <div class="px-5">
        <!-- edit modal -->
        <input type="checkbox" id="edit-modal" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div class="modal-action">
                    <label for="edit-modal" class="btn btn-info">Edit</label>
                    <label for="edit-modal" class="btn btn-error">Cancel</label>
                </div>
            </div>
        </div>
        <!-- edit modal -->

        <div class="py-5 flex items-center justify-between">
            <div class="w-1/4 relative">
                <input class="input input-bordered w-full max-w-sm h-9" v-model="searchData" type="text" placeholder="Search by title" />
                <!-- <div class="absolute bg-white z-10 border rounded-bl-md rounded-br-md" v-if="searchSuggestion.length !== 0">
                    <p class="hover:bg-blue-300 cursor-pointer" v-for="{ id, title } in searchSuggestion" :key="id">
                        {{ title }}
                    </p>
                </div> -->
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
                        <label for="edit-modal" class="btn btn-sm btn-outline btn-info">Edit</label>
                    </td>
                    <td class="">
                        <button class="btn btn-sm btn-outline btn-error" @click="deleteItem(id)">Delete</button>
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

    const searchListData = computed(() => {
        if(searchData.value.length === 0){
            return listData.value;
        }

        return listData.value.filter((item) => (item.title.includes(searchData.value.toLowerCase())))
    });

    // const searchSuggestion = computed(() => {
    //     if(searchListData.value.length === 0){
    //         return [];
    //     }

    //     if(searchListData.value.length === listData.value.length){
    //         return [];
    //     }

    //     if(searchListData.value.length >= 5){
    //         return searchListData.value.slice(0, 4);
    //     }
    // })

    watch(searchData, (value: string) => {
        if(value.length === 0){
            return;
        }

        const searchResult = listData.value.filter((item) => (item.title.includes(value.toLowerCase()))).map(item => item.title);
    });


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
<template>
    <div class="px-5">
        <div class="py-5 flex items-center justify-between">
            <div class="w-1/4">
                <input class="input input-bordered w-full max-w-sm h-9" v-model="searchData" type="text" placeholder="Type here" />
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
                        <button class="btn btn-sm btn-outline btn-info">Edit</button>
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
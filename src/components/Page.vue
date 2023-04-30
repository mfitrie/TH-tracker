<template>
    <div class="px-5">
        <div class="p-5 flex justify-end">
            <button class="btn btn-sm btn-outline btn-info" @click="addItem">Add Item</button>
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
                <tr v-for="({ userId, id, title, body }, index) in listData">
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
    import { ref } from 'vue';
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
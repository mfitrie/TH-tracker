<template>
    <div class="px-5">
        <table class="table-auto">
        <thead class="h-12">
            <tr>
                <th>User ID</th>
                <th>ID</th> 
                <th>Title</th> 
                <th>Body</th>
            </tr>
        </thead>
        <tbody v-auto-animate>
            <tr class="hover" v-for="({ userId, id, title, body }, index) in listData">
                <td class="text-center">{{ userId }}</td> 
                <td class="text-center">{{ id  }}</td> 
                <td class="">{{ title }}</td> 
                <td class="">{{ body }}</td> 
                <td class="pr-3">
                    <button class="btn btn-sm btn-outline btn-info">Edit</button>
                </td>
                <td class="">
                    <button class="btn btn-sm btn-outline btn-error" @click="deleteItem(id)">Delete</button>
                </td>  
            </tr>
            <!-- <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            </tr>
            <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
            </tr>
            <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
            </tr> -->
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

    const deleteItem = (id: number) => {
        listData.value = listData.value.filter((item) => item.id !== id);
    }

    const items = ref(["😏","😐","😑","😒","😕"])
    function removeItem(toRemove) {
        items.value = items.value.filter((item) => item !== toRemove)
    }

</script>
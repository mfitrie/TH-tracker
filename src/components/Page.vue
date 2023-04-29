<template>
<<<<<<< HEAD
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
=======
    <div class="overflow-x-auto">
        <h5>Click emojis to remove them.</h5>
        <table class="table table-zebra w-full">
            <thead>
                <tr>
                    <th></th> 
                    <th>User ID</th> 
                    <th>ID</th> 
                    <th>Title</th> 
                    <th>Body</th> 
                    <th></th> 
                    <th></th> 
                </tr>
            </thead> 
            <tbody v-auto-animate>
                <tr class="hover" v-for="({ userId, id, title, body }, index) in listData" :key="id">
                    <th>{{ index + 1 }}</th> 
                    <td>{{ userId }}</td> 
                    <td>{{ id  }}</td> 
                    <td>{{ title }}</td> 
                    <td>{{ body }}</td> 
                    <td>
                        <button class="btn btn-outline btn-info">Edit</button>
                    </td>
                    <td>
                        <button class="btn btn-outline btn-error" @click="deleteItem(id)">Delete</button>
                    </td>  
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th></th> 
                    <th>User ID</th> 
                    <th>ID</th> 
                    <th>Title</th> 
                    <th>Body</th> 
                    <th></th> 
                </tr>
            </tfoot>
>>>>>>> 05220afbc49d8526dfb3bd7fdad49e65407deed3
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

</script>
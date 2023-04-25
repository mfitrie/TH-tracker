<template>
    <div class="overflow-x-auto">
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
            <tbody>
                <tr class="hover" v-for="({ userId, id, title, body }, index) in listData">
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
        </table>
    </div>
</template>
<script setup lang="ts">
    import { toRefs, ref } from 'vue';
        
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
        const index = listData.value.findIndex(item => item.id === id);
        listData.value.splice(index, 1);
    }

</script>
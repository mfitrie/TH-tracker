<template>
    <div class="overflow-x-auto">
        <h5>Click emojis to remove them.</h5>
        <ul v-auto-animate>
            <li
            v-for="item in items"
            :key="item"
            @click="removeItem(item)"
            >
            {{ item }}
            </li>
        </ul>
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
                <tr class="hover" v-for="({ userId, id, title, body }, index) in listData" :key="id" @click="deleteItem(id)">
                    <th>{{ index + 1 }}</th> 
                    <td>{{ userId }}</td> 
                    <td>{{ id  }}</td> 
                    <td>{{ title }}</td> 
                    <td>{{ body }}</td> 
                    <td>
                        <button class="btn btn-outline btn-info">Edit</button>
                    </td>
                    <td>
                        <button class="btn btn-outline btn-error">Delete</button>
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
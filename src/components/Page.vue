<template>
    <div class="overflow-x-auto">
        <table class="table table-compact w-full">
            <thead>
                <tr>
                    <th></th> 
                    <th>User ID</th> 
                    <th>ID</th> 
                    <th>Title</th> 
                    <th>Body</th> 
                    <th></th> 
                </tr>
            </thead> 
            <tbody v-for="({ userId, id, title, body }, index) in listData">
                <tr>
                    <th>{{ index + 1 }}</th> 
                    <td>{{ userId }}</td> 
                    <td>{{ id  }}</td> 
                    <td>{{ title }}</td> 
                    <td>{{ body }}</td> 
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

</script>
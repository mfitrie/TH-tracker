<template>
    <ul v-for="item in listData">
       <li>{{ item }}</li> 
    </ul>
    <button class="btn btn-primary" @click="addData">Add data</button>
</template>
<script setup lang="ts">
    import { toRefs, ref } from 'vue';
        
    const props = defineProps({
        listData: Array,
    });

    const listData = ref(props.listData);

    const addData = () => {
        listData.value.push('food')
    }
</script>
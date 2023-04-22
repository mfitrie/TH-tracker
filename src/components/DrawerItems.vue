<template>
    <!-- Sidebar content here -->
    <li v-for="item in listItemDrawer">
        <a :href="item">{{ transformWord(item) }}</a>
    </li>
</template>
<script setup lang="ts">
    import { toRefs, ref, computed } from 'vue';
        
    const props = defineProps({
        listItemDrawer: Array<string>,
    });

    const listItemDrawer = ref(props.listItemDrawer);

    const transformWord = (word: string) => {
        return word.includes('-') ? word.split('-').map((item: string) => item.charAt(0).toUpperCase() + item.slice(1)).join(' ') : word.charAt(0).toUpperCase() + word.slice(1); 
    }

</script>
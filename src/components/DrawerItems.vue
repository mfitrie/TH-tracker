<template>
    <!-- Sidebar content here -->
    <li v-for="{ path, name } in listItemDrawer">
        <a :href="path">{{ name }}</a>
    </li>
</template>
<script setup lang="ts">
    import { toRefs, ref, computed } from 'vue';

    const props = defineProps({
        listItemDrawer: Array<{
            path: string,
            name: string
        }>,
    });

    const listItemDrawer = ref(props.listItemDrawer);

</script>
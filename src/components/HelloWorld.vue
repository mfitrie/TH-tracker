<template>
    <div>
      <ul>
        <li v-for="item in food">
          {{ item }}
        </li>
      </ul>
      <button @click="addFood">Add carbonara</button>
    </div>
  </template>
  
  <script setup lang="ts">
    import {ref} from 'vue';
    const food = ref<Array<string>>(["Pizza", "French fries", "Spaghetti"]);
    
    const addFood = () => {
        food.value.push('carboonara');
    }
    
  </script>
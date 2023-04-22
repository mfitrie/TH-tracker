<template>
    <div class="drawer">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <div class="navbar bg-primary">
          <div class="flex-1">
            <label for="my-drawer" class="btn btn-primary drawer-button">
              <Icon icon="ic:outline-menu" style="width: 1.5rem; height: 1.5rem;" />
            </label>
            <a class="btn btn-ghost normal-case text-xl">TH Store Tracker</a>
          </div>
          <div class="flex-none">
            <button class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>
          </div>
        </div>
        <div class="m-auto">
          <ul>
            <li v-for="item in food">
              {{ item }}
            </li>
          </ul>
          <button class="btn btn-ghost" @click="addFood">Add carbonara</button>
        </div>
      </div> 
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-100 text-base-content">
          <!-- Sidebar content here -->
          <li @click="delayClickItemDrawer('/')"><a>Index</a></li>
          <li @click="delayClickItemDrawer('/about')"><a>About</a></li>
          
        </ul>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import { Icon } from '@iconify/vue';
    import {ref} from 'vue';
    const food = ref<Array<string>>(["Pizza", "French fries", "Spaghetti"]);
    
    const addFood = () => {
        food.value.push('carboonara');
    }

    const delayClickItemDrawer = (path: string) => {
      if(path.at(0) !== '/'){
        return;
      }
      
      setTimeout(() => {
        window.location.href = path;
      }, 200);
    }
    
  </script>
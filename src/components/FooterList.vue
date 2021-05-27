<template>
  <h3 class="pb-3 font-bold text-white">
    {{ label }}
  </h3>
  <ul>
    <li
      v-for="list in lists"
      :key="list.id"
    >
      <a
        :href="list.href"
        class="block py-1 text-sm text-neutral-gray-violet"
      >
        {{ list.title }}  
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props:{
    lists:{
      type: Array,
      required: true
    },
    label:{
      type: String,
      required: true 
    }
  },
  // setup(props){

  // }
})
</script>

<style>

</style>
<template>
  <div class="relative min-h-full pt-16 bg-white rounded-sm shadow-sm">
    <div class="absolute flex items-center justify-center w-20 h-20 rounded-full bg-primary-dark-violet -top-10 left-5">
      <slot name="icon" />
    </div>
    <div class="px-8 text-left">
      <h1 class="pb-3 text-xl font-bold text-neutral-dark-blue">
        <slot name="title" />
      </h1>
      <p class="text-sm leading-7 text-neutral-gray-violet">
        <slot name="content" />
      </p>
    </div> 
  </div>  
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style>

</style>
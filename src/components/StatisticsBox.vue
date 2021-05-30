<template>
  <div class="relative min-h-full pt-16 transition-all bg-white rounded-sm shadow-sm hover:shadow-md">
    <div class="absolute inset-x-0 flex items-center justify-center w-20 h-20 mx-auto rounded-full lg:inset-auto -top-10 bg-primary-dark-violet lg:-top-10 lg:left-5">
      <slot name="icon" />
    </div>
    <div class="px-8 lg:text-left">
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
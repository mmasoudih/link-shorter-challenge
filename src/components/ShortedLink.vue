<template>
  <div class="flex flex-col items-center justify-between w-9/12 py-4 mx-auto my-2 bg-white rounded-lg shadow-sm md:flex-row">
    <p class="w-full py-2 pl-5 text-left border-b-1 md:border-none md:py-0 md:text-sm lg:text-base border-neutral-light-gray">
      {{ link['result']['original_link'] }}
    </p>
            
    <p class="w-full col-start-7 py-2 pl-5 text-left lg:py-0 lg:pl-0 md:text-right text-primary-cyan md:text-sm lg:text-base">
      {{ link['result']['full_short_link2'] }}
    </p>

    <div class="w-full px-3 md:w-min">
      <button
        class="block w-full px-6 py-2 font-bold text-white rounded-md bg-primary-dark-violet focus:outline-none"
        :class="{'btn': !copyState, }"
        @click="setClipboard(link['result']['full_short_link2'])"
      >
        {{ copyState ? 'Copeid!' : 'Copy' }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
// import {  } from './../types'
export default defineComponent({
  props:{
    link:{
      type: Object,
      required: true
    }
  },
  setup() {
    const copyState = ref(false)
    function setClipboard(value: string) {
      let tempInput = document.createElement('input')
      tempInput.setAttribute('style','position: absolute; left: -1000px; top: -1000px')
      tempInput.value = value
      document.body.appendChild(tempInput)
      tempInput.select()
      document.execCommand('copy')
      document.body.removeChild(tempInput)
      copyState.value = true
      resetCopyState()
    }
    function resetCopyState(){
      setTimeout(() =>{
        copyState.value = false
      }, 1000)
    }
    return {
      setClipboard,
      copyState
    }
  },
})
</script>

<style>

</style>
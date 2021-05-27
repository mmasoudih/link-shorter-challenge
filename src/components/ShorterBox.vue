<template>
  <div class="flex justify-around w-9/12 mx-auto rounded-lg bg-shorten py-14 bg-primary-dark-violet">
    <input
      type="text"
      placeholder="Shorten a link here ..."
      class="w-10/12 ml-14 py-3.5 px-5 mr-5 rounded-md"
    >
    <button class="w-2/12 font-bold text-white rounded-md bg-primary-cyan mr-14">
      Shorten it!
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({

})
</script>

<style scoped>
.bg-shorten{
    background-image: url("../assets/images/bg-shorten-desktop.svg");
    background-position: -60px 0;
}
</style>
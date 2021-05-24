<template>
  <div class="container mx-auto">
    <nav class="flex justify-between py-5">
      <div class="flex">
        <a
          href="#"
          class="py-2 pr-5 mr-5"
        > 
          <img src="../assets/images/logo.svg">
        </a>
        <a
          href="#"
          class="py-3 pl-3 px-3"
        > Features</a>
        <a
          href="#"
          class="py-3 px-3"
        > Pricing</a>
        <a
          href="#"
          class="py-3 px-3"
        > Resources</a>
      </div>
      <div>
        <a
          href="#"
          class="py-3 pl-3 px-3"
        > Login</a>
        <a
          href="#"
          class="py-3 pl-3 px-3"
        > Sign Up</a>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import Logo from '../assets/images/logo.svg'
export default defineComponent({
  // setup(){
  //   return Logo
  // }
})
</script>

<style scoped>
div > a{
  display: inline-block;
}
</style>
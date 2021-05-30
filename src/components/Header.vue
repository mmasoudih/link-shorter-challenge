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
          class="px-3 py-3 pl-3"
        > Features</a>
        <a
          href="#"
          class="px-3 py-3"
        > Pricing</a>
        <a
          href="#"
          class="px-3 py-3"
        > Resources</a>
      </div>
      <div>
        <a
          href="#"
          class="px-3 py-3 pl-3"
        > Login</a>
        <a
          href="#"
          class="px-3 py-3 pl-3 btn rounded-3xl"
        > Sign Up</a>
      </div>
    </nav>
    <div class="flex items-center justify-between overflow-hidden">
      <div>
        <p class="font-bold text-7xl text-neutral-dark-blue line-height-1-2">
          More than just shorter links
        </p>
        <p class="text-neutral-gray">
          Build your brand’s recognition and get detailed insights 
          on how your links are performing.
        </p>
        <a
          href=""
          class="mt-5 btn rounded-3xl"  
        >Get Started</a>
      </div>
      <img
        src="../assets/images/illustration-working.svg"
        alt="banner"
        class="-mr-24"
      >
    </div>
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
.line-height-1-2{
  line-height: 1.2em
}
</style>
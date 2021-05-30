<template>
  <div class="container mx-auto">
    <nav class="flex justify-between py-5">
      <div class="flex">
        <a
          href="#"
          class="inline-block py-2 pl-10 pr-5 mr-5 lg:pl-0"
        > 
          <img src="../assets/images/logo.svg">
        </a>
        <a
          href="#"
          class="hidden px-3 py-3 pl-3 transition-all text-neutral-gray hover:text-neutral-dark-violet lg:inline-block"
        > Features</a>
        <a
          href="#"
          class="hidden px-3 py-3 transition-all text-neutral-gray hover:text-neutral-dark-violet lg:inline-block"
        > Pricing</a>
        <a
          href="#"
          class="hidden px-3 py-3 transition-all text-neutral-gray hover:text-neutral-dark-violet lg:inline-block"
        > Resources</a>
      </div>
      <div>
        <a
          href="#"
          class="inline-block px-3 pt-1 pl-3 mr-10 transition-all rounded-3xl lg:hidden"
          @click="toggleMobileMenu"
        > 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-neutral-gray-violet"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </a>
        <a
          href="#"
          class="hidden px-3 py-3 pl-3 transition-all text-neutral-gray hover:text-neutral-dark-violet lg:inline-block"
        > Login</a>
        <a
          href="#"
          class="hidden px-3 py-2 pl-3 transition-all btn rounded-3xl hover:bg-primary-cyan-light lg:inline-block"
        > Sign Up</a>
      </div>
    </nav>
    <transition name="flip">
      <div
        v-if="menuState"
        class="w-10/12 mx-auto rounded-xl bg-primary-dark-violet lg:hidden"
      >
        <div class="flex flex-col text-center">
          <a
            href="#"
            class="px-3 py-5 pl-3 mx-10 text-lg font-bold text-white transition-all hover:text-neutral-light-gray lg:inline-block"
          > Features</a>
          <a
            href="#"
            class="px-3 py-5 mx-10 text-lg font-bold text-white transition-all hover:text-neutral-light-gray lg:inline-block"
          > Pricing</a>
          <a
            href="#"
            class="px-3 py-5 mx-10 text-lg font-bold text-white transition-all border-b-1 border-neutral-light-violet hover:text-neutral-light-gray lg:inline-block"
          > Resources</a>
          <a
            href="#"
            class="px-3 py-3 pl-3 mx-10 my-2 font-bold text-white transition-all hover:text-neutral-light-gray lg:inline-block"
          > Login</a>
          <a
            href="#"
            class="px-3 py-3 pl-3 mx-10 my-2 transition-all btn rounded-3xl hover:bg-primary-cyan-light lg:inline-block"
          > Sign Up</a>
        </div>
      </div>
    </transition>
    <div class="flex flex-col-reverse items-center justify-between py-10 overflow-hidden lg:flex-row lg:py-0">
      <div class="text-center lg:text-left">
        <p class="text-5xl font-bold xl:text-7xl lg:ml-10 text-neutral-dark-blue line-height-1-2">
          More than just shorter links
        </p>
        <p class="px-12 my-5 leading-8 txet-lg text-neutral-gray">
          Build your brand’s recognition and get detailed insights 
          on how your links are performing.
        </p>
        <a
          href=""
          class="inline-block px-10 py-4 transition-all lg:ml-10 lg:px-6 lg:py-2 btn rounded-3xl hover:bg-primary-cyan-light"  
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
import { ref ,defineComponent } from 'vue'
export default defineComponent({
  setup(){
    const menuState = ref(false)

    function toggleMobileMenu(){
      menuState.value = !menuState.value 
    }
    return {
      toggleMobileMenu,
      menuState
    }
  }
})
</script>

<style scoped>
.line-height-1-2{
  line-height: 1.2em
}
</style>
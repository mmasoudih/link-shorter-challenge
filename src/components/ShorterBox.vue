<template>
  <div class="flex flex-col w-9/12 py-8 mx-auto bg-right-top bg-no-repeat rounded-lg lg:bg-cover md:bg-bottom-left lg:justify-center lg:flex-row lg:bg-shorten-box-desktop-pattern bg-shorten-box-mobile-pattern lg:py-12 xl:py-14 bg-primary-dark-violet">
    <div class="pr-0 mx-6 lg:pr-5 lg:mx-0 w-4/4 lg:w-8/12">
      <input
        v-model="url"
        type="text"
        placeholder="Shorten a link here ..."
        class="w-full px-5 py-3 border-4 border-transparent rounded-md focus:outline-none lg:w-11/12 lg:ml-14 lg:mr-5"
        :class="{ 'border-red-500':error}"
        @keypress.enter="shortLink"
      >
      <p class="pl-6 text-sm text-red-500 lg:pl-14 min-h-max">
        ‌{{ errorMessage }}
      </p>
    </div>
    <button
      class="focus:outline-none lg:self-start lg:mr-8 lg:ml-0 mx-6 my-1.5 lg:my-0 py-4 lg:px-5 flex items-center justify-center font-bold text-white transition-colors rounded-md lg:w-3/12 xl:w-2/12 hover:bg-primary-cyan-light bg-primary-cyan xl:mr-14"
      :class="{'opacity-75' :loading, 'pt-5': loading}"
      @click="shortLink"
    >
      <template v-if="loading">
        <svg
          class="w-5 h-5 text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </template>
      <template v-else>
        Shorten it!
      </template>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from 'vue'
export default defineComponent({
  emits:['added-new-link'],
  setup(_, context){
    const app = getCurrentInstance()
    const axios = app.appContext.config.globalProperties.$axios
    const url = ref('')
    const loading = ref(false)
    const error = ref(false)
    const errorMessage = ref('')

    async function shortLink(){
      if(url.value != ''){
        if(validateURL(url.value)){
          loading.value = true
          error.value = false
          errorMessage.value = ''
          try{
            const {data} = await axios.get(`shorten?url=${url.value}`)
            addNewLink(data)
            loading.value = false
          }catch(err){
            console.log('error, ', err)
            loading.value = false

          }
        }else{
          error.value = true
          errorMessage.value = 'Please enter a valid URL!'
        }
      }
      else{
        error.value = true
        errorMessage.value = 'URL can not be empty!'
      }
    }
    
    function validateURL(url){
      const pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g
      return pattern.test(url)
    }

    function addNewLink(data) {
      const links = getShortedLink()
      links.push(data)
      localStorage.setItem('shorted_links', JSON.stringify(links))
      context.emit('added-new-link', true)
    }
    function getShortedLink(){
      let data = localStorage.getItem('shorted_links')
      let shortedLinks = data ? JSON.parse(data) : []
      return  shortedLinks
    }
    return {
      shortLink,
      url,
      loading,
      error,
      errorMessage
    }
  }
})
</script>

<style scoped>
/* .bg-shorten{
    background-image: url("../assets/images/bg-shorten-desktop.svg");
    background-position: -60px 0;
} */
</style>
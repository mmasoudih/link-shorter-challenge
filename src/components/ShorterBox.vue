<template>
  <div class="flex justify-around w-9/12 mx-auto rounded-lg bg-shorten py-14 bg-primary-dark-violet">
    <input
      v-model="url"
      type="text"
      placeholder="Shorten a link here ..."
      class="w-10/12 ml-14 py-3.5 px-5 mr-5 rounded-md"
    >
    <button
      class="flex items-center justify-center w-2/12 font-bold text-white rounded-md bg-primary-cyan mr-14"
      :class="{'opacity-75' :loading}"
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
  setup(_, context){
    const app = getCurrentInstance()
    const axios = app.appContext.config.globalProperties.$axios
    const url = ref('')
    const loading = ref(false)

    async function shortLink(){
      loading.value = true
      try{
        const {data} = await axios.get(`shorten?url=${url.value}`)
        addNewLink(data)
        loading.value = false
      }catch(err){
        console.log('error, ', err)
        loading.value = false

      }
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
      loading
    }
  }
})
</script>

<style scoped>
.bg-shorten{
    background-image: url("../assets/images/bg-shorten-desktop.svg");
    background-position: -60px 0;
}
</style>
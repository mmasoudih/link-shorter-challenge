<template>
  <div class="h-screen">
    <Header />
    <div class="container mx-auto">
      <ShorterBox
        class="relative z-40 top-20"
        @added-new-link="getShortedLinks"
      />
    </div>
    <div class="z-0 pt-20 pb-40 text-center bg-neutral-light-gray">
      <div class="container mx-auto">
        <transition-group
          name="flip"
        >
          <template
            v-for="(link, index) in shortedLink"
            :key="index"
            class="pt-40"
          >
            <div class="flex flex-col items-center justify-between w-9/12 py-4 mx-auto my-2 bg-white rounded-lg shadow-sm md:flex-row">
              <p class="w-full py-2 pl-5 text-left border-b-1 md:border-none md:py-0 md:text-sm lg:text-base border-neutral-light-gray">
                {{ link.result.original_link }}
              </p>
            
              <p class="w-full col-start-7 py-2 pl-5 text-left lg:py-0 lg:pl-0 md:text-right text-primary-cyan md:text-sm lg:text-base">
                {{ link.result.full_short_link2 }}
              </p>

              <div class="w-full px-3 md:w-min">
                <button class="block w-full px-6 py-2 rounded-md btn">
                  Copy
                </button>
              </div>
            </div>
          </template>
        </transition-group>
      </div>
      <div class="w-10/12 mx-auto md:w-5/12">
        <h1 class="py-5 text-2xl font-bold md:text-4xl text-neutral-dark-blue">
          Advanced Statistics
        </h1>
        <p class="text-neutral-gray-violet">
          Track how your links are performing across the web with our 
          advanced statistics dashboard.
        </p>
      </div>
      <div class="container mx-auto">
        <div class="relative grid gap-6 px-10 py-20 md:gap-2 md:px-0 md:grid-cols-3 auto-rows-fr auto-cols-fr line-background">
          <StatisticsBox>
            <template #icon>
              <img
                src="./assets/images/icon-brand-recognition.svg"
                class="w-11 h-11"
              >
            </template>
            <template #title>
              Brand Recognition
            </template>
            <template #content>
              Boost your brand recognition with each click. Generic links don’t 
              mean a thing. Branded links help instil confidence in your content.
            </template>
          </StatisticsBox>

          <StatisticsBox class="mt-10">
            <template #icon>
              <img
                src="./assets/images/icon-detailed-records.svg"
                class="w-11 h-11"
              >
            </template>
            <template #title>
              Detailed Records
            </template>
            <template #content>
              Gain insights into who is clicking your links. Knowing when and where 
              people engage with your content helps inform better decisions.
            </template>
          </StatisticsBox>

          <StatisticsBox class="mt-20">
            <template #icon>
              <img
                src="./assets/images/icon-fully-customizable.svg"
                class="w-11 h-11"
              >
            </template>
            <template #title>
              Fully Customizable
            </template>
            <template #content>
              Improve brand awareness and content discoverability through customizable 
              links, supercharging audience engagement.
            </template>
          </StatisticsBox>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center py-8 text-center bg-right bg-no-repeat bg-primary-dark-violet bg-boost-link-mobile-pattern md:bg-boost-link-desktop-pattern">
      <h1 class="pt-12 pb-6 text-2xl font-bold text-white md:text-4xl">
        Boost your links today
      </h1>
      <button class="px-10 py-3 text-lg font-bold text-white transition-all bg-primary-cyan rounded-3xl hover:bg-primary-cyan-light">
        Get Started
      </button>
    </div>
    <div class="grid grid-cols-12 py-8 bg-neutral-dark-violet">
      <div class="flex flex-col items-center col-span-12 my-5 md:my-0 md:col-span-3 lg:col-span-4">
        <div>
          <img
            src="./assets/images/logo.svg"
            class="brightness-filter"
          >
        </div>
      </div>
      <div class="col-span-12 my-5 text-center md:my-0 md:col-span-2">
        <FooterList
          :lists="featuresListMenu"
          label="Features"
        />
      </div>
      <div class="col-span-12 my-5 text-center md:my-0 md:col-span-2">
        <FooterList
          :lists="resourcesListMenu"
          label="Resources"
        />
      </div>
      <div class="col-span-12 my-5 text-center md:my-0 md:col-span-1">
        <FooterList
          :lists="companyListMenu"
          label="Company"
        />
      </div>
      <div class="flex col-span-12 pt-3 md:col-start-10 md:col-span-2 justify-evenly">
        <div>
          <svg
            class="text-white transition-all cursor-pointer fill-current hover:text-primary-cyan"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          ><path
            fill=""
            d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
          /></svg>
        </div>
        <div>
          <svg
            class="text-white transition-all cursor-pointer fill-current hover:text-primary-cyan"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          ><path
            fill=""
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
          /></svg>
        </div>
        <div>
          <svg
            class="text-white transition-all cursor-pointer fill-current hover:text-primary-cyan"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          ><path
            fill=""
            d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
          /></svg>
        </div>
        <div>
          <svg
            class="text-white transition-all cursor-pointer fill-current hover:text-primary-cyan"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
          ><path
            fill=""
            d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
          /></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref,reactive, defineComponent, onMounted } from 'vue'
import Header from './components/Header.vue'
import ShorterBox from './components/ShorterBox.vue'
import StatisticsBox from './components/StatisticsBox.vue'
import FooterList from './components/FooterList.vue'
import { getShortedLink } from './functions/readLocalStorage.js'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    ShorterBox,
    StatisticsBox,
    FooterList
  },
  setup(){
    const shortedLink = ref([])
    const featuresListMenu = reactive([
      {
        id: 1,
        title: 'Link Shortening',
        href: '#'
      },
      {
        id: 2,
        title: 'Branded Links',
        href: '#'
      },
      {
        id: 3,
        title: 'Analytics',
        href: '#'
      }
    ])


    const resourcesListMenu = reactive([
      {
        id: 1,
        title: 'Blog',
        href: '#'
      },
      {
        id: 2,
        title: 'Developers',
        href: '#'
      },
      {
        id: 3,
        title: 'Support',
        href: '#'
      }
    ])


    const companyListMenu = reactive([
      {
        id: 1,
        title: 'About',
        href: '#'
      },
      {
        id: 2,
        title: 'Our Team',
        href: '#'
      },
      {
        id: 3,
        title: 'Careers',
        href: '#'
      },
      {
        id: 4,
        title: 'Contact',
        href: '#'
      }

      
    ])
    
    onMounted(() => {
      console.log('mounted ...')
      shortedLink.value = getShortedLink()
    })
    function getShortedLinks(){
      shortedLink.value = getShortedLink()
    }

    return {
      featuresListMenu,
      resourcesListMenu,
      companyListMenu,
      shortedLink,
      getShortedLinks
    }
  }
})
</script>

<style>
.line-background::before{
  content: '';
  width: 50vw;
  height: 10px;
  background: #2acfcf;
  z-index: 0;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
}
.brightness-filter{
  filter: brightness(5);
}
.flip-enter {
  opacity:0;
}

.flip-enter-active{
  animation: flipInX 1s;
}

.flip-leave {
  opacity:1;
}

.flip-leave-active {
  animation: flipInX 1s reverse;
}


@-webkit-keyframes flipInX {
  0% {
      -webkit-transform: perspective(400px) rotateX(90deg);
      opacity: 0;
  }
  40% {
      -webkit-transform: perspective(400px) rotateX(-10deg);
  }
  70% {
      -webkit-transform: perspective(400px) rotateX(10deg);
  }
  100% {
      -webkit-transform: perspective(400px) rotateX(0deg);
      opacity: 1;
  }
}

@keyframes flipInX {
  0% {
      transform: perspective(400px) rotateX(90deg); 
      opacity: 0;
  }
  40% {
      transform: perspective(400px) rotateX(-10deg);
  }
  70% {
      transform: perspective(400px) rotateX(10deg);
  }
  100% {
      transform: perspective(400px) rotateX(0deg);
      opacity: 1;
  }
}

.flipInX {
  -webkit-backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  backface-visibility: visible !important;
  animation-name: flipInX;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

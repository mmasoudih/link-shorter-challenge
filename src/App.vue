<template>
  <div class="h-screen">
    <Header />
    <div class="container mx-auto">
      <ShorterBox class="relative z-40 top-20" />
    </div>
    <div class="z-0 pt-20 pb-40 text-center bg-neutral-light-gray">
      <div class="container mx-auto">
        <template
          v-for="n in 5"
          :key="n"
          class="pt-40"
        >
          <div class="w-8/12 mx-auto my-2 bg-white rounded-lg">
            test
          </div>
        </template>
      </div>
      <div class="w-5/12 mx-auto">
        <h1 class="py-5 text-4xl font-bold text-neutral-dark-blue">
          Advanced Statistics
        </h1>
        <p class="text-neutral-gray-violet">
          Track how your links are performing across the web with our 
          advanced statistics dashboard.
        </p>
      </div>
      <div class="container mx-auto">
        <div class="relative grid grid-cols-3 gap-6 px-10 py-20 grid-auto-rows-fr line-background">
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
    <div class="flex flex-col items-center justify-center py-8 bg-primary-dark-violet boost-link-section">
      <h1 class="pt-12 pb-6 text-4xl font-bold text-white">
        Boost your links today
      </h1>
      <button class="px-10 py-3 text-lg font-bold text-white bg-primary-cyan rounded-3xl">
        Get Started
      </button>
    </div>
    <div class="grid grid-cols-12 py-8 bg-neutral-dark-violet">
      <div class="flex flex-col items-center col-span-4">
        <div>
          <img
            src="./assets/images/logo.svg"
            class="brightness-filter"
          >
        </div>
      </div>
      <div class="col-span-2">
        <FooterList
          :lists="featuresListMenu"
          label="Features"
        />
      </div>
      <div class="col-span-2">
        <FooterList
          :lists="resourcesListMenu"
          label="Resources"
        />
      </div>
      <div class="col-span-1">
        <FooterList
          :lists="companyListMenu"
          label="Company"
        />
      </div>
      <div class="flex col-span-2 col-start-10 pt-3 justify-evenly">
        <div>
          <img
            src="./assets/images/icon-facebook.svg"
          >
        </div>
        <div>
          <img
            src="./assets/images/icon-instagram.svg"
          >
        </div>
        <div>
          <img
            src="./assets/images/icon-pinterest.svg"
          >
        </div>
        <div>
          <img
            src="./assets/images/icon-twitter.svg"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from 'vue'
import Header from './components/Header.vue'
import ShorterBox from './components/ShorterBox.vue'
import StatisticsBox from './components/StatisticsBox.vue'
import FooterList from './components/FooterList.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    ShorterBox,
    StatisticsBox,
    FooterList
  },
  setup(){

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

    return {
      featuresListMenu,
      resourcesListMenu,
      companyListMenu
    }
  }
})
</script>

<style scoped>
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
.boost-link-section{
  background-image: url('./assets/images/bg-boost-desktop.svg');
  background-repeat: no-repeat;
  background-position: center;
}
.brightness-filter{
  filter: brightness(5);
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

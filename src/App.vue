<template>
  <div class="h-screen">
    <Header />
    <div class="container mx-auto">
      <ShorterBox class="relative z-40 top-20" />
    </div>
    <div class="z-0 pt-40 text-center bg-neutral-light-gray">
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
        <div class="relative grid grid-flow-row grid-cols-3 gap-6 px-10 py-20 line-background">
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import ShorterBox from './components/ShorterBox.vue'
import StatisticsBox from './components/StatisticsBox.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    ShorterBox,
    StatisticsBox
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
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

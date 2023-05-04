<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
  export default {
    components: {
      AppHeader,
      AppFooter,
    },
  props: {
    ten: { type: String, default: 1 },
  },
  // methods: {
  //   hihi(){
  //     console.log(this.$route.params)
  //     console.log(this.name)
  //   },
  //   reRender(){
  //     this.render++;
  //   }
  // }
  };
</script>
<template>
    <div id="app">
      <!-- <button @click="reRender">sd</button> -->
    <AppHeader />
    <div class="mid">
      <router-view :key="$route.fullPath" />
    </div>
    <!-- <AppFooter class="bottom"></AppFooter>  -->
  </div>
</template>

<style>
  @import "assets/style.css";
  .page {
    max-width: 400px;
    margin: auto;
  }

</style>

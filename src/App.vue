<template>
  <div>
    <HeaderComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
  export default {
    components: {
      HeaderComponent,
    },
    data(){
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
@use './assets/style/partials/variables' as *;

</style>
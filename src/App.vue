<template>
  <div>
    <HeaderComponent />
    <JumbotronComponent />
    <ProductsComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import JumbotronComponent from './components/JumbotronComponent.vue';
import ProductsComponent from './components/ProductsComponent.vue';
  export default {
    components: {
      HeaderComponent,
      JumbotronComponent,
      ProductsComponent,
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
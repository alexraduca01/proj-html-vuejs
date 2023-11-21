<template>
  <div>
    <HeaderComponent />
    <JumbotronComponent />
    <ProductsComponent />
    <CollectionsComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import JumbotronComponent from './components/JumbotronComponent.vue';
import ProductsComponent from './components/ProductsComponent.vue';
import CollectionsComponent from './components/CollectionsComponent.vue';
  export default {
    components: {
      HeaderComponent,
      JumbotronComponent,
      ProductsComponent,
      CollectionsComponent,
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
<template>
  <div>
    <HeaderComponent />
    <JumbotronComponent />
    <ProductsComponent />
    <CollectionsComponent />
    <SmallCarousel />
    <PromoComponent />
    <NewArrivals />
    <AuthorComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import JumbotronComponent from './components/JumbotronComponent.vue';
import ProductsComponent from './components/ProductsComponent.vue';
import CollectionsComponent from './components/CollectionsComponent.vue';
import SmallCarousel from './components/SmallCarousel.vue';
import PromoComponent from './components/PromoComponent.vue';
import NewArrivals from './components/NewArrivals.vue';
import AuthorComponent from './components/AuthorComponent.vue';
  export default {
    components: {
      HeaderComponent,
      JumbotronComponent,
      ProductsComponent,
      CollectionsComponent,
      SmallCarousel,
      PromoComponent,
      NewArrivals,
      AuthorComponent,
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
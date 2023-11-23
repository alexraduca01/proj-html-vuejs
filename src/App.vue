<template>
  <div class="box">
    <div class="smol-box">
      <i class="fa-solid fa-otter"></i>
      <span class="text-uppercase fw-bold">placeholder</span>
    </div>
    <div class="smol-box">
      <i class="fa-solid fa-skull-crossbones"></i>
      <span class="text-uppercase fw-bold">placeholder</span>
    </div>
  </div>
  <div>
    <HeaderComponent />
    <JumbotronComponent />
    <ProductsComponent />
    <CollectionsComponent />
    <SmallCarousel />
    <PromoComponent />
    <NewArrivals />
    <AuthorComponent />
    <BlogComponent />
    <AdvertisingComponent />
    <BrandsComponent />
    <SubscribeComponent />
    <FooterComponent />
    <PaymentsComponent />
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
import BlogComponent from './components/BlogComponent.vue';
import AdvertisingComponent from './components/AdvertisingComponent.vue';
import BrandsComponent from './components/BrandsComponent.vue';
import SubscribeComponent from './components/SubscribeComponent.vue';
import PaymentsComponent from './components/PaymentsComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
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
      BlogComponent,
      AdvertisingComponent,
      BrandsComponent,
      SubscribeComponent,
      PaymentsComponent,
      FooterComponent,
    },
    data(){
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
@use './assets/style/partials/variables' as *;
.fa-skull-crossbones {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.2rem;
}
.fa-otter {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.2rem;
}
span {
  position: absolute;
  top: 82%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.6rem;
}
.box {
  position: fixed;
  top: 150px;
  right: 20px;
  z-index: 5000000;
}
.smol-box {
  position: relative;
  margin-bottom: 10px;
  width: 70px;
  height: 70px;
  box-shadow: 0 0 10px black;
  border-radius: 5px;
  background-color: $darkerWhite;
  color: red;
}

</style>
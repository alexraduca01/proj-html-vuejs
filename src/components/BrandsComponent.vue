<template>
    <div class="my-bg p-5">
        <div class="container">
            <p class="text-center fs-5 text-uppercase my-5">brand logos</p>
            <div class="row overflow-hidden flex-nowrap">
                <swiper :loop="true" :slidesPerView="5" :spaceBetween="30" :pagination="{ clickable: true, }" :modules="modules" class="mySwiper" >
                    <swiper-slide v-for="item in store.brandLogos">
                        <div class="img-container" >
                            <img :src="item" alt="">
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
    
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { store } from '../data/store.js';
import { Autoplay } from 'swiper/modules';
    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        name: 'BrandsComponent',
        data(){
            return {
                store,
                modules: [Autoplay]
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
p {
    letter-spacing: 4px;
}
.img-container {
    width: calc(100% / 5);
}
.my-bg {
    background-color: $darkerWhite;
}
</style>
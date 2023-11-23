<template>
    <section>
        <swiper class="mySwiper" :loop="true" :autoplay="{ delay: 3000, disableOnInteraction: false, }" :modules="modules">
            <swiper-slide  v-for="item in store.jumboContent">
                <div class="position-relative w-100">
                    <div class="overflow-hidden">
                        <img :src="item.thumb" class="w-100" style="height: 779px;" :alt="item.title">
                    </div>
                    <div class="jumbo-content text-white text-center">
                        <h2>{{ item.title }}</h2>
                        <h5 class="fs-1">{{ item.subtitle }}</h5>
                        <div class="mt-5">
                            <button class="btn border btn-bg text-white text-uppercase p-4 px-5 mx-3 fs-5" v-for="item in item.button">{{ item }}</button> 
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </section>
    
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { store } from '../data/store.js';
import { Autoplay } from 'swiper/modules'
    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        name: 'JumbotronComponent',
        data(){
            return {
                store,
                modules: [Autoplay],
            }
        },
    }
</script>

<style lang="scss" scoped>
h2 {
    font-size: 5rem;
}
.btn-bg {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 30px;
}
.btn-bg:hover {
    background-color: transparent !important;
}
img {
    object-fit: cover;
    object-position: 0 10%;
}
.jumbo-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
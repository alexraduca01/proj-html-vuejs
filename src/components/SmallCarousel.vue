<template>
    <div class="p-5">
        <div class="container p-0 position-relative ">
            <div class="mb-5">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="line col-4"></div>
                    <h2 class="col-4 text-center">Best Seller</h2>
                    <div class="line col-4"></div>
                </div>
                <p class="my-text-color text-center fs-5">Must have products from our top sellers</p>
            </div>
            <swiper :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false, }" :slidesPerView="5" :spaceBetween="30" :modules="modules" class="mySwiper row" >
                <swiper-slide v-for="item in store.carouselImages" class="col-2">
                    <div class="image-container p-0 position-relative">
                            <img :src="item.thumb" :alt="item.title">
                            <div class="hovered-element">
                                <div class="hovered-text text-white text-center">
                                    <p class="fw-bold m-0">{{ item.title }}</p>
                                    <p class="small-font">{{ item.tags }}</p>
                                    <span class="text-decoration-line-through me-2">{{ item.price.promo }}</span>
                                    <span>{{ item.price.main }}</span>
                                </div>
                                <div class="hovered-subtext justify-content-around w-100 small-font text-white">
                                    <div><i class="fa-solid fa-cart-shopping"></i> Add to cart</div>
                                    <div><i class="fa-solid fa-list"></i> Details</div>
                                </div>
                            </div>
                        </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <div>
        
    </div>
    
</template>

<script>
 import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { store } from '../data/store.js';
    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        name: 'SmallCarousel',
        data(){
            return {
                store,
                modules: [Autoplay],
            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
.hovered-element {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: rgb(238,174,202);
    background: linear-gradient(0deg, rgba(238,174,202,0.9) 23%, rgba(148,187,233,0.9) 79%);
    z-index: 1000;
    transition: height 0.2s linear;
    cursor: pointer;
}
.hovered-subtext {
    display: none;
    position: absolute;
    bottom: 5px;
    left: 0;
}
.small-font {
    font-size: 0.8rem;
}
img {
    width: 100%;
}
.hovered-text {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.image-container {
    &:hover > .hovered-element {
        height: 100%;
    }
    &:hover > .hovered-element > .hovered-text {
        display: block;
    }
    &:hover > .hovered-element > .hovered-subtext {
        display: flex;
    }
}
h2 {
    font-size: 3rem;
}
.line {
    border-top: 1px solid $myGray;
    width: 32%;
}
.left-arrow {
    width: 25px;
    position: absolute;
    left: -50px;
    top: 60%;
    color: $myWhite;
    padding: 10px 8px;
    background-color: $myGray;
    cursor: pointer;
}
.right-arrow {
    width: 25px;
    position: absolute;
    right: -50px;
    top: 60%;
    color: $myWhite;
    padding: 10px 8px;
    background-color: $myGray;
    cursor: pointer;
}
.my-text-color {
    color: $myGray;
}
</style>
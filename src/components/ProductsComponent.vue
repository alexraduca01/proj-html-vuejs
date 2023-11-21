<template>
    <div class="p-5">
        <div class="container p-0">
            <div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="line col-4"></div>
                    <h2 class="text-center col-4">Featured Products</h2>
                    <div class="line col-4"></div>
                </div>
                <p class="my-text-color text-center fs-5">Must have products from our top sellers</p>
            </div>
            <div class="d-flex justify-content-center align-items-center my-5">
                <div class="px-5 py-2 border fs-5 cursor-pointer active" @click="prodType(0)">Men</div>
                <div class="px-5 py-2 border-top border-bottom fs-5 unactive cursor-pointer" @click="prodType(1)">Women</div>
                <div class="px-5 py-2 border fs-5 unactive cursor-pointer" @click="prodType(2)">Accessories</div>
            </div>
            <div class="row">
                <div class="col-3" v-for="card in store.featuredProducts[0][activeIndex]">
                    <div>
                        <div class="position-relative img-container">
                            <img :src="card.thumb" class="w-100" :alt="card.title">
                            <div class="hovered-element">
                                <div class="hovered-text">
                                    <div><i class="fa-solid fa-cart-shopping"></i> Add to cart</div>
                                    <div><i class="fa-solid fa-list"></i> Details</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="my-4">
                        <p class="fw-bold fs-5">{{ card.title }}</p>
                        <p>{{ card.tags }}</p>
                        <span class="text-decoration-line-through fs-6 me-1 secondary-text-color">{{ card.price.promo }}</span>
                        <span class="fs-5 secondary-text-color">{{ card.price.main }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
    export default {
        name: 'ProductsComponent',
        data(){
            return {
                store,
                active: false,
                activeIndex: 0,
            }
        },
        methods: {
            prodType(n){
                this.activeIndex = n;
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
.hovered-text {
    text-align: center;
    color: $myWhite;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
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
}
.img-container {
    &:hover > .hovered-element {
        height: 100%;
    }
    &:hover > .hovered-element > .hovered-text {
        display: block;
    }
}

.line {
    border-top: 1px solid $myGray;
    width: 28%;
}
.secondary-text-color {
    color: $myBlue;
}
.my-text-color {
    color: $myGray;
}
h2 {
    font-size: 3rem;
}
.unactive {
    background-color: $darkerWhite;
}
.unactive:hover {
    background-color: $myWhite!important;
}
.cursor-pointer {
    cursor: pointer;
}
.active {
    background-color: $myWhite!important;
}
</style>
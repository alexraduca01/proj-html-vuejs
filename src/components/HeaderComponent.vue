<template>
    <header>
        <section class="border-bottom">
            <div class="container d-flex justify-content-between align-items-center">
                <div class="d-flex gap-3">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-pinterest-p"></i>
                </div>
                <div>
                    <ul class="list-unstyled d-flex m-0">
                        <li class="p-3"><a href="#" class="my-text-color">Shopping Cart</a></li>
                        <li class="p-3 border-start border-end"><a href="#" class="my-text-color">My Account</a> <i class="fa-solid my-text-color fa-angle-down"></i></li>
                        <li class="p-3 px-5 my-bg-dark"><a href="#" class="text-black me-2"><i class="fa-solid me-2 fa-cart-shopping"></i> CART</a> <i class="fa-solid fa-angle-down"></i></li>
                    </ul>
                </div>
            </div>
        </section>
        <section>
            <div class="container d-flex justify-content-between align-items-center">
                <div>
                    <img src="img/classic_shop_logo1x.png" alt="logo">
                </div>
                <div>
                    <ul class="list-unstyled m-0 d-flex gap-5">
                        <li @click="changeActiveIndex(item.id), dropdownToggle(index)" v-for="(item, index) in store.navContent" class="py-5 position-relative" :class="activeElement(item.id)">
                            <span class="cursor-pointer">{{ item.title }} <i class="fa-solid fa-angle-down"></i></span>
                            <ul class="list-unstyled" v-if="item.flag">
                                <li v-if="item.content">
                                    <ul class="list-unstyled">
                                        <li class="text-black border rounded my-bg-dark my-dropdown"><p class="m-0 p-2 border-bottom" v-for="obj in item.content">{{ obj }}</p></li>
                                    </ul>
                                </li>
                                <li v-else class="my-dropdown2 d-flex gap-2 p-2 my-bg-dark rounded">
                                    <div v-for="img in item.images">
                                        <img :src="img" alt="">
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="py-5"><button class="text-uppercase btn btn-primary py-1 px-4 rounded-pill">shop now!</button></li>
                        <li class="py-5"><i class="fa-solid fa-magnifying-glass"></i></li>
                    </ul>
                </div>
            </div>
        </section>
    </header>
</template>

<script>
import { store } from '../data/store.js';
    export default {
        name: 'HeaderComponent',
        data(){
            return {
                store,
                activeIndex: 0,
            }
        },
        methods: {
            changeActiveIndex(id){
                for(let i = 0; i < store.navContent.length; i++){
                    if(store.navContent[i].id === id){
                        this.activeIndex = i;
                    };
                };
            },
            activeElement(id){
                if(store.navContent[this.activeIndex].id === id){
                    return "active";
                };
            },
            dropdownToggle(index){
                if(store.navContent[index].flag === false){
                    store.navContent[index].flag = true;
                }else{
                    store.navContent[index].flag = false;
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
.my-dropdown2 {
    position: absolute;
    top: 60%;
    left: -270px;
    z-index: 1000;
}
.my-dropdown {
    position: absolute;
    top: 60%;
    left: 0;
    z-index: 1000;
}
.fa-brands {
    cursor: pointer;
}
.cursor-pointer {
    cursor: pointer;
}
.active {
    border-top: 2px solid $myBlue;
    color: $myBlue!important;
}
.fa-magnifying-glass{
    font-size: 0.9rem;
}
.fa-angle-down{
    font-size: 0.9rem;
    cursor: pointer;
}
.my-bg-dark {
    background-color: $darkerWhite;
}
.my-text-color {
    color: $myGray;
}
a {
    text-decoration: none;
}
</style>
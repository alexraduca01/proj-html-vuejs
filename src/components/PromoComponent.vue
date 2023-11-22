<template>
    <div class="my-background my-5">
        <div class="container p-5">
            <div class="row py-5">
                <div class="col-6" v-for="item in store.promoBox">
                    <div class="position-relative ">
                        <img :src="item.thumb" :alt="item.title">
                        <div class="text-white img-text">
                            <h2 class="fs-1">{{ item.title }}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing <br> elit. Rerum, dolorem.</p>
                            <button class="p-2 px-4 rounded-pill">View More</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
    export default {
        name: 'PromoComponent',
        data(){
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
button {
    color: white;
    border: 1px solid white;
    background-color: rgba(255, 255, 255, 0.217);
    transition: background-color 0.2s ease-out;
    &:hover {
        background-color: transparent;
    }
}
.img-text{
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translate(0, -50%);
    word-wrap: break-word;
}
img {
    width: 100%;
}
.my-background {
    width: 100%;
    background-image: url('img/bkgd_confetti-compressor.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
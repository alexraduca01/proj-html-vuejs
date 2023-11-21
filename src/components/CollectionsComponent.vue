<template>
    <div class="w-100 my-5">
        <div class="box position-relative" v-for="item in store.collections">
            <img :src="item.thumb" :alt="item.title">
            <div class="box-content">
                <h2>{{ item.title }}</h2>
                <p class="text-uppercase">{{ item.subtitle }}</p>
                <button class="btn border btn-bg text-white rounded-pill text-uppercase p-2 px-4">view more</button>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
    export default {
        name: 'CollectionsComponent',
        data(){
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 10%;
}
.box {
    display: inline-block;
    width: calc(100% / 3);
    height: calc(100vw / 3);
}
.box-content {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
    color: $myWhite;
}
.btn-bg {
    background-color: rgba(255, 255, 255, 0.1);
}
.btn-bg:hover {
    background-color: transparent;
}
</style>
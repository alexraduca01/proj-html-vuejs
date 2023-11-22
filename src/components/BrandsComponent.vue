<template>
    <div class="my-bg p-5">
        <div class="container">
            <p class="text-center fs-5 text-uppercase my-4">brand logos</p>
            <div class="row overflow-hidden flex-nowrap">
                <div class="img-container" v-for="item in store.brandLogos">
                    <img :src="item" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
    export default {
        name: 'BrandsComponent',
        data(){
            return {
                store,
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
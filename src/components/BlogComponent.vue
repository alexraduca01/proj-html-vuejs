<template>
    <div class="mt-5 border-bottom p-5">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <div class="line col-4"></div>
                <h2 class="col-4 text-center">From Our Blog</h2>
                <div class="line col-4"></div>
            </div>
            <p class="my-text-color text-center fs-5">The latest Classic Shop news</p>
            <div class="row my-5">
                <div class="col-4" v-for="item in store.blogContent">
                    <div class="mb-2">
                        <img :src="item.thumb" :alt="item.title">
                    </div>
                    <div>
                        <h4>{{ item.title }}</h4>
                        <p>September 9th, 2015 | 0 Comments</p>
                    </div>
                    <div>
                        <p class="fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiorem.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
    export default {
        name: 'BlogComponent',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
h2 {
    font-size: 2.9rem;
}
img {
    width: 100%;
}
.line {
    border-top: 1px solid $myGray;
    width: 32%;
}
.my-text-color {
    color: $myGray;
}
</style>
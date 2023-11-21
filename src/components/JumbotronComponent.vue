<template>
    <section>
        <div class="position-relative" style="height: 779px;">
            <div class="w-100 h-100 overflow-hidden ">
                <img :src="store.jumboContent[imgIndex].thumb" class="w-100" :alt="store.jumboContent[imgIndex].title">
            </div>
            <div class="jumbo-content text-white text-center">
                <h2>{{ store.jumboContent[imgIndex].title }}</h2>
                <h5 class="fs-1">{{ store.jumboContent[imgIndex].subtitle }}</h5>
                <div class="mt-5">
                    <button class="btn border btn-bg text-white text-uppercase p-4 px-5 mx-3 fs-5" v-for="item in store.jumboContent[imgIndex].button">{{ item }}</button> 
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../data/store.js';
    export default {
        name: 'JumbotronComponent',
        data(){
            return {
                store,
                imgIndex: 2,
            }
        },
        methods: {
            switchImage(){
                this.imgIndex++;
                if(this.imgIndex > store.jumboContent.length - 1) {
                    this.imgIndex = 0;
                };
            },
            autoSwitch(){
                setInterval(this.switchImage, 5000);
            },
        },
        mounted(){
            this.autoSwitch();
        }
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
img {
    object-position: 0 -50px;
}
.jumbo-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
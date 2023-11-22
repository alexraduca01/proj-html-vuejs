<template>
    <div class="my-background my-5">
        <div class="container p-5">
            <div class="my-card py-5 gap-5 d-flex flex-column text-white align-items-center">
                <div>
                    <img :src="store.authors[this.activeIndex].thumb" alt="testimonial">
                </div>
                <p class="fs-5 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel labore, fuga reprehenderit dignissimos quibusdam molestias dolores laudantium assumenda iusto dolor omnis doloribus quod nihil nemo laboriosam amet doloremque tenetur sunt incidunt possimus atque in? Temporibus blanditiis assumenda tenetur natus quae!</p>
                <p class="fs-5"><strong>{{ store.authors[this.activeIndex].name }}</strong> Theme Fusion</p>
                <div class="d-flex justify-content-between gap-3">
                    <div class="dot" :class="activeDot(1)" @click="changeAuthor(1), activeDot(1)"></div>
                    <div class="dot" :class="activeDot(2)" @click="changeAuthor(2), activeDot(2)"></div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
    export default {
        name: 'AuthorComponent',
        data(){
            return {
                store,
                activeIndex: 0,
            }
        },
        methods: {
            changeAuthor(id){
                for(let i = 0; i < store.authors.length ; i++){
                    if(store.authors[i].id === id){
                        this.activeIndex = i;
                    }
                }
            },
            activeDot(id) {
                if(store.authors[this.activeIndex].id === id){
                return 'active';
                }
            },
            autoSwitch(){
                if(this.activeIndex < 1 ){
                    this.activeIndex++;
                } else if (this.activeIndex > 0 ){
                    this.activeIndex = 0;
                }
            },
            switchInterval(){
                setInterval(this.autoSwitch, 5000);
            }
        },
        mounted(){
          this.switchInterval();  
        }
    }
</script>

<style lang="scss" scoped>
.active {
    background-color: white;
}
.dot {
    width: 15px;
    height: 15px;
    border: 1px solid white;
    border-radius: 50%;
}
img {
    width: 8rem;
}
.my-background {
    width: 100%;
    background-image: url('img/testimonials_home_1_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
</style>
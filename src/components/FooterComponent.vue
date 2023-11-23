<template>
    <div class="my-bg p-5">
        <div class="container p-5 text-white">
            <div class="row">
                <div class="col-3 flex-column justify-content-around d-flex">
                    <div>
                        <img src="img/classic_shop_logo_footer.png" class="my-logo" alt="">
                    </div>
                    <div>
                        <ul class="list-unstyled">
                            <li class="mb-1">12345 North Main Street,</li>
                            <li class="mb-1">New York, NY 555555</li>
                            <li class="mb-1">Phone: 1.800.555.6789</li>
                            <li class="mb-1">Email: info@company.com</li>
                            <li>Web: Theme-fusion.com</li>
                        </ul>
                    </div>
                    <div class="fs-5">
                        <i class="fa-brands me-3 fa-facebook-f"></i>
                        <i class="fa-brands me-3 fa-twitter"></i>
                        <i class="fa-brands me-3 fa-instagram"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div class="col-3">
                    <ul class="list-unstyled">
                        <li class="text-uppercase">top rated products</li>
                        <li v-for="item in store.advertisingContent[0].third" class="d-flex justify-content-between border-bottom border-secondary py-3">
                            <div v-if="item.stars === true">
                                <span>{{ item.name }}</span> <br>
                                <div v-for="n in 5" class="d-inline">
                                    <span><i class="fa-solid text-primary fa-star"></i></span>
                                </div><br>
                                <span class="text-decoration-line-through fw-bold">{{ item.price.promo }}</span>
                                <span class="text-decoration-underline fw-bold ms-2">{{ item.price.main }}</span>
                            </div>
                            <div v-else>
                                <span>{{ item.name }}</span>
                                <span class="fw-bold">{{ item.price.main }}</span>
                            </div>
                            <div>
                                <img :src="item.thumb" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul class="list-unstyled">
                        <li class="text-uppercase">recent posts</li>
                        <li v-for="n in 6" class="border-bottom border-secondary py-3"><i class="fa-solid fa-angle-right"></i> <span class="fs-5 ms-2">Lorem ipsum dolor sit amet.</span></li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul class="list-unstyled">
                        <li class="text-uppercase">tags</li>
                        <li class="d-flex flex-wrap py-3"><span class="p-2 border border-secondary m-1" v-for="text in store.randomTags">{{ text }}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
    export default {
        name: 'FooterComponent',
        data(){
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
.fa-angle-right {
    font-size: 0.8rem;
}
.my-bg {
    background-color: $darkerColor;
}
.my-logo {
    width: 180px;
}
img {
    width: 80px;
}
</style>
<template>
    <div class="p-5 my-5">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <ul class="list-unstyled">
                        <li class="text-uppercase list-title fs-5">featured</li>
                        <li v-for="item in store.advertisingContent[0].first" class="d-flex justify-content-between border-bottom py-3">
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
                                <span class="fw-bold ms-1">{{ item.price.main }}</span>
                            </div>
                            <div>
                                <img :src="item.thumb" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul class="list-unstyled">
                        <li class="text-uppercase list-title fs-5">on sale</li>
                        <li v-for="item in store.advertisingContent[0].second" class="d-flex justify-content-between border-bottom py-3">
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
                                <span class="text-decoration-line-through fw-bold">{{ item.price.promo }}</span><br>
                                <span class="fw-bold text-decoration-underline ">{{ item.price.main }}</span>
                            </div>
                            <div>
                                <img :src="item.thumb" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <ul class="list-unstyled">
                        <li class="text-uppercase list-title fs-5">top rated</li>
                        <li v-for="item in store.advertisingContent[0].third" class="d-flex justify-content-between border-bottom py-3">
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
                        <li class="text-uppercase list-title fs-5">latest reviews</li>
                        <li v-for="item in store.advertisingContent[0].forth" class="d-flex justify-content-between border-bottom py-3">
                            <div v-if="item.stars === true">
                                <span>{{ item.name }}</span> <br>
                                <div v-for="n in 5" class="d-inline">
                                    <span><i class="fa-solid text-primary fa-star"></i></span>
                                </div><br>
                                <span>by Beardman</span>
                            </div>
                            <div>
                                <img :src="item.thumb" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
    export default {
        name:'AdvertisingComponent',
        data(){
            return {
                store,
            }
        },
    }
</script>

<style lang="scss" scoped>
img {
    width: 80px;
}
.list-title {
    letter-spacing: 2px;
}
</style>
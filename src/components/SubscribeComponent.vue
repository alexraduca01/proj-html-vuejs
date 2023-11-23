<template>
    <div class="my-bg p-5">
        <div class="container p-5">
            <div class="row text-white justify-content-between ">
                <div class="col-6 d-flex gap-4 align-items-center">
                    <div>
                        <i class="fa-regular bg-black fs-1 fa-envelope"></i>
                    </div>
                    <div>
                        <h3 class="m-0">Subscribe now and get special offers</h3>
                    </div>
                </div>
                <div class="col-6 gap-4 d-flex justify-content-end align-items-center">
                    <input type="text" class="form-control w-50 rounded-pill" placeholder="insert your email">
                    <button class="btn btn-primary rounded-pill px-5 text-uppercase ">send</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SubscribeComponent',
        data(){
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
.my-bg {
    background-color: #303337;
}
.fa-envelope {
    padding: 1rem;
    border-radius: 50%;
    color: $myGray;
    background-color: $darkColor;
}
</style>
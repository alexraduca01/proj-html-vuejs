<template>
    <header>
        <section class="border-bottom">
            <div class="container d-flex justify-content-between align-items-center">
                <div class="d-flex gap-3">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
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
        
        <div>

        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        data(){
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;
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
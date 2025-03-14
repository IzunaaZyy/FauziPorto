<template>
       <Navbar />
    <div class="container">
        <div class="home row mx-auto text-center">
            <div class="image">
                <img :src="require('@/assets/images/sabo.jpg')">
            </div>
            <h1 class="title mt-4" style="font-size: 7vw;">FAUZI MAULANA</h1>
            <p class="my-text" style="font-size: 3vw;">
                Web <span class="text-green">Developer</span>
            </p>
            <div class="d-flex flex-row justify-content-center">
                <a href="https://www.facebook.com/fauzi.maulana.18488169?mibextid=ZbWKwL" target="_blank" class="socmed">
                    <img :src="require('@/assets/images/facebook-circle.svg')" alt="Facebook" class="social-image">
                </a>
                <a href="https://github.com/IzunaaZyy" target="_blank" class="socmed">
                    <img :src="require('@/assets/images/github-circle.svg')" alt="Github" class="social-image">
                </a>
                <a href="https://www.instagram.com/mlnfauzyy19" target="_blank" class="socmed">
                    <img :src="require('@/assets/images/instagram.svg')" alt="Instagram" class="social-image">
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>


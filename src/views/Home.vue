<template>
        <div class="navbar">
            <router-link :to="{ name: 'home' }" class="nav-link" style="font-size: 1.7vw;"><b>Home</b></router-link>
            <router-link :to="{ name: 'about' }" class="nav-link" style="font-size: 1.7vw;"><b>About</b></router-link>
            <router-link :to="{ name: 'projects' }" class="nav-link" style="font-size: 1.7vw;"><b>Projects</b></router-link>
            <router-link :to="{ name: 'achievements' }" class="nav-link" style="font-size: 1.7vw;"><b>Achievements</b></router-link>
            <router-link :to="{ name: 'contact' }" class="nav-link" style="font-size: 1.7vw;"><b>Contact</b></router-link>
        </div>
    <div class="container">
        <div class="home row mx-auto text-center">
            <div class="image">
                <img :src="require('@/assets/images/sabo.jpg')">
            </div>
            <h1 class="title mt-4">FAUZI MAULANA</h1>
            <p class="my-text">
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

<script>
import Projects from './../../data/projects.json'
export default {
    setup() {
        return {
            projects: Projects
        }   
    }
}
</script>


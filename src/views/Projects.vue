<template>
        <div class="navbar">
            <router-link :to="{ name: 'home' }" class="nav-link" style="font-size: 1.7vw;"><b>Home</b></router-link>
            <router-link :to="{ name: 'about' }" class="nav-link" style="font-size: 1.7vw;"><b>About</b></router-link>
            <router-link :to="{ name: 'projects' }" class="nav-link" style="font-size: 1.7vw;"><b>Projects</b></router-link>
            <router-link :to="{ name: 'achievements' }" class="nav-link" style="font-size: 1.7vw;"><b>Achievements</b></router-link>
            <router-link :to="{ name: 'contact' }" class="nav-link" style="font-size: 1.7vw;"><b>Contact</b></router-link>
        </div>
    <div class="container">
        <div class="row">
            <h1 class="sub-title text-center">Projects</h1>
            <div v-for="project in projects" :key="project.index" class="col-md-3">
                <div class="card box-shadow mt-3">
                    <img :src="require('@/assets/images/' + project.image)" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 style="text-align: center"><b>{{ project.title }}</b></h5>
                        <p class="pt-2" style="text-align: justify;">{{ project.description }}</p>
                        <b><span v-for="tag in project.tag" :key="tag">{{ tag }}</span></b>
                    </div>
                </div>
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
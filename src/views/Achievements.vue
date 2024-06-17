<template>
      <div class="navbar">
            <router-link :to="{ name: 'home' }" class="nav-link" style="font-size: 2.2vw;"><b>Home</b></router-link>
            <router-link :to="{ name: 'about' }" class="nav-link" style="font-size: 2.2vw;"><b>About</b></router-link>
            <router-link :to="{ name: 'projects' }" class="nav-link" style="font-size: 2.2vw;"><b>Projects</b></router-link>
            <router-link :to="{ name: 'achievements' }" class="nav-link" style="font-size: 2.2vw;"><b>Achievements</b></router-link>
            <router-link :to="{ name: 'contact' }" class="nav-link" style="font-size: 2.2vw;"><b>Contact</b></router-link>
        </div>
    <div class="container">
        <div class="row">
            <h1 class="sub-title text-center">Achievements</h1>
            <div class="col-md">
                <div class="card box-shadow mt-3">
                    <div class="card-body">
                        <ul class="p-1">
                            <li v-for="achievement in achievements" :key="achievement.message" class="achievements">
                                <img :src="require('@/assets/images/trophy.svg')" alt="Trophy">
                                <h5>{{achievement.message}}</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Achievements from './../../data/achievements.json'
export default {
    setup() {
        return {
            achievements: Achievements
        }   
    }
}
</script>

<style>

</style>
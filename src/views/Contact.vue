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
            <h1 class="sub-title  text-center">Contact</h1>
            <div class="col-md">
                <div class="card box-shadow mt-3">
                    <div class="card-body">
                        <ul class="pl-1">
                            <li v-for="contact in contacts" :key="contact.index" class="achievements">
                                <img :src="require('@/assets/images/' + contact.icon)" alt="Trophy">
                                <h5><a :href="contact.link"> {{contact.link}}</a></h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Contacts from './../../data/contacts.json'
export default {
    setup() {
        return {
            contacts: Contacts
        }   
    }
}
</script>

<template>
     <Navbar />
     
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

<script setup>
import Navbar from '../components/Navbar.vue';
import contacts from './../../data/contacts.json'
</script>

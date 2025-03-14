<script setup>
import Navbar from '../components/Navbar.vue';
import projects from './../../data/projects.json';
</script>

<template>
  <Navbar />
  <div class="container">
    <div class="row">
      <h1 class="sub-title text-center">Proyek</h1>
      <div v-for="(project, index) in projects" :key="index" class="col-md-3">
        <div class="card box-shadow mt-3">
          <img :src="require('@/assets/images/' + project.image)" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="text-center"><b>{{ project.title }}</b></h5>
            <p class="pt-2 text-justify">{{ project.description }}</p>
            <b>
              <span v-for="tag in project.tag" :key="tag" class="badge bg-primary me-1">
                {{ tag }}
              </span>
            </b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Tambahkan styling jika diperlukan */
</style>

<template>
    <div class="relative w-full">
      <!-- Navbar untuk desktop -->
      <div class="hidden md:flex justify-center items-center gap-10 bg-white py-4 shadow-sm">
        <a href="#home" class="nav-link" style="font-size: 2.2vw;"><b>Beranda</b></a>
        <a href="#about" class="nav-link" style="font-size: 2.2vw;"><b>Tentang Saya</b></a>
        <a href="#projects" class="nav-link" style="font-size: 2.2vw;"><b>Proyek</b></a>
        <a href="#achievements" class="nav-link" style="font-size: 2.2vw;"><b>Prestasi</b></a>
        <a href="#contact" class="nav-link" style="font-size: 2.2vw;"><b>Kontak</b></a>
      </div>
  
      <!-- Navbar untuk mobile dengan ikon hamburger -->
      <div class="md:hidden flex justify-between items-center bg-white p-4 shadow-sm">
        <div class="text-xl font-bold text-gray-800"></div>
        <button @click="toggleMenu" class="focus:outline-none" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
  
      <!-- Menu dropdown mobile -->
      <div v-if="isMenuOpen" class="md:hidden absolute w-full bg-white shadow-md z-10">
        <div class="flex flex-col">
          <a href="#home" @click="scrollToSection('home')" class="py-4 px-4 text-gray-800 hover:bg-gray-100 border-b border-gray-200 font-bold text-center">Beranda</a>
          <a href="#about" @click="scrollToSection('about')" class="py-4 px-4 text-gray-800 hover:bg-gray-100 border-b border-gray-200 font-bold text-center">Tentang Saya</a>
          <a href="#projects" @click="scrollToSection('projects')" class="py-4 px-4 text-gray-800 hover:bg-gray-100 border-b border-gray-200 font-bold text-center">Proyek</a>
          <a href="#achievements" @click="scrollToSection('achievements')" class="py-4 px-4 text-gray-800 hover:bg-gray-100 border-b border-gray-200 font-bold text-center">Prestasi</a>
          <a href="#contact" @click="scrollToSection('contact')" class="py-4 px-4 text-gray-800 hover:bg-gray-100 font-bold text-center">Kontak</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          this.isMenuOpen = false;
        }
      }
    },
    mounted() {
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
          this.isMenuOpen = false;
        }
      });
    },
    beforeUnmount() {
      window.removeEventListener('resize', () => {});
    }
  };
  </script>
<template>
    <Navbar />

    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-12 md:py-20" id="home">
        <div class="flex flex-col items-center justify-center">
            <div class="relative mb-6 group">
                <img src="../assets/images/sabo.jpg"
                    class="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-gray-800 transition-all duration-300 group-hover:scale-105"
                    alt="Profile Photo">
                <div class="absolute inset-0 rounded-full group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            <h1 class="text-5xl md:text-7xl font-bold text-center tracking-tight text-gray-700 mb-2">FAUZI MAULANA</h1>
            <p class="text-xl md:text-3xl font-light mb-8 text-gray-900">
                Web <span class="text-blue-500">Developer</span>
            </p>
            <div class="flex justify-center space-x-6">
                <a href="https://www.facebook.com/fauzi.maulana.18488169?mibextid=ZbWKwL" target="_blank"
                    class="transform hover:-translate-y-2 transition-transform duration-300">
                    <img :src="require('@/assets/images/facebook-circle.svg')" alt="Facebook"
                        class="w-10 h-10 md:w-12 md:h-12 grayscale hover:grayscale-0 transition-all duration-300">
                </a>
                <a href="https://github.com/IzunaaZyy" target="_blank"
                    class="transform hover:-translate-y-2 transition-transform duration-300">
                    <img :src="require('@/assets/images/github-circle.svg')" alt="Github"
                        class="w-10 h-10 md:w-12 md:h-12 grayscale hover:grayscale-0 transition-all duration-300">
                </a>
                <a href="https://www.instagram.com/izunaazyy" target="_blank"
                    class="transform hover:-translate-y-2 transition-transform duration-300">
                    <img :src="require('@/assets/images/instagram.svg')" alt="Instagram"
                        class="w-10 h-10 md:w-12 md:h-12 grayscale hover:grayscale-0 transition-all duration-300">
                </a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section
        class="bg-gray-900 text-gray-100 px-5 py-8 md:px-12 md:py-16 border border-gray-800 rounded-3xl mx-3 mb-12 shadow-xl"
        id="about">
        <div class="max-w-6xl mx-auto">
            <header class="mb-8 ">
                <h2
                    class="text-3xl font-bold text-white relative inline-block after:content-[''] after:absolute after:w-full after:h-1 after:bottom-0 after:left-0">
                    Tentang Saya</h2>
            </header>
            <div class="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div class="w-full md:w-1/3 flex justify-center">
                    <img class="w-64 h-64 object-cover rounded-full border-4 border-gray-700 shadow-lg"
                        src="../assets/images/aboutme 500x500.jpg" alt="About Me Photo">
                </div>
                <div class="w-full md:w-2/3">
                    <p class="text-lg leading-relaxed mb-4">Hai semuanya! Nama saya Fauzi Maulana...</p>
                    <p class="text-gray-400 italic"> Saya seorang pengembang web dari Bandung, Jawa Barat. Saya memiliki
                        pengalaman 1 tahun dalam pengembangan web front-end. Saat ini, saya masih menjadi siswa SMK
                        dengan jurusan Rekayasa Perangkat Lunak. Saya memiliki beberapa pengalaman dalam membuat proyek
                        perangkat lunak sederhana, dan saya sangat menikmati apa yang saya lakukan saat ini. Menurut
                        saya, membuat website bukan hanya sekadar pekerjaan, tetapi juga seperti menuangkan ide-ide
                        kreatif dari pikiran kita.

                        Selain membuat website, saya juga suka berolahraga dan menjelajahi alam. Selain itu, saya adalah
                        individu yang berpikiran positif dan dapat bekerja sama dalam tim.</p>
                </div>
            </div>
        </div>
        <div class="max-w-6xl mx-auto mt-16">
            <header class="mb-8">
                <h2
                    class="text-3xl font-bold text-white relative inline-block after:content-[''] after:absolute after:w-full after:h-1 after:bottom-0 after:left-0">
                    Pengalaman & Pendidikan
                </h2>
            </header>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Pengalaman -->
                <div>
                    <h3 class="text-2xl font-semibold mb-4">Pengalaman</h3>
                    <ul class="space-y-4">
                        <li>
                            <strong>Teaching Factory (TEFA) SMKN 4 Bandung</strong> (Februari - Juni 2024)
                            <p class="text-gray-400">Membuat beberapa section pada halaman web, membantu dalam proses
                                slicing CSS, dam Mencari dan melaporkan bug.</p>
                        </li>
                        <li>
                            <strong>Praktik Kerja Lapangan di Universitas Komputer Indonesia</strong> (Juli - Oktober
                            2024)
                            <p class="text-gray-400">Mendesain ulang website UNIKOM dan mengelola data backlink dari
                                beberapa sitemap yang berkaitan dengan Universitas Komputer Indonesia.</p>
                        </li>
                    </ul>
                </div>
                <!-- Pendidikan -->
                <div>
                    <h3 class="text-2xl font-semibold mb-4">Pendidikan</h3>
                    <ul class="space-y-4">
                        <li>
                            <strong>SDN 040 Pasawahan</strong> (2013 - 2019)
                            <p class="text-gray-400">Aktif dalam kegiatan ekstrakurikuler Futsal, Pencak Silat, dan Polisi Cilik.</p>
                        </li>
                        <li>
                            <strong>SMP Negeri 3 Bandung</strong> (2019 - 2022)
                            <p class="text-gray-400">Aktif dalam kegiatan ekstrakurikuler Pramuka dan Bulutangkis, Serta mengikuti organisasi OSIS.
                            </p>
                        </li>
                        <li>
                            <strong>SMK Negeri 4 Bandung</strong> (2022 - 2025) 
                            <p class="text-gray-400">Aktif dalam kegiatan ekstrakurikuler ORBIT dan Bulutangkis.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>



    <header>
        <div class="text-2xl font-bold mb-5 fadein-bot title-section flex items-center">
            <div class="h-[1px] w-10 bg-gray-400 md:w-20 aos-init aos-animate" data-aos="zoom-in-left"
                data-aos-duration="600"></div>
            &nbsp; Keterampilan
        </div>
    </header>
    <section>
        <div>
            <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5">
                <li class="mr-2">
                    <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                        :class="{ 'text-black bg-amber-200 bg-opacity-10': activeTab === 1 }"
                        @click="activeTab = 1">Teknologi
                    </button>
                </li>
                <li class="mr-2">
                    <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                        :class="{ 'text-black bg-amber-200 bg-opacity-10': activeTab === 2 }"
                        @click="activeTab = 2">Alat</button>
                </li>
            </ul>
        </div>
        <div v-show="activeTab === 1">
            <div class="grid grid-cols-2 p-8 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
                <div v-for="item in tech" :key="item.id" class="relative">
                    <!-- Status di Pojok Kanan Atas -->
                    <span
                        class="absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded text-amber-300 shadow-md">
                        {{ item.status }}
                    </span>

                    <div
                        class="item-tech flex flex-col items-center text-center cursor-pointer gap-2 rounded border border-amber-200 p-4 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3">
                        <div class="flex h-16 w-16 items-center justify-center lg:h-20 lg:w-20 zoom-in">
                            <img :src="item.imageUrl" :alt="item.name"
                                class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                                style="color: transparent" />
                        </div>

                        <!-- Nama Teknologi -->
                        <h3 class="text-lg font-semibold text-secondary">{{ item.name }}</h3>

                        <!-- Deskripsi Keahlian -->
                        <p class="text-xs md:text-sm text-gray-400">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="activeTab === 2">
            <div class="grid grid-cols-2 p-8 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
                <div v-for="item in tools" :key="item.id">
                    <div
                        class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                        <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                            <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                                class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                                :src="item.imageUrl" style="color: transparent;">
                        </div>
                        <div class="flex items-center text-sm md:text-base lg:text-lg">
                            <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{
                        item.name
                    }}
                            </div>
                            <div
                                class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                                {{ item.status }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section class="container mx-auto px-4 py-12 mb-12 bg-gray-100 dark:bg-gray-900 rounded-3xl" id="projects">
        <h2 class="text-3xl font-bold text-center text-white mb-10">Proyek</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(project, index) in projects" :key="index"
                class="dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div class="relative overflow-hidden">
                    <img :src="require('@/assets/images/' + project.image)"
                        class="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                        alt="Project Image">
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-end">
                        <div class="p-4 text-white">
                            <p class="font-bold">View Project</p>
                        </div>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ project.title }}</h3>
                    <p class="text-gray-700 dark:text-gray-300 mb-4">{{ project.description }}</p>
                    <div class="flex justify-between items-center">
                        <button
                            class="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300">
                            Details
                        </button>
                        <a :href="project.link"
                            class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Achievements Section -->
    <section class="container mx-auto px-4 py-12 mb-12" id="achievements">
        <h2 class="text-3xl font-bold text-center mb-10">Prestasi</h2>
        <div class="max-w-3xl mx-auto">
            <ul class="space-y-6">
                <li v-for="(achievement, index) in achievements" :key="index"
                    class="flex items-start gap-4 p-4 border-l-4 border-gray-800 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
                    <img :src="require('@/assets/images/trophy.svg')" alt="Trophy" class="w-10 h-10 mt-1">
                    <div>
                        <h5 class="text-lg font-semibold text-gray-900 dark:text-white">{{ achievement.message }}</h5>
                        <p v-if="achievement.date" class="text-sm text-gray-600 dark:text-gray-400 mt-1">{{
                        achievement.date }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="container mx-auto px-4 py-12 mb-12 bg-gray-100 dark:bg-gray-900 rounded-3xl" id="contact">
        <h2 class="text-3xl font-bold text-center text-white mb-10">Kontak</h2>
        <div class="max-w-3xl mx-auto">
            <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label for="name"
                            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nama</label>
                        <input type="text" id="name" name="name"
                            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent dark:bg-gray-800 dark:text-white">
                    </div>
                    <div>
                        <label for="email"
                            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <input type="email" id="email" name="email"
                            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent dark:bg-gray-800 dark:text-white">
                    </div>
                </div>
                <div>
                    <label for="message"
                        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pesan</label>
                    <textarea id="message" name="message" rows="5"
                        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent dark:bg-gray-800 dark:text-white"></textarea>
                </div>
                <div class="flex justify-center">
                    <button type="submit"
                        class="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105">
                        Kirim Pesan
                    </button>
                </div>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-4">
        <div class="mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-2 md:mb-0">
                    <h3 class="text-lg font-bold">Fauzi Maulana</h3>
                    <p class="text-gray-400 text-sm">Web Developer</p>
                </div>
                <div class="flex space-x-3">
                    <a href="https://www.facebook.com/fauzi.maulana.18488169?mibextid=ZbWKwL" target="_blank"
                        class="hover:text-gray-300">
                        <img :src="require('@/assets/images/facebook-circle.svg')" alt="Facebook"
                            class="w-5 h-5 grayscale">
                    </a>
                    <a href="https://github.com/IzunaaZyy" target="_blank" class="hover:text-gray-300">
                        <img :src="require('@/assets/images/github-circle.svg')" alt="Github" class="w-5 h-5 grayscale">
                    </a>
                    <a href="https://www.instagram.com/izunaazyy" target="_blank" class="hover:text-gray-300">
                        <img :src="require('@/assets/images/instagram.svg')" alt="Instagram" class="w-5 h-5 grayscale">
                    </a>
                </div>
            </div>
            <div class="mt-4 text-center text-gray-400 text-xs">
                <p>© {{ new Date().getFullYear() }} Fauzi Maulana. All rights reserved.</p>
            </div>
        </div>
    </footer>

</template>

<script setup>
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import projects from './../../data/projects.json';
import achievements from './../../data/achievements.json';

const activeTab = ref(1);
const tech = ref([
    {
        id: 1,
        name: "HTML",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
        status: "Terbiasa",
        description: "Mahir dalam HTML semantik dan struktur yang optimal.",
    },
    {
        id: 2,
        name: "CSS",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
        status: "Terbiasa",
        description: "Menguasai CSS, termasuk Flexbox dan Grid.",
    },
    {
        id: 3,
        name: "PHP",
        imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png",
        status: "Terbiasa",
        description: "Berpengalaman dalam backend development dengan PHP.",
    },
    {
        id: 4,
        name: "JavaScript",
        imageUrl: "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
        status: "Pemula",
        description: "Mahir dalam ES6+, DOM manipulation, dan API integration.",
    },
    {
        id: 5,
        name: "VueJS",
        imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp",
        status: "Terbiasa",
        description: "Menguasai Composition API dan Vue Router.",
    },
    {
        id: 6,
        name: "NodeJS",
        imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png",
        status: "Pemula",
        description: "Masih dalam tahap pembelajaran dan eksplorasi.",
    },

]);

const tools = ref([
    {
        id: 1,
        name: 'Git',
        imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
        status: 'Version Control'
    },
    {
        id: 2,
        name: 'GitHub',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        status: 'Git Hosting'
    },
    {
        id: 3,
        name: 'NPM',
        imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png',
        status: 'Package Manager'
    },
    {
        id: 4,
        name: 'MySQL',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
        status: 'Database'
    }
]);


</script>


<style>
/* Base animations that work with Tailwind */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(100%);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Apply animations with Tailwind classes */
.animate-fadeInUp {
    animation: fadeInUp 0.5s ease-out forwards;
}

.animate-fadeInLeft {
    animation: fadeInLeft 0.5s ease-out forwards;
}

/* Add smooth scrolling */
html {
    scroll-behavior: smooth;
}
</style>
<template>
  <aside class="space-y-10 lg:sticky lg:top-20 lg:max-h-[calc(100vh-5rem)]">
    <!-- Profil -->
    <div>
      <h1 class="text-5xl font-bold text-white mb-4">{{ props.firstName }} {{ props.lastName }}</h1>
      <h2 class="text-2xl text-gray-400 font-light mb-6">
        {{ props.jobTitle }}
      </h2>
      <p class="text-gray-400 leading-relaxed">
        {{ props.shortBio }}
      </p>
    </div>

    <!-- Navigation -->
    <nav class="space-y-4">
      <a
        v-for="link in navLinks"
        :key="link.id"
        :href="link.href"
        class="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
      >
        <span
          class="w-12 h-px bg-gray-600 group-hover:w-16 group-hover:bg-white transition-all"
        ></span>
        <span class="font-medium">
          {{ link.label }}
        </span>
      </a>
    </nav>

    <!-- Réseaux sociaux -->
    <div class="flex gap-6 pt-4">
      <a
        v-for="social in socials"
        :key="social.name"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="social.name"
        class="text-gray-400 hover:text-white transition-colors"
      >
        <component :is="social.icon" class="w-6 h-6 transition-transform hover:scale-110" />
      </a>
    </div>
  </aside>
</template>

<script setup lang="ts">

import { Github, Linkedin } from 'lucide-vue-next'

// Props (optionnel si tu veux passer les données depuis le parent)
const props = defineProps({
  firstName: {
    type: String,
    default: 'Jason',
  },
  lastName: {
    type: String,
    default: 'Levecq',
  },
  jobTitle: {
    type: String,
    default: 'Développeur Full Stack',
  },
  shortBio: {
    type: String,
    default: 'Je construis des expériences digitales accessibles et pixel-perfect pour le web.',
  },
})

// Navigation
const navLinks = [
  { id: 1, label: 'ABOUT', href: '#about' },
  { id: 2, label: 'PROJECTS', href: '#projects' },
]

// Réseaux sociaux
const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/JasonXenon',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jason-levecq/',
    icon: Linkedin,
  },
]
</script>

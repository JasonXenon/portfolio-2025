<template>
  <section id="projects" class="min-h-screen bg-slate-900 text-gray-300 py-16 px-6"> <!-- Réduction de l'espacement ici -->
    <div class="max-w-7xl mx-auto">
      <!-- Titre -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white mb-4">Projets sélectionnés</h2>
        <p class="text-gray-400 max-w-2xl">
          Une sélection de projets sur lesquels j’ai travaillé, mettant l’accent sur la qualité du
          code, l’UX et la performance.
        </p>
      </div>

      <!-- Liste projets -->
      <div class="space-y-12">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '../projects/ProjectCard.vue'

const projects = [
  {
    id: 1,
    title: 'Plateforme de gestion financière',
    description:
      'Application web permettant une transparence complète des finances pour des clubs sportifs professionnels.',
    stack: ['Vue.js', 'TypeScript', 'Laravel', 'Tailwind CSS'],
    github: 'https://github.com/...',
    live: 'https://...',
  },
  {
    id: 2,
    title: 'Suivi de dépenses personnelles',
    description: 'Outil simple et intuitif pour visualiser et analyser ses dépenses quotidiennes.',
    stack: ['Vue.js', 'Node.js', 'Chart.js'],
    github: 'https://github.com/...',
  },
]
</script>

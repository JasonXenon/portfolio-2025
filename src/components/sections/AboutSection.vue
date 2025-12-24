<template>
  <section id="about" class="text-gray-300 py-16 px-6">
    <div class="max-w-3xl">
      <div class="mb-12">
        <h2 class="text-red-400 font-mono text-sm tracking-widest uppercase mb-2">
          01. À propos de moi
        </h2>

        <h3 class="text-white text-3xl font-bold tracking-tight mb-6">
          Mon parcours & <span class="text-red-400">philosophie</span>
        </h3>

        <div class="space-y-6 text-lg leading-relaxed">
          <p>
            {{ mainDescription }}
          </p>

          <p>
            Mon expertise s'est forgée sur des projets concrets : du simple outil de gestion
            budgétaire aux systèmes complexes de
            <span class="text-white border-b border-red-500/50">transparence financière</span>
            pour le sport de haut niveau. Mon objectif reste le même : apporter de la clarté là où
            résident les données complexes.
          </p>

          <blockquote class="border-l-2 border-red-900/60 pl-6 py-2 my-8 italic text-slate-400">
            "{{ personalNote }}"
          </blockquote>
        </div>
      </div>

      <div class="pt-8 border-t border-slate-800/60">
        <h4 class="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">
          Stack Technologique
        </h4>

        <div class="flex flex-wrap gap-x-6 gap-y-3">
          <span
            v-for="skill in skills"
            :key="skill"
            class="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-default group"
          >
            <span
              class="h-1.5 w-1.5 rounded-full bg-red-500 opacity-50 group-hover:opacity-100 group-hover:bg-emerald-500 transition-all"
            ></span>
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mainDescription = ref(
  "Je suis un développeur passionné par la création d'interfaces utilisateur accessibles et pixel-perfect. Mon travail se situe à l'intersection du design et de l'ingénierie, créant des expériences méticuleusement construites pour la performance.",
)

const personalNote = ref(
  "Lorsque je m'éloigne de mon clavier, je cultive mon équilibre entre sport et vie personnelle : que ce soit sur un terrain de badminton, en salle de musculation ou lors de moments précieux en famille pour recharger les batteries.",
)

const skills = ref([
  'Laravel',
  'Vue.js',
  'TypeScript',
  'Livewire',
  'Node.js',
  'Tailwind CSS',
  'JavaScript',
  'Git',
])
</script>

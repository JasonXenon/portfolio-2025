<template>
  <section id="about" class="min-h-screen bg-slate-900 text-gray-300 py-12 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="space-y-4">
        <p class="text-gray-300 leading-relaxed">
          {{ mainDescription }}
        </p>

        <p class="text-gray-300 leading-relaxed">
          Par le passé, j’ai eu l’opportunité de développer des applications dans des domaines
          variés, allant d’outils de suivi de dépenses personnelles à des plateformes assurant une
          <span class="text-white font-medium">transparence totale des finances</span>
          de clubs sportifs professionnels. Ces projets répondaient à une problématique récurrente
          chez de nombreux parents :
          <span class="italic text-gray-200">« Où va réellement mon argent ? »</span>
        </p>

        <p class="text-gray-300 leading-relaxed">
          {{ personalNote }}
        </p>
      </div>

      <!-- Compétences -->
      <div class="pt-4"> <!-- Réduction de l'espacement ici -->
        <h3 class="text-xl font-semibold text-white mb-6">Technologies principales</h3>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="skill in skills"
            :key="skill"
            class="px-4 py-2 bg-slate-800 text-blue-400 rounded-full text-sm font-medium border border-slate-700 hover:border-blue-500 hover:bg-slate-700 transition-all"
          >
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
  "Je suis un développeur passionné par la création d'interfaces utilisateur accessibles et pixel-perfect qui allient design réfléchi et ingénierie robuste. Mon travail préféré se situe à l'intersection du design et du développement, créant des expériences qui non seulement sont belles mais aussi méticuleusement construites pour la performance et l'utilisabilité.",
)

const personalNote = ref(
  'Dans mon temps libre, je pratique la musculation, le badminton , passe du temps avec ma famille, ou explore de nouvelles technologies.',
)

const skills = ref([
  'Vue.js',
  'TypeScript',
  'Laravel',
  'Livewire',
  'Node.js',
  'Tailwind CSS',
  'JavaScript',
  'HTML & CSS',
  'Git',
])
</script>

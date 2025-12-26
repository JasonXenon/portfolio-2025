<template>
  <section id="about" class="text-gray-300 py-16 px-6">
    <Transition
      mode="out-in"
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-8"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-8"
    >
      <div :key="currentPortfolio" class="max-w-3xl">
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
              v-for="(skill, index) in skills"
              :key="skill"
              :style="{ transitionDelay: `${index * 50}ms` }"
              class="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-emerald-400 transition-all cursor-default group animate-fade-in"
            >
              <span
                class="h-1.5 w-1.5 rounded-full bg-red-500 opacity-50 group-hover:opacity-100 group-hover:bg-emerald-500 transition-all"
              ></span>
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolio } from '@/composables/usePortfolio'

const { currentPortfolio } = usePortfolio()

const portfolioData = {
  laravel: {
    mainDescription: "Je suis un développeur passionné par la création d'interfaces utilisateur accessibles et pixel-perfect. Mon travail se situe à l'intersection du design et de l'ingénierie, créant des expériences méticuleusement construites pour la performance.",
    personalNote: "Lorsque je m'éloigne de mon clavier, je cultive mon équilibre entre sport et vie personnelle : que ce soit sur un terrain de badminton, en salle de musculation ou lors de moments précieux en famille pour recharger les batteries.",
    skills: ['Laravel', 'Vue.js', 'TypeScript', 'Livewire', 'Node.js', 'Tailwind CSS', 'JavaScript', 'Git']
  },
  dotnet: {
    mainDescription: "Développeur spécialisé dans l'écosystème Microsoft, je conçois des applications robustes et scalables. Mon expertise en C# et .NET me permet de créer des solutions d'entreprise performantes et maintenables.",
    personalNote: "Passionné par l'architecture logicielle et les patterns de conception, je m'efforce de produire du code clean et testable qui facilite la collaboration en équipe.",
    skills: ['C#', '.NET Core', 'Angular', 'TypeScript', 'Azure', 'SQL Server', 'Entity Framework', 'REST APIs']
  }
}

const mainDescription = computed(() => portfolioData[currentPortfolio.value].mainDescription)
const personalNote = computed(() => portfolioData[currentPortfolio.value].personalNote)
const skills = computed(() => portfolioData[currentPortfolio.value].skills)
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}
</style>

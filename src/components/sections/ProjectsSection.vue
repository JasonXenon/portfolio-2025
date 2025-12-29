<template>
  <section id="projects" class="text-gray-300 py-20 px-6 border-t border-slate-800/50">
    <div class="max-w-3xl">
      <div class="mb-16">
        <h2
          :class="[
            'font-mono text-sm tracking-widest uppercase mb-2 transition-colors duration-500',
            currentPortfolio === 'laravel' ? 'text-emerald-400' : 'text-blue-400',
          ]"
        >
          02. Réalisations
        </h2>
        <h3 class="text-3xl font-bold text-white tracking-tight">
          Projets
          <span
            :class="[
              'transition-colors duration-500',
              currentPortfolio === 'laravel' ? 'text-emerald-400' : 'text-blue-400',
            ]"
          >
            sélectionnés
          </span>
        </h3>
      </div>

      <TransitionGroup
        name="project"
        tag="div"
        class="space-y-4"
        enter-active-class="transition-all duration-500 ease-out"
        leave-active-class="transition-all duration-300 ease-in absolute"
        enter-from-class="opacity-0 translate-x-12"
        enter-to-class="opacity-100 translate-x-0"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 -translate-x-12"
      >
        <div
          v-for="(project, index) in projects"
          :key="`${currentPortfolio}-${project.id}`"
          :style="{ transitionDelay: `${index * 100}ms` }"
          :class="[
            'group relative p-6 -mx-6 rounded-2xl transition-all duration-300 border border-transparent',
            currentPortfolio === 'laravel'
              ? 'hover:bg-slate-800/40 hover:border-red-900/30'
              : 'hover:bg-slate-800/40 hover:border-blue-900/30',
          ]"
        >
          <a
            v-if="project.live"
            :href="project.live"
            :target="project.target"
            class="absolute inset-0 z-10"
            aria-label="Voir le projet en direct"
          ></a>

          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div class="space-y-3">
              <h4
                class="text-xl font-semibold text-slate-100 transition-colors flex items-center gap-2"
              >
                {{ project.title }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </h4>

              <p class="text-sm leading-relaxed text-slate-400 max-w-xl">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-x-4 gap-y-2 pt-2">
                <span
                  v-for="tech in project.stack"
                  :key="tech"
                  class="text-[11px] font-mono tracking-wider text-slate-500 uppercase"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="flex gap-4 pt-1 relative z-20">
              <a
                v-if="project.github"
                :href="project.github"
                :target="project.target"
                :class="[
                  'p-1 text-slate-500 transition-colors hover:scale-110 transform',
                  currentPortfolio === 'laravel' ? 'hover:text-emerald-400' : 'hover:text-blue-400',
                ]"
                title="Code source"
              >
                <span class="sr-only">GitHub</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolio } from '@/composables/usePortfolio'

const { currentPortfolio } = usePortfolio()

const allProjects = {
  laravel: [
    {
      id: 1,
      title: 'TeamBudget — Plateforme de transparence financière',
      description:
        "Application née d'un besoin de confiance : elle permet aux clubs sportifs de justifier l'utilisation des cotisations auprès des parents. L'outil offre une transparence totale sur les investissements du staff, répondant concrètement à la question : « Où va mon argent ? »",
      stack: ['Vue.js', 'Laravel', 'Tailwind'],
      github: 'https://github.com/JasonXenon/TeamBudget',
      live: '#',
      target: '_blank',
    },
    {
      id: 2,
      title: 'EcoSens — Gestion budgétaire intelligente',
      description:
        "Inspirée par la complexité des tableurs Excel traditionnels, EcoSens simplifie le suivi des finances personnelles. L'application permet une catégorisation sur mesure et l'automatisation des paiements récurrents avec rappels intelligents pour ne plus rien oublier.",
      stack: ['Vue.js', 'Laravel', 'Chart.js'],
      github: 'https://github.com/JasonXenon/ecoSens',
      live: 'https://ecosens.jldev.be',
      target: '_blank',
    },
  ],
  dotnet: [
    {
      id: 1,
      title: 'CodeDex - Bibliothèque de Snippets de Code',
      description:
        "Une application web conçue pour les développeurs, offrant une bibliothèque organisée de snippets de code. CodeDex facilite la gestion, la recherche et le partage de morceaux de code réutilisables, optimisant ainsi le flux de travail des programmeurs.",
      stack: ['C#', '.NET Core', 'Blazor', 'SQL Server', 'Google OAuth', 'CQS Pattern'],
      github: 'https://github.com/JasonXenon/CodeDex',
      live: '#',
      target: '_blank',
    },
  ],
}

const projects = computed(() => allProjects[currentPortfolio.value])
</script>

<style scoped>
.project-move {
  transition: all 0.5s ease;
}
</style>

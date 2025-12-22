<template>
  <article
    class="group relative grid md:grid-cols-[1fr_auto] gap-8 rounded-xl border border-slate-800 p-8 hover:border-slate-700 hover:bg-slate-800/40 transition-all duration-300"
  >
    <!-- Contenu -->
    <div class="space-y-4">
      <h3 class="text-xl font-semibold text-white">
        {{ project.title }}
      </h3>

      <p class="text-gray-400 leading-relaxed">
        {{ project.description }}
      </p>

      <!-- Stack -->
      <div class="flex flex-wrap gap-2 pt-2">
        <span
          v-for="tech in project.stack"
          :key="tech"
          class="px-3 py-1 text-xs font-medium bg-slate-800 text-blue-400 rounded-full border border-slate-700"
        >
          {{ tech }}
        </span>
      </div>
    </div>

    <!-- Liens -->
    <div class="flex md:flex-col gap-4 justify-start md:justify-center">
      <a
        v-if="project.github"
        :href="project.github"
        target="_blank"
        aria-label="Voir le code sur GitHub"
        class="text-gray-400 hover:text-white transition"
      >
        <Github class="w-6 h-6" />
      </a>

      <a
        v-if="project.live"
        :href="project.live"
        target="_blank"
        aria-label="Voir le projet en ligne"
        class="text-gray-400 hover:text-white transition"
      >
        <ExternalLink class="w-6 h-6" />
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Github, ExternalLink } from 'lucide-vue-next'

defineProps<{
  project: {
    title: string
    description: string
    stack: string[]
    github?: string
    live?: string
  }
}>()
</script>

<template>
  <section id="contact" class="text-gray-300 py-20 px-6 border-t border-slate-800/50">
    <div class="max-w-3xl">
      <!-- Header -->
      <div class="mb-16">
        <h2
          :class="[
            'font-mono text-sm tracking-widest uppercase mb-2 transition-colors duration-500',
            currentPortfolio === 'laravel' ? 'text-red-400' : 'text-blue-400',
          ]"
        >
          03. Contact
        </h2>

        <h3 class="text-3xl font-bold text-white tracking-tight">
          Travaillons
          <span
            :class="[
              'transition-colors duration-500',
              currentPortfolio === 'laravel' ? 'text-red-400' : 'text-blue-400',
            ]"
          >
            ensemble
          </span>
        </h3>
      </div>

      <!-- Content -->
      <div class="space-y-8 text-lg leading-relaxed">
        <p class="text-slate-400 max-w-2xl">
          Je suis actuellement à la recherche d’un
          <span class="text-white font-medium"> poste de développeur web en CDI </span>. Je
          suis ouvert aux échanges avec des équipes techniques ou des recruteurs souhaitant discuter
          d’une opportunité.
        </p>

        <!-- Contact links -->
        <div class="space-y-4">
          <a
            href="mailto:levecqjason@gmail.com"
            :class="[
              'group flex items-center gap-4 text-slate-400 transition-colors',
              currentPortfolio === 'laravel' ? 'hover:text-red-400' : 'hover:text-blue-400',
            ]"
          >
            <span
              :class="[
                'w-10 h-px transition-all',
                currentPortfolio === 'laravel'
                  ? 'bg-red-900/60 group-hover:bg-red-400 group-hover:w-16'
                  : 'bg-blue-900/60 group-hover:bg-blue-400 group-hover:w-16',
              ]"
            ></span>
            <span class="font-medium">M'envoyer un email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jason-levecq"
            target="_blank"
            rel="noopener noreferrer"
            :class="[
              'group flex items-center gap-4 text-slate-400 transition-colors',
              currentPortfolio === 'laravel' ? 'hover:text-red-400' : 'hover:text-blue-400',
            ]"
          >
            <span
              :class="[
                'w-10 h-px transition-all',
                currentPortfolio === 'laravel'
                  ? 'bg-red-900/60 group-hover:bg-red-400 group-hover:w-16'
                  : 'bg-blue-900/60 group-hover:bg-blue-400 group-hover:w-16',
              ]"
            ></span>
            <span class="font-medium">LinkedIn</span>
          </a>

          <a
            href="https://github.com/JasonXenon"
            target="_blank"
            rel="noopener noreferrer"
            :class="[
              'group flex items-center gap-4 text-slate-400 transition-colors',
              currentPortfolio === 'laravel' ? 'hover:text-red-400' : 'hover:text-blue-400',
            ]"
          >
            <span
              :class="[
                'w-10 h-px transition-all',
                currentPortfolio === 'laravel'
                  ? 'bg-red-900/60 group-hover:bg-red-400 group-hover:w-16'
                  : 'bg-blue-900/60 group-hover:bg-blue-400 group-hover:w-16',
              ]"
            ></span>
            <span class="font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolio } from '@/composables/usePortfolio'

const { currentPortfolio } = usePortfolio()
</script>

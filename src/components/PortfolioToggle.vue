<template>
  <div class="fixed top-6 right-6 z-50">
    <div
      class="flex gap-2 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg p-1.5 shadow-lg"
    >
      <button
        @click="setPortfolio('laravel')"
        :class="[
          'relative rounded-md p-[1px] transition-all duration-300',
          currentPortfolio === 'laravel'
            ? 'bg-gradient-to-br from-red-900 via-slate-700 to-emerald-900'
            : 'bg-gradient-to-br from-red-950/40 via-slate-800/40 to-emerald-950/40 hover:from-red-900/70 hover:to-emerald-900/70',
        ]"
      >
        <span
          :class="[
            'flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-mono transition-all duration-300',
            currentPortfolio === 'laravel'
              ? 'bg-slate-900 text-white shadow-lg shadow-emerald-500/20'
              : 'bg-slate-900/60 text-slate-400 hover:text-white',
          ]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
          Laravel / Vue
        </span>
      </button>

      <button
        @click="setPortfolio('dotnet')"
        :class="[
          'relative rounded-md p-[1px] transition-all duration-300',
          currentPortfolio === 'dotnet'
            ? 'bg-gradient-to-br from-red-900 via-slate-700 to-indigo-900'
            : 'bg-gradient-to-br from-red-950/40 via-slate-800/40 to-indigo-950/40 hover:from-red-900/70 hover:to-indigo-900/70',
        ]"
      >
        <span
          :class="[
            'flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-mono transition-all duration-300',
            currentPortfolio === 'dotnet'
              ? 'bg-slate-900 text-white shadow-lg shadow-indigo-500/20'
              : 'bg-slate-900/60 text-slate-400 hover:text-white',
          ]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          C# / .NET
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePortfolio } from '@/composables/usePortfolio'

const { currentPortfolio, setPortfolio } = usePortfolio()
</script>

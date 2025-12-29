<script setup lang="ts">
import { onMounted, computed } from 'vue'
import SideBarProfile from '@/components/sections/SideBarProfile.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import PortfolioToggle from '@/components/PortfolioToggle.vue'
import { usePortfolio } from '@/composables/usePortfolio'
import Contact from '@/components/contact/Contact.vue'

const { initializePortfolio, currentPortfolio } = usePortfolio()

const backgroundGradient = computed(() => {
  return currentPortfolio.value === 'laravel'
    ? 'bg-gradient-to-br from-red-950 via-slate-900 to-emerald-950'
    : 'bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950'
})

onMounted(() => {
  initializePortfolio()
})
</script>

<template>
  <section
    :class="['min-h-screen text-gray-300 transition-colors duration-700', backgroundGradient]"
  >
    <PortfolioToggle />

    <div class="max-w-7xl mx-auto px-6 py-20">
      <!-- Layout global -->
      <div class="grid lg:grid-cols-[400px_1fr] gap-16">
        <!-- Sidebar gauche (sticky) -->
        <SideBarProfile class="lg:sticky lg:top-20 h-fit" />

        <!-- Colonne droite (scroll) -->
        <main>
          <AboutSection />
          <ProjectsSection />
          <Contact />
        </main>
      </div>
    </div>
  </section>
</template>

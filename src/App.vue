<script setup lang="ts">
import SideBarProfile from '@/components/sections/SideBarProfile.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
</script>

<template>
  <section
    class="min-h-screen bg-gradient-to-br from-red-950 via-slate-900 to-emerald-950 text-gray-300"
  >
    <div class="max-w-7xl mx-auto px-6 py-20">
      <!-- Layout global -->
      <div class="grid lg:grid-cols-[400px_1fr] gap-16">
        <!-- Sidebar gauche (sticky) -->
        <SideBarProfile class="lg:sticky lg:top-20 h-fit" />

        <!-- Colonne droite (scroll) -->
        <main>
          <AboutSection />
          <ProjectsSection />
        </main>
      </div>
    </div>
  </section>
</template>

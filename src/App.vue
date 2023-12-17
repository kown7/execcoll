<script setup>
import TheMenu from './components/SelectExerMenu.vue'
import TemplateMenu from './components/TemplateFilter.vue'
import GenDocView from './components/GenViewDocument.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-gray-500 p-4 text-white">
      <h1 class="text-2xl">Exercise Collection Generator</h1>
    </header>

    <div class="flex flex-1">
      <!-- Sidebar -->
      <aside class="bg-gray-400 text-white flex-shrink-0 w-1/4 p-4">
        <h2 class="text-xl pb-4">Configuration</h2>
        <TemplateMenu />
	<span class="p-4"></span>
        <TheMenu />
      </aside>

      <!-- Main Content -->
      <main class="flex-1">
        <!-- Page content goes here -->
        <GenDocView />
      </main>
    </div>
  </div>
</template>

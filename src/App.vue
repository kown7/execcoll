<script setup>
import GenDocView from './components/GenViewDocument.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-gray-500 p-4 text-white">
      <h1 class="text-2xl">Exercise Collection Generator</h1>
    </header>

    <div class="flex flex-1">
      <!-- Main Content -->
      <main class="flex-1">
        <!-- Page content goes here -->
        <GenDocView />
      </main>
    </div>
  </div>
</template>

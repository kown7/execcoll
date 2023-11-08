<script setup>
	import TheMenu from './components/SelectExecMenu.vue'
</script>

<template>
	
  <div class="flex flex-col min-h-screen">
		<!-- Header -->
		<header class="bg-gray-500 p-4 text-white">
			<h1 class="text-2xl">Exercise Collection Generator</h1>
		</header>

		<div class="flex flex-1">
			<!-- Sidebar -->
			<aside class="bg-gray-400 text-white w-1/4 p-4">
				<h2 class="text-xl">Configuration</h2>
				
				<!-- Grid Layout for Two Rows -->
				<div class="grid grid-rows-3 gap-4">
					<div>
						<!-- First Row Content -->
						<h3 class="text-lg">Filter</h3>
						<!-- Content for the first row goes here -->
						Filter filter filter to come
					</div>
					<TheMenu />
				</div>
			</aside>

			<!-- Main Content -->
			<main class="flex-1 p-4">
				<!-- Page content goes here -->
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
			</main>
		</div>
  </div>
	
</template>

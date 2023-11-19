<template>
  <!-- Grid Layout for some rows -->
  <div class="grid gap-4">
    
      <div class="p-4">
	<h2 class="text-lg font-bold">Compile</h2>
	lipsum stuff
      </div>
      
    <div
      v-for="(item, index) in items"
      :key="index"
    >
      <code>{{ item["uuid"] }}</code>
    </div>
      
      <div class="p-4" id="pdfbox"></div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useMainStore } from "../store/exercises";

export default defineComponent({
  name: "GenViewDocument",

  setup() {
    const items = ref();
    const mainStore = useMainStore();

    onMounted(() => {
      items.value = mainStore.items;
    });

    return {
      items,
    };
  },
});
</script>

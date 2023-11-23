<template>
  <!-- Grid Layout for some rows -->
  <div class="grid gap-4">
    
      <div class="p-4">
	<h2 class="text-lg font-bold">Compile</h2>
        <button type="button" @click="compilebtn" id="compilebtn">Compile</button>
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
import { onMounted, ref } from "vue";
import { useMainStore } from "../store/exercises";
import { generateDocument } from "../manager/ManagerDocs.ts";

export default {
  name: "GenViewDocument",

  setup() {
    const items = ref();
    const compileBtn = ref("Compile");
    const mainStore = useMainStore();

    onMounted(() => {
      items.value = mainStore.items;
    });

    const compilebtn = async () => {
      const pdfbox = document.getElementById('pdfbox');
      let r = await generateDocument(0)
      if (pdfbox && r.status == 0) {
        const pdfblob = new Blob([r.pdf], {type : 'application/pdf'});
        const objectURL = URL.createObjectURL(pdfblob);
        setTimeout(()=>{
          URL.revokeObjectURL(objectURL);
        }, 30000);
        console.log(objectURL);
        pdfbox.innerHTML = `<embed src="${objectURL}" width="100%" height="400px" type="application/pdf">`;
      }
    };

    return {
      items,
      compilebtn,
    };
  },
};

</script>

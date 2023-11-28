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
import { generateDocument, IDocCfg } from "../manager/ManagerDocs.ts";

export default {
  name: "GenViewDocument",

  setup() {
    const items = ref();
    const compileBtn = ref("Compile");
    const mainStore = useMainStore();

    onMounted(() => {
      items.value = mainStore.items;
    });

    const ControllerDocCfg = (itemsIn) => {
      var itemsCfg : IDocCfg = {
	itemSelection: itemsIn,
	template: {
	  uuid: "28253563-49d5-4769-9f09-cb7d61cd39b2",
	  fields: [],
	}
      };
      return itemsCfg;
    }

    const compilebtn = async () => {
      const pdfbox = document.getElementById('pdfbox');
      let r = await generateDocument(ControllerDocCfg(mainStore.items))
      if (pdfbox && r.status == 0) {
        const pdfblob = new Blob([r.pdf], {type : 'application/pdf'});
        const objectURL = URL.createObjectURL(pdfblob);
        setTimeout(()=>{
          URL.revokeObjectURL(objectURL);
        }, 30000);
        console.log(objectURL);
        pdfbox.innerHTML = `<embed src="${objectURL}" width="100%" height="400px" type="application/pdf">`;
      }
      else {
	pdfbox.innerHTML = `<pre>${r.log}</pre>`;
      }
    };

    return {
      items,
      compilebtn,
    };
  },
};

</script>

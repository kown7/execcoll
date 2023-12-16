<template>
  <div>
    <!-- Tab-like header -->
    <div class="flex p-4 space-x-4 bg-gray-300">
      <div class="pr-5">
	<!-- Button in the top left corner -->
	<button :class="['p-2', 'rounded',
			{'bg-gray-500': isButtonDisabled},
			{'bg-blue-500 text-white': !isButtonDisabled}]"
		type="button" @click="compilebtn" id="compilebtn">
	  Compile
	</button>
      </div>
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectTab(index)"
        :class="{ 'bg-gray-400 text-black': selectedTab === index,
		'bg-gray-200': selectedTab !== index,
		'cursor-pointer': true, 'p-2': true }"
	>
        {{ tab.name }}
      </div>
    </div>

    <div class="p-4">
      <!-- Content based on selected tab -->
      <div v-show="selectedTab === 0" class="mt-4">
	<div class="p-4" id="pdfbox"></div>
      </div>

      <div v-show="selectedTab === 1" class="mt-4">
	<!-- Content for Tab 2 -->
	<div>
          <p>Content for Tab 2</p>
          <p>yadda yadda</p>
	</div>
      </div>

      <div v-show="selectedTab === 2" class="mt-4">
	<div class="p-4" id="pdfconfig">{{ pdfConfig }}</div>
      </div>


      <div v-show="selectedTab === 3" class="mt-4">
	<div class="p-4" id="pdfsource"><div style="white-space: pre;">{{ pdfSource }}</div></div>
      </div>

      <div v-show="selectedTab === 4" class="mt-4">
	<div class="p-4" id="pdflog"></div>
      </div>

      <!-- Add more content sections as needed -->

    </div>
  </div>
</template>


<script lang="ts">
import { onMounted, ref, computed, watch } from 'vue'
import { useMainStore } from '../store/exercises'
import { generateDocument, FileType } from '../manager/ManagerDocs'

export default {
  name: 'GenViewDocument',

  setup() {
    const items = ref()
    const mainStore = useMainStore()
    const pdfConfig = ref()
    const pdfSource = ref()

    const tabs = ref([
      { name: 'Exercise' },
      { name: 'Solutions' },
      { name: 'Configuration' },
      { name: 'Source' },
      { name: 'Log' },
    ]);

    const selectedTab = ref(0);
    const selectTab = (index) => {
      selectedTab.value = index;
    };


    // const { isButtonDisabled } = toRefs(refs);
    const isButtonDisabled = ref(false);

    onMounted(() => {
      items.value = mainStore.items
    })

    watch(mainStore.$state, (store) => {
      pdfConfig.value = JSON.stringify(store)

      let cfg = mainStore.generateConfig()
      cfg.docType = FileType.Source
      generateDocument(cfg).then((response) => {
	pdfSource.value = response
      })
    })

    const compilebtn = async () => {
      const pdfbox = document.getElementById('pdfbox')
      const pdflog = document.getElementById('pdflog')

      isButtonDisabled.value = true
      let r = await generateDocument(mainStore.generateConfig())
      isButtonDisabled.value = false

      if (pdfbox && r.status == 0) {
        const pdfblob = new Blob([r.pdf], { type: 'application/pdf' })
        const objectURL = URL.createObjectURL(pdfblob)
        setTimeout(() => {
          URL.revokeObjectURL(objectURL)
        }, 30000)
        console.log(objectURL)
        pdfbox.innerHTML = `<embed src="${objectURL}" width="100%" style="height: 100vh;" type="application/pdf">`
      }
      pdflog.innerHTML = `<pre>${r.log}</pre>`
    }

    return {
      items,
      compilebtn,
      tabs,
      selectedTab: computed(() => selectedTab.value),
      selectTab,
      pdfConfig,
      pdfSource,
      isButtonDisabled
    };
  },
};
</script>

<template>
  
  <!-- Grid Layout for some rows -->
  <div class="grid gap-4">
    
    <div class="flex justify-between items-center">
      <h3 class="text-lg">Exercises Configuration</h3>
      <button @click="toggleRowVisibility(1)" class="text-white focus:outline-none">Collapse</button>
    </div>
      
      <div class="border p-4 bg-gray-100 text-gray-800" :class="{ 'hidden': !isRowVisible[1] }">
	<h2 class="text-lg font-bold">Filter</h2>
	lipsum stuff
      </div>
      
      <div class="border p-4 bg-gray-100 text-gray-800" :class="{ 'hidden': !isRowVisible[1] }">
	<h2 class="text-lg font-bold">Selected Items</h2>
	<draggable
	  class="list-group"
	  :list="list1"
	  group="people"
	  @change="log"
	  itemKey="name"
	  >
	  <template #item="{ element, index }">
            <div class="p-2 bg-white border mb-2 cursor-move">{{ element.title }} <br /> {{ element.uuid }}</div>
	  </template>
	</draggable>
      </div>
      
      
      <div class="border p-4 bg-gray-100 text-gray-800" :class="{ 'hidden': !isRowVisible[1] }">
	<h2 class="text-lg font-bold">Available Items</h2>
	<draggable
	  class="list-group"
	  :list="list2"
	  group="people"
	  @change="log"
	  itemKey="name"
	  >
	  <template #item="{ element, index }">
            <div class="p-2 bg-white border mb-2 cursor-move">{{ element.name }} {{ index }}</div>
	  </template>
	</draggable>
      </div>
      
  </div>
  
</template>

<script>
  import draggable from "vuedraggable/src/vuedraggable";
  import { filterExercises } from "../ManagerExercises.js"

export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  
  data() {
    return {
      list1: [],
      list2: filterExercises({}),
      isRowVisible: {
        1: true,
      },
    };
  },
  
  methods: {
    toggleRowVisibility: function(rowNumber) {
      this.isRowVisible[rowNumber] = !this.isRowVisible[rowNumber];
    },
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>

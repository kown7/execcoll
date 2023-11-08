<template>
  
  <div class="border p-4 bg-gray-100 text-gray-800">
    <h2 class="text-lg font-bold">Selected Items</h2>
    <draggable
      class="list-group"
      :list="list1"
      group="people"
      @change="log"
      itemKey="name"
      >
      <template #item="{ element, index }">
        <div class="p-2 bg-white border mb-2 cursor-move">{{ element.name }} {{ index }}</div>
      </template>
    </draggable>
  </div>
  
  
  <div class="border p-4 bg-gray-100 text-gray-800">
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
  
</template>

<script>
import draggable from "vuedraggable/src/vuedraggable";

export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ]
    };
  },
  methods: {
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

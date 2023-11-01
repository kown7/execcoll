<template>
  <div class="flex justify-around w-4/5 mx-auto">
    <div class="w-1/2 border p-4 bg-gray-100">
      <h2 class="text-lg font-bold">Left List</h2>
      <ul ref="leftList" class="sortable-list-ul">
        <li v-for="item in leftList" :key="item.id" class="p-2 bg-white border mb-2 cursor-move">
          {{ item.text }}
        </li>
      </ul>
    </div>

    <div class="w-1/2 border p-4 bg-gray-100">
      <h2 class="text-lg font-bold">Right List</h2>
      <ul ref="rightList" class="sortable-list-ul">
        <li v-for="item in rightList" :key="item.id" class="p-2 bg-white border mb-2 cursor-move">
          {{ item.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Sortable from 'sortablejs';

export default {
  data() {
    return {
      leftList: [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
      ],
      rightList: [],
    };
  },
  mounted() {
    const leftList = this.$refs.leftList;
    const rightList = this.$refs.rightList;

    new Sortable(leftList, {
      group: 'sortable-lists',
      onAdd: (evt) => {
        this.handleListUpdate(evt.from, leftList, this.leftList);
      },
    });

    new Sortable(rightList, {
      group: 'sortable-lists',
      onAdd: (evt) => {
        this.handleListUpdate(evt.from, rightList, this.rightList);
      },
    });
  },
  methods: {
    handleListUpdate(oldList, newList, listData) {
      const movedItem = listData.splice(oldList.dataset.oldindex, 1)[0];
      listData.splice(newList.dataset.newindex, 0, movedItem);
    },
  },
};
</script>

<style scoped>
.sortable-lists {
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
}

.sortable-list {
  width: 45%;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f9f9f9;
}

.sortable-list-ul {
  list-style-type: none;
  padding: 0;
}

.sortable-list-ul li {
  background-color: #fff;
  border: 1px solid #ccc;
  margin: 5px 0;
  padding: 5px;
  cursor: move;
}

.sortable-list-ul li.sortable-chosen {
  background-color: #f0f0f0;
}
</style>


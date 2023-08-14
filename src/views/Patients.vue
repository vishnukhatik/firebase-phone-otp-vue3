<template>
  <v-card class="pa-4">
    <v-data-table
      :items-per-page="itemsPerPage"
      :headers="headers"
      :items="desserts"
      :loading="false"
      item-key="name"
    ></v-data-table>
  </v-card>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { VDataTable } from "vuetify/labs/VDataTable";
import { GET_PORTFOLIOS } from "../services/patients/index.js";

defineOptions({
  name: "Patients",
  // inheritAttrs: false,
  // customOptions: {},
});
const itemsPerPage = ref(5);
const headers = reactive([
  {
    title: "Dessert (100g serving)",
    align: "start",
    sortable: false,
    key: "name",
  },
  { title: "Calories", align: "end", key: "calories" },
  { title: "Fat (g)", align: "end", key: "fat" },
  { title: "Carbs (g)", align: "end", key: "carbs" },
  { title: "Protein (g)", align: "end", key: "protein" },
  { title: "Iron (%)", align: "end", key: "iron" },
]);
const desserts = reactive([
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: "1",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    iron: "0",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    iron: "6",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    iron: "7",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    iron: "16",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    iron: "1",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    iron: "2",
  },
]);

onMounted(async () => {
  const res = await GET_PORTFOLIOS();
  console.log('res=====', res);
});
</script>

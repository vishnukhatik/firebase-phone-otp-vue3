<script>
import TopBarHeader from "../components/base/TopBarHeader.vue";
import Sidebar from "../components/base/Sidebar.vue";

export default {
  emits: ['toggle-app-menu'],
  methods: {
    toggleAppMenu(val) {
      this.drawer = val;
    }
  },
  data: () => ({
    drawer: true,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = true;
    },
  },
  components: { Sidebar, TopBarHeader },
};
</script>

<template>
  <v-layout>
    <v-app>
      <Sidebar :drawer="drawer" />
      <v-main class="bg-blue-grey-lighten-5">
        <TopBarHeader @toggleAppMenu="(value) => toggleAppMenu(value)" />
        <v-content>
          <div class="pa-4">
            <router-view></router-view>
          </div>
        </v-content>
      </v-main>
    </v-app>
  </v-layout>
</template>

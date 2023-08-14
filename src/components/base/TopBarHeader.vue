<script>
export default {
  data: () => ({
    drawer: true,
    userMenuitems: [
      {
        title: "profile",
        value: "Profile",
      },
      {
        title: "Logout",
        value: "logout",
      },
    ],
  }),
};
</script>

<template>
  <v-app-bar fixed app prominent class="px-4">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        @click.stop="this.$emit('toggle-app-menu', (drawer = !drawer))"
      >
      </v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>
      <img src="../../assets/icons/PillBox-logo.svg" width="200" class="mt-2" />
    </v-app-bar-title>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-avatar color="brown" v-bind="props">
          <span class="text-h6">JB</span>
        </v-avatar>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in userMenuitems"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

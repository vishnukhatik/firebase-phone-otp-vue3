<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    sidebarMenuItems: [
      {
        title: "Dashboard",
        value: "Dashboard",
        icon: "mdi-home-outline",
        to: "/",
      },
      {
        title: "Patients List",
        value: "patients",
        icon: "mdi-account-group-outline",
        to: "/patients",
      },
    ],
  }),
};
</script>

<template>
  <v-navigation-drawer
    :modelValue="drawer"
    location="left"
    elevation="3"
    floating="true"
    height="100vh"
    permanent
    fixed
    class="bg-blue-darken-1"
  >
    <div>
      <!-- <img src="../../assets/icons/PillBox-Logo.svg" width="200" height="100" class="d-flex" /> -->
    </div>
    <v-list dark>
      <v-list-item-group>
        <v-list-item
          v-for="item in sidebarMenuItems"
          :key="item.title"
          :active="item.to === $route.path"
          :to="item.to"
          class="px-4"
        >
          <v-list-item-content class="d-flex align-center">
            <slot>
              <v-icon size="28" class="mr-4"> {{ item.icon }} </v-icon>
            </slot>
            <v-list-item-title> {{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
</style>


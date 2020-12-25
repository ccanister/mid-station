<template>
  <template v-if="menu.children && menu.children.length">
    <a-sub-menu key="menu.text">
      <template #title>
        <menu-title :menu="menu"></menu-title>
      </template>
      <sub-menu
        v-for="submenu of menu.children"
        :menu="submenu"
        :key="submenu.text"
      ></sub-menu>
    </a-sub-menu>
  </template>
  <template v-else>
    <a-menu-item key="menu.text">
      <menu-title :menu="menu"></menu-title>
    </a-menu-item>
  </template>
</template>

<script lang="ts">
import { reactive, defineComponent } from "vue";
import MenuTitle from "./menu-title.vue";

export default defineComponent({
  name: "sub-menu",
  components: {
    MenuTitle
  },
  props: {
    menu: {
      type: Object
    }
  }
});
</script>

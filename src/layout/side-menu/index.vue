<template>
  <a-menu mode="inline">
    <sub-menu v-for="menu in menus" :key="menu.title" :menu="menu"></sub-menu>
  </a-menu>
</template>

<script lang="ts">
import SubMenu from "./components/sub-menu.vue";
import { defineComponent } from "vue";
import { menuService } from "@/service";

export default defineComponent({
  name: "side-menu",
  components: {
    SubMenu
  },
  setup() {
    return { collapse: menuService.collapse$ };
  },
  data() {
    return {
      menus: [
        {
          text: "导航栏",
          icon: "DashboardOutlined",
          children: []
        },
        {
          text: "仪表盘",
          icon: "CoffeeOutlined",
          children: [
            {
              text: "默认页"
            },
            {
              text: "分析也"
            }
          ]
        }
      ]
    };
  }
});
</script>

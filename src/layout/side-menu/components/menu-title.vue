<template>
  <div class="link">
    <span class="anticon">
      <component :v-if="menu.icon" :is="menu.icon" />
    </span>
    <span>
      {{ menu.text }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DashboardOutlined, CoffeeOutlined } from "@ant-design/icons-vue";
import { menuService } from "@/service";

export default defineComponent({
  name: "menu-title",
  components: {
    DashboardOutlined,
    CoffeeOutlined
  },
  props: {
    menu: {
      type: Object
    }
  },
  setup() {
    return { collapse: menuService.collapse$ };
  }
});
</script>
<style lang="less" scoped>
.link {
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

<template>
  <div class="logo">
    <img :src="`${publicPath}favicon.ico`" />
    <span v-if="!collapse">{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { menuService } from "@/service";

export default defineComponent({
  name: "logo",
  props: {
    title: String
  },
  setup() {
    return { collapse: menuService.collapse$ };
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
});
</script>

<style lang="less">
@size: 48px;
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  background: @colorTheme;
  color: #fff;
  img {
    display: block;
    object-fit: cover;
    max-width: @size;
    max-height: @size;
  }
}
</style>

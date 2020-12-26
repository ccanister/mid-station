<template>
  <a-dropdown>
    <a-badge count="0">
      <BellOutlined class="notify-icon" />
    </a-badge>
  </a-dropdown>
</template>

<script lang="ts">
import { BellOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "notify",
  components: {
    BellOutlined
  }
});
</script>

<style lang="less">
.notify-icon {
  font-size: 18px;
  color: #fff !important;
}
</style>

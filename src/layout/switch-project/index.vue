<template>
  <a-select class="select" v-model:value="project">
    <a-select-option value="jacky">jacky</a-select-option>
  </a-select>
</template>

<script lang="ts">
import { ref } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "switch-project",
  setup: () => {
    const project = ref("jacky");
    return { project };
  }
});
</script>
<style lang="less" scoped>
.select {
  width: 120px;
  &.ant-select {
    color: #fff;
  }
  &:not(.ant-select-customize-input) :deep(.ant-select-selector) {
    background-color: hsla(0, 0%, 100%, 0.2);
    border: 0;
  }
  & :deep(.ant-select-arrow) {
    color: #fff;
  }
  &.ant-select-single.ant-select-open :deep(.ant-select-selection-item) {
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>

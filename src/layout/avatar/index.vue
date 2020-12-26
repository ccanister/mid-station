<template>
  <a-dropdown>
    <span class="avatar">
      <a-avatar :src="require('../../assets/img/avatar.jpg')"></a-avatar>
      admin
    </span>
    <template #overlay>
      <a-menu>
        <a-menu-item> <LogoutOutlined /> 退出登录 </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LogoutOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: "avatar",
  components: {
    LogoutOutlined
  }
});
</script>
<style lang="less" scoped>
.avatar {
  color: #fff;
  cursor: pointer;
}
</style>

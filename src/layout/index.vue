<template>
  <a-layout class="layout-wrap">
    <a-layout-sider
      collapsible
      class="sider"
      width="250"
      v-model:collapsed="collapse"
      :trigger="null"
      :class="classes"
    >
      <logo :title="title"></logo>
      <side-menu class="menu"></side-menu>
    </a-layout-sider>
    <a-layout class="main">
      <a-layout-header class="header">
        <div class="collapse-icon item">
          <menu-unfold-outlined
            v-if="collapse"
            class="trigger"
            @click="toggleCollapse"
          />
          <menu-fold-outlined
            v-else····
            class="trigger"
            @click="toggleCollapse"
          />
        </div>
        <div class="collapse-other">
          <switch-project></switch-project>
          <div class="item">
            <notify></notify>
          </div>
          <avatar></avatar>
        </div>
      </a-layout-header>
      <actual-content></actual-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { reactive, watch } from "vue";
import Avatar from "./avatar/index.vue";
import Notify from "./notify/index.vue";
import ActualContent from "./actual-content/index.vue";
import SideMenu from "./side-menu/index.vue";
import SwitchProject from "./switch-project/index.vue";
import Logo from "./logo/index.vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
import { menuService } from "@/service";

export default defineComponent({
  name: "layout",
  components: {
    Avatar,
    Notify,
    ActualContent,
    SideMenu,
    SwitchProject,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    Logo
  },
  data() {
    return {
      title: "资源"
    };
  },
  methods: {
    toggleCollapse() {
      menuService.toggleCollapse();
    }
  },
  setup() {
    const collapse$ = menuService.collapse$;
    const classes = reactive({
      collapse: collapse$
    });
    watch(collapse$, value => {
      classes.collapse = value;
    });
    return { collapse: collapse$, classes };
  }
});
</script>
<style lang="less" scoped>
.layout-wrap {
  .ant-layout-sider {
    background: #fff;
  }
  .ant-layout-header {
    background: @colorTheme;
  }
  .sider {
    position: fixed;
    left: 0;
    height: 100vh;
    overflow: auto;
    .menu {
      height: calc(100vh - @headerHeight);
      text-align: left;
    }
  }
  .main {
    padding-left: 250px;
    transition: all 0.2s;
  }
  .collapse {
    & + .main {
      padding-left: 80px;
      transition: all 0.2s;
    }
  }

  .header {
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // height: @headerHeight;
    // line-height: @headerHeight;
    .collapse-icon {
      font-size: 18px;
      color: #fff;
      text-align: left;
    }
    .collapse-other {
      display: flex;
      // justify-content: flex-end;
      align-items: center;
    }
    .item {
      min-width: 50px;
      padding: 8px 2px;
      text-align: center;
      cursor: pointer;
      line-height: 100%;

      &:hover {
        background: hsla(0, 0%, 100%, 0.2) !important;
      }
    }
  }
}
</style>

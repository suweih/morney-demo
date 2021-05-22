<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  font-size: 13px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  .item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 4px 0;
    border-right: 1px solid #eee;

  }

  .icon {
    width: 31px;
    height: 31px;
  }

  .item.selected {
    color: tomato;
  }
}
</style>
<template>
  <!--备注-->
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="请在这里输入">
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Notes'
};
</script>

<style lang="scss" scoped>
.notes {
  display: flex;
  align-items: center;
  padding-right: 16px;
  font-size: 14px;
  background: #f5f5f5;

  > .name {
    padding: 0 16px;
  }

  > input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
  }
}
</style>
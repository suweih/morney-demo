<template>
  <!--标签-->
  <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tags'
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  padding: 16px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;

  > .current {
    display: flex;
    flex-wrap: wrap;

    li {
      $h: 24px;
      line-height: $h;
      background: #d9d9d9;
      border-radius: $h/2;
      height: $h;
      padding: 0 16px;
      margin-right: 8px;
      margin-top: 8px;
    }
  }

  .new {
    padding-top: 16px;

    button {
      border: none;
      background: transparent;
      border-bottom: 1px solid;
      padding: 0 3px;
      color: #999;
    }
  }
}
</style>
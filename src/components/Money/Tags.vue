<template>
  <!--标签-->
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id" :class="{selected : selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">
        {{ tag.name }}
      </li>
    </ul>
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import {TagHelper} from '@/mixins/TagHelper';

@Component
export default class Tags extends mixins(TagHelper) {
  get tagList() {
    return this.$store.state.tagList;
  }

  selectedTags: string[] = [];

  created() {
    this.$store.commit('fetchTags');
  }

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }
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
  background: white;

  > .current {
    display: flex;
    flex-wrap: wrap;

    li {
      $h: 24px;
      $bg: #d9d9d9;
      line-height: $h;
      background: $bg;
      border-radius: 12px;
      height: $h;
      padding: 0 16px;
      margin-right: 8px;
      margin-top: 8px;

      &.selected {
        background: darken($bg, 50%);
        color: white;
      }
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
<template>
  <Layout>
    <ul class="tags">
      <li v-for="tag in tags" :key="tag.id">
        <span>{{ tag.name }}</span>
        <Icon name="right"/>
      </li>
    </ul>
    <div class="createTags-wrapper">
      <button @click="createTag" class="createTags">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/model/tagListModel';

tagListModel.fetch();

@Component
export default class Labels extends Vue {
  tags = tagListModel.data;

  createTag() {
    const name = window.prompt('请输入标签名');
    if (name){
      const message =tagListModel.create(name)
      if (message === 'duplicated'){
        window.alert('标签名重复')
      }else if (message === 'success'){
        window.alert('添加成功')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tags {
  font-size: 16px;
  color: #333333;
  padding-left: 16px;
  background: white;

  > li {
    min-height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 16px;
    border-bottom: 2px solid #e6e6e6;
  }

  svg {
    width: 22px;
    height: 22px;
  }
}

.createTags {
  border-radius: 4px;
  background: #767676;
  color: white;
  border: none;
  height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    margin-top: 44-16px;
    padding: 16px;
  }
}


</style>
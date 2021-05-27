<template>
  <Layout>
    <div class="tags">
      <router-link v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`" class="tag">
        <span>{{ tag.name }}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTags-wrapper">
      <Button @click="createTag" class="createTags">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component({
  components: {Button}
})
export default class Labels extends Vue {
  //TODO
  tags = [];
  // tags = store.tagList;

  createTag() {
    const name = window.prompt('请输入标签名');
    if (name) {
      //TODO
      // store.createTag(name);
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 16px;
  color: #333333;
  padding-left: 16px;
  background: white;

  > .tag {
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

  &-wrapper {
    text-align: center;
    margin-top: 44-16px;
    padding: 16px;
  }
}


</style>
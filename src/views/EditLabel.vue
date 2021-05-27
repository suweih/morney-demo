<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑页面</span>
      <span class="rightIcon"></span>
    </div>
    <div class="from-wrapper">
      <FromItem :value="tag.name" @update:value="update" field-name="标签名" placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FromItem from '@/components/Money/FromItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, FromItem}
})
export default class EditLabel extends Vue {

  tag?: Tag = undefined;

  created() {
    //TODO
    // this.tag = store.findTag(this.$route.params.id);
    if (!this.tag) {
      this.$router.replace('/404');
    }
  }

  update(name: string) {
    if (this.tag) {
      //TODO
      // store.updateTag(this.tag.id, name);
    }
  }

  remove() {
    if (this.tag) {
      //TODO
      return
      // if (store.removeTag(this.tag.id)) {
      //   this.$router.back();
      // } else {
      //   window.alert('删除失败');
      // }
    }
  }

  goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  justify-content: space-between;

  .leftIcon, .rightIcon {
    width: 24px;
    height: 24px;
  }

  .title {
  }
}

.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}

.from-wrapper {
  margin: 8px 0;
  background: white;
}
</style>
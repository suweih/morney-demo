<template>
  <!--Layout组件-->
  <Layout class-prefix="layout">
    <!--输入键盘组件-->
    <NumberPad/>
    <!--支出收入-->
    <types/>
    <!--备注-->
    <Notes/>
    <!--标签-->
    <Tags/>
  </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';

export default {
  name: 'Money',
  components: {Tags, Notes, Types, NumberPad}
};
</script>
<style lang="scss">
.layout-content {
  display: flex;
  /*布局翻转*/
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>

</style>
<template>
  <!--Layout组件-->
  <Layout class-prefix="layout">
    <!--输入键盘组件-->
    <NumberPad @update:value="onUpdateAmount"/>
    <!--支出收入-->
    <types :value.sync="record.type"/>
    <!--备注-->
    <Notes @update:value="onUpdateNotes"/>
    <!--标签-->
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';

// //js变量声明
// var record = {
//   tags: ['11', '22'],
//   notes: 'xxxx',
//   type: '-',
//   amount: '100'
// };

//ts类型声明,我就要类型,不要值
//一个key,对应一个类型
type Record = {
  tags: string[],
  nodes: string,
  type: string,
  amount: number
}

@Component({
  components: {Tags, Notes, Types, NumberPad},
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '运动'];
  record: Record = {
    tags: [],
    nodes: '',
    type: '-',
    amount: 0
  };


  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  // <types :value.sync="record.type" @update:value="onUpdateType"/>
  // onUpdateType(value: string) {
  //   this.record.type = value;
  // }

  onUpdateNotes(value: string) {
    this.record.nodes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
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
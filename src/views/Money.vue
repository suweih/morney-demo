<template>
  <!--Layout组件-->
  <Layout class-prefix="layout">
    <!--输入键盘组件-->
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <!--支出收入-->
    <types :value.sync="record.type" @update:value="onUpdateType"/>
    <!--备注-->
    <Notes field-name="备注" placeholder="请输入备注" @update:value="onUpdateNotes"/>
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
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/model/recordListModel.ts';
import tagListModel from '@/model/tagListModel';

const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch()

@Component({
  components: {Tags, Notes, Types, NumberPad},
})
export default class Money extends Vue {
  tags = tagList;
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
    tags: [], nodes: '', type: '-', amount: 0
  };


  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateType(value: string) {
    this.record.type = value;
  }

  onUpdateNotes(value: string) {
    this.record.nodes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }
}
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
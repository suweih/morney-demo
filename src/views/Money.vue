<template>
  <!--Layout组件-->
  <Layout class-prefix="layout">
    <!--输入键盘组件-->
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <!--支出收入-->
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"/>
    <!--备注-->
    <div class="notes">
      <FromItem field-name="备注" placeholder="请输入备注" :value.sync="record.nodes"/>
    </div>
    <!--标签-->
    <Tags @update:value="record.tags=$event"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import FromItem from '@/components/Money/FromItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';
import Tabs from '@/components/Tabs.vue';


@Component({
  components: {Tabs, Tags, FromItem, NumberPad}
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;


  record: RecordItem = {
    tags: [], nodes: '', type: '-', amount: 0
  };

  created() {
    this.$store.commit('fetchRecords');
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
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert('至少选择一个标签');
    }
    this.$store.commit('createRecord', this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert('已保存');
      this.record.nodes = '';
    }
  }
}
</script>
<style lang="scss" scoped>
.notes {
  padding: 12px 0;
  background: #f5f5f5;
}

::v-deep .layout-content {
  display: flex;
  /*布局翻转*/
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>

</style>
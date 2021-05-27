<template>
  <!--Layout组件-->
  <Layout class-prefix="layout">
    <!--输入键盘组件-->
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <!--支出收入-->
    <types :value.sync="record.type" @update:value="onUpdateType"/>
    <!--备注-->
    <div class="notes">
      <FromItem field-name="备注" placeholder="请输入备注" @update:value="onUpdateNotes"/>
    </div>
    <!--标签-->
    <Tags/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FromItem from '@/components/Money/FromItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';


@Component({
  components: {Tags, FromItem, Types, NumberPad}
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

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
    this.$store.commit('createRecord', this.record);
  }
}
</script>
<style lang="scss">
.notes {
  padding: 12px 0;
  background: #f5f5f5;
}

.layout-content {
  display: flex;
  /*布局翻转*/
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>

</style>
<template>
  <!--备注-->
  <div>
    <label class="fromItem">
      <span class="name">{{ this.fieldName }}</span>
      <!--      <input type="text" :value="value" @input="onInput" placeholder="请在这里输入">-->
      <input type="text" :value="value" @input="onValueChange($event.target.value)" :placeholder="placeholder"/>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class FromItem extends Vue {
  @Prop({default: ''}) readonly value!: string;

  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;

  onValueChange(value: string) {
    this.$emit('update:value', value);
  }
}
</script>

<style lang="scss" scoped>
.fromItem {
  display: flex;
  align-items: center;
  padding-right: 16px;
  font-size: 14px;

  > .name {
    padding: 0 16px;
  }

  > input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
  }
}
</style>
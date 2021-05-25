<template>
  <!--备注-->
  <div>
    <label class="fromItem">
      <span class="name">{{ this.fieldName }}</span>
      <!--      <input type="text" :value="value" @input="onInput" placeholder="请在这里输入">-->
      <input type="text" v-model="value" :placeholder="this.placeholder"/>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class FromItem extends Vue {
  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;

  value: string = '';

  @Watch('value')
  onValueChange(value: string) {
    this.$emit('update:value', value);
  }


  // onInput(event: KeyboardEvent) {
  //   const input = event.target as HTMLButtonElement;
  //   this.value = input.value;
  // }
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
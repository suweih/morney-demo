<template>
  <!--备注-->
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <!--      <input type="text" :value="value" @input="onInput" placeholder="请在这里输入">-->
      <input type="text" v-model="value" placeholder="请在这里输入">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value: string = '';

@Watch('value')
  onValueChange(value:string){
    this.$emit('update:value',value)
}


  // onInput(event: KeyboardEvent) {
  //   const input = event.target as HTMLButtonElement;
  //   this.value = input.value;
  // }
}
</script>

<style lang="scss" scoped>
.notes {
  display: flex;
  align-items: center;
  padding-right: 16px;
  font-size: 14px;
  background: #f5f5f5;

  > .name {
    padding: 0 16px;
  }

  > input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
  }
}
</style>
<template>
  <div>
    <button class="button" @click="$emit('click',$event)">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Button extends Vue {

}
</script>

<style lang="scss" scoped>
.button {
  border-radius: 5px;
  background: rgba(255, 99, 71, 0.82);
  color: white;
  border: none;
  height: 40px;
  padding: 0 16px;

  }
</style>
<template>
  <!--支出收入-->
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

//装饰器
@Component
export default class Types extends Vue {
  type = '-';

  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('This type unknown');
    } else {
      this.type = type;
    }
  }
  @Watch('type')
    onTypeChange(value:string){
      this.$emit('update:value',value)
  }

}
</script>


<!--<script>-->
<!--export default {-->
<!--  name: 'Types',-->
<!--  data(){-->
<!--    return{-->
<!--      type : '-' //这里-就是支出,+就是输入-->
<!--    }-->
<!--  },-->
<!--  props: ['xxx'],-->
<!--  methods:{-->
<!--    selectType(type){  //我也有可能不是- +,而是其他,所以这里要做一个判断-->
<!--      if (type !== '-' && type !== '+'){-->
<!--        throw new Error('This type unknown')-->
<!--      }-->
<!--      this.type = type-->
<!--      console.log(this.xxx)-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<style lang="scss" scoped>
.types {
  display: flex;
  background: #c4c4c4;
  font-size: 24px;
  align-items: center;

  li {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }


}
</style>
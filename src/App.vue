<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

body {
  background: #f5f5f5;
  font-family: $font-hei;
  line-height: 1.5;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
<style scoped lang="scss">
#app {
  max-width: 550px;
  margin: 0 auto;
}
</style>
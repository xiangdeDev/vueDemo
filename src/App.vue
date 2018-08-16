<template>
  <div id="app">
    <v-header></v-header>
    <v-center></v-center>
    <div>i am footer</div>
  </div>
</template>

<script>
import header from './components/header/header';
import center from './components/center/center';
export default{
  components: {
    'v-header': header,
    'v-center': center
  }
};
</script>

<style>
</style>

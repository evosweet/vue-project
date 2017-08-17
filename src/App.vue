<template>
<div id="app">
  <div class="">
    <appHeader></appHeader>
    <div class="row">
      <div class="col-xs-12 container">
        <router-view></router-view>
      </div>
    </div>
  </div> 
</div>
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'app',
  components: {
    appHeader: Header
  },
  created () {
    this.$store.dispatch('initStocks')
  }
}
</script>
    
<style>
    body {
      padding: 30px;
    }
</style>

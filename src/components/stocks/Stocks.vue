<template>
  <div>
    <app-Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-Stock>
  </div>
</template>


<script>
  import Stock from './Stock.vue'
  export default {
    components: {
      appStock: Stock
    },
    computed: {
      stocks () {
        return this.$store.getters.stocks
      }
    }
  }

</script>

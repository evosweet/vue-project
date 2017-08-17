<template>
    <div class="col-sm-6 col-md-4">
       <div class="panel pnale-success">
        <div class="panel-heading">
            <h3 class="panel-title">{{stock.name}}</h3>
            <small>(Price: {{stock.price}})</small>
        </div>
        <div class="panel-body">
            <div class="pull-left">
                <input type="number" placeholder="amount" class="form-control" v-model="amount"> 
            </div>
            <div class="pull-right">
                <button class="btn btn-success" @click="buyStock" :disabled="amount <=0 || !Number.isInteger(parseInt(amount))" >Buy</button>
            </div>
        </div>
       </div> 
    </div>
</template>

<script>
    export default {
      props: ['stock'],
      data () {
        return {
          amount: 0
        }
      },
      methods: {
        buyStock () {
          const order = {
            stcokID: this.stock.id,
            stockPrice: this.stock.price,
            amount: this.amount
          }
          console.log(order)
          this.amount = 0
        }
      }
    }
</script>
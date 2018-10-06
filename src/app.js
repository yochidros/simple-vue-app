
var items = [
  {
    name: 'pencil',
    price: 430,
    quantity: 0
  },
  {
    name: 'note',
    price: 470,
    quantity: 0
  },
  {
    name: 'ereaser',
    price: 599,
    quantity: 0
  }
]

var vm = new Vue({
  el: '#app',
  data: {
    items: items
  },
  filters: {
    numberWithDelimiter: function (value) {
      if (!value) {
        return '0'
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    }
  },
  computed: {
    totalPrice: function() {
      return this.items.reduce(function (sum, item) {
        return sum + (item.price * item.quantity)
      }, 0)
    },
    totalPriceWithTax: function () {
      return Math.floor(this.totalPrice * 1.08)
    },
    canBuy: function () {
      return this.totalPrice >= 1000
    },
    errorMessageClass: function () {
      return {
        error: !this.canBuy
      }
    },
    errorMessageStyle: function () {
      return {
        border: this.canBuy ? '' : '1px solid red',
        color: this.canBuy ? '' : 'red'
      }
    }
  },
  methods: {
    doBuy: function (event) {
      alert(this.totalPriceWithTax + 'yen!!')
      this.items.forEach(function (item) {
        item.quantity = 0
      })
    }
  }
})

vm.$watch(function () {
  return this.items[0].quantity
}, function (quantity) {
  console.log(quantity)
})


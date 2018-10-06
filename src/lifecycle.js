
var vm = new Vue({
  el: '#app',
  data: function () {
    return {
      count: 0,
      timerId: null
    }
  },
  created: function () {
    console.log('created')
    var that = this
    console.log(this.count)
    console.log(this.$el)
    this.timerId = setInterval(function() {
      that.count += 1
    }, 1000)
  },
  mounted: function() {
    console.log('mounted')
    console.log(this.$el)
  },
  beforeDestroy: function() {
    console.log('beforeDestroy')
    clearInterval(this.timerId)
  }
})
window.vm = vm

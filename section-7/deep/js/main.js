const app = Vue.createApp({
  data: () => ({
    colors: [
      { name: 'Red'},
      { name: 'Green'},
      { name: 'Blue'}
    ]
  }),
  watch: {
    colors: {
      //handler：deepやimmediateなどのオプションを使用するときに必要になるオブジェクト
      handler: function(newValue, oldValue) {
        console.log('Update!')
      },
      // ネストされたオブジェクトも監視する
      deep: true
    }
  },
  methods: {
    onClick: function(event) {
      this.colors[1].name = 'White'
    }
  }
})
app.mount('#app')
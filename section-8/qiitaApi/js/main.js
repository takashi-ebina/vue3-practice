const app = Vue.createApp({
  data: () => ({
    items: null,
    keyword: '',
    message: ''
  }),
  watch: {
    keyword: function(newKeyword, oldKeyword) {
      console.log(newKeyword)
      this.message = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  mounted: function() {
    // 連続する呼び出しを無視する
    // [参考サイト]
    // https://qiita.com/waterada/items/986660d31bc107dbd91c
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
  },
  methods: {
    getAnswer: function() {
      if(this.keyword === '') {
        console.log('karamoji')
        this.items = null
        return
      }

      this.message = 'Lading...'
      const vm = this
      const params = { page: 1, per_page: 20, query: this.keyword }
      // HTTP通信（データの更新・取得）を簡単に行うことができる、JavaScriptのライブラリである「axios」を利用
      axios.get('https://qiita.com/api/v2/items', { params })
           .then(function(response){
             // console.log(response)
             vm.items = response.data
           })
           .catch(function(error){
             vm.message = 'Error!' + error
           })
           .finally(function() {
             vm.message = ''
           })
    }
  }
})
app.mount('#app')
const app = Vue.createApp({
  data: () => ({
    newItem: '',
    todos: []
  }),
  methods: {
    addItem: function(event) {
      if (this.newItem === '') return 
      let todo = {
        item: this.newItem,
        idDone: false
      }
      this.todos.push(todo)
      this.newItem = ''
    },
    deleteItem: function(index) {
      // 第一引数：削除を開始するインデックス
      // 第二引数：削除をする長さ
      this.todos.splice(index, 1)
    }
  }

})
app.mount('#app')
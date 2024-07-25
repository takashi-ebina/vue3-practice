const app = Vue.createApp({
  data: () => ({
    message: 'Hello Vue.js!'
  }),
  /**
   * computedとmethodsの違い
   * [point1] getter, setter 
   *   computed : getter, setter 
   *   methods  : getter
   * 
   * [point2] キャッシュ
   *   computed : 有り
   *   methods  : 無し
   */
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    reversedMessageMethod: function() {
      return this.message.split('').reverse().join('')
    }
  }
})
app.mount('#app')
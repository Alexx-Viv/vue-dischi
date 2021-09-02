console.log('vue', Vue);
Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albumList: [],
  },
  methods: {
    see() {
      console.log(this.albumList);
    },
  },
  created() {
    axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((response) => {
        console.log(response);
        this.albumList = response.data.response;
        console.log(this.albumList);
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

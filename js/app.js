console.log('vue', Vue);
Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albumList: [],
    genreList: ['all'],
    filteredList: [],
  },
  methods: {
    see() {
      console.log(this.albumList);
      console.log(this.genreList);
    },
    filterList(genre) {
      let filter = genre;
      console.log(filter);
      this.filteredList = this.albumList.filter((list, index) => {
        if (list.genre === filter || filter === 'all') {
          return true;
        }
      });
    },
  },
  created() {
    axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((response) => {
        console.log(response);
        this.albumList = this.filteredList = response.data.response;
        console.log(this.albumList);
        for (let i = 0; i < this.albumList.length; i++) {
          if (!this.genreList.includes(this.albumList[i].genre)) {
            this.genreList.push(this.albumList[i].genre);
          }
        }
        console.log(this.genreList);
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

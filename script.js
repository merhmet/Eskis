class Post {
  constructor(title, link, author, img) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
  }}


const app = new Vue({
  el: '#app',
  data: {
    search: '',
    postList: [
    new Post(
    'Turis',
    'https://my.combell.com/en/product/webhosting/linux/eskisehirmasaj.eu/file-manager',
    'Turis',
    'https://od.lk/s/OTFfMjc3OTI5OTdf/TRT_MUZIK%20%281%29.jpg'),

    new Post(
    'React.js',
    'https://www.google.be/',
    'Mulayim',
    'https://od.lk/s/OTFfMjc3OTI5OTBf/powerturktv.jpg'),

    new Post(
    'Tatlises Tv',
    'https://www.google.be/',
    '',
    'https://od.lk/s/OTFfMjc3OTI5OTZf/tatlises-tv.png'),

    new Post(
    'Power Türk',
    'https://www.google.be/',
    '',
    'https://od.lk/s/OTFfMjc3OTI5OTNf/pwr%20turk%20en%20yenileri.jpg'),

    new Post(
    'One Dance',
    'https://www.ozbeceriksizler.co/',
    '',
    'https://od.lk/s/OTFfMjc3OTI5ODRf/number%20one%20Dance.jpg'),

    new Post(
    'Askim Radyo',
    'https://www.ozbeceriksizler.co/',
    '',
    'https://od.lk/s/OTFfMjc3OTI5ODhf/power%20plus.jpg'),

    new Post(
    'Kral',
    'https://www.google.be/',
    '',
    'https://od.lk/s/OTFfMjc3OTI5OTVf/slow%20karadeniz.png'),

    new Post(
    'Number Damar',
    'https://www.google.be/',
    '',
    'https://od.lk/s/OTFfMjc3OTI5ODZf/number-one-turk-damar.jpg'),

    new Post(
    'Askim Radyo',
    'https://www.google.be/',
    '',
    'https://od.lk/s/OTFfMjc3OTI5ODVf/number1%20turk.jpeg')] },



  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase());
      });
    } } });
<template>
<div>
  <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
  <!-- bo inaczej przekazujemy string -->
  <app-ninjas v-bind:ninjas="ninjas"></app-ninjas> 
    <app-footer v-bind:title="title"></app-footer>
</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';


export default {
  components:{
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas
  },
  data () {
    return{ 
      title :'Vue JS 2 Tutorial #23 - Primitive vs Reference Types',
      ninjas:[
              {name: 'Ryu', speciality: 'Vue Components', show: false},
              {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
              {name: 'Hitoshi', speciality: 'Click Events', show: false},
              {name: 'Tango', speciality: 'Conditionals', show: false},
              {name: 'Kami', speciality: 'Webpack', show: false},
              {name: 'Yoshi', speciality: 'Data Diggin', show: false}
          ]
    }
  },
  methods:{
    updateTitle: function(updated_title){
      this.title = updated_title;
    }
  }
}
</script>

<style scoped>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
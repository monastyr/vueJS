<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ninjas></ninjas>
    <globalnie></globalnie>
  </div>
</template>

<script>
import Ninjas from './Ninjas.vue'


export default {
  components:{
    'ninjas': Ninjas
  },
  data () {
    return {
      title: 'Ninja App'
    }
  }
}
</script>


<template>
  <div id="app">
    <h1>{{title}}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Yor first Vue file, woooo'
    }
  },
  methods: {
    greeting: function(){
      return 'heeeeeeeeeeeey cowboy!';
    }
  }
}
</script>


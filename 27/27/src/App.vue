<template>
<div>
  <form-helper>
    <div slot="form-header">
      <h3> {{title}}</h3>
      <p>information </p>
    </div>
    <div slot="form-fields">
      <input type="text" placeholder="name" required />
      <input type="password" placeholder="password" required />
    </div>
    <div slot="form-controls">
      <button v-on:click="handleSubmit">Submit</button>
    </div>
  </form-helper>

</div>
</template>

<script>
import formHelper from './components/formHelper.vue';


export default {
  components:{
    'form-helper' : formHelper
  },
  data () {
    return{ 
      title: "I am a dynamic slot title"
      //atryut title tam gdzie uzuwamy {{title}}
    }

  },
  methods:{
  }
}
</script>

<style scoped>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
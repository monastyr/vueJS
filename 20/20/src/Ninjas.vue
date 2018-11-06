<template>
<div>
<h1>Lists of ninjas</h1>
    <ul>
        <li v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      ninjas: ['Yoshi', 'Mario', 'Ryu' ]
    }
  }
}
</script>

<style>
h1{
    /* nadpisuje kolor z komponentu root, jesli w App.vue nie ma <style scoped> tylko samo <style> */
    color: green;
}
</style>

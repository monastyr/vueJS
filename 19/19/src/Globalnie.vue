<template>
    <ul>
        <li v-for="glob in globalnie">{{ glob }}</li>
    </ul>
</template>

<script>
export default {
  data () {
    return {
      globalnie: ['Glob 1', 'Glob 2', 'Glob 3' ]
    }
  }
}
</script>


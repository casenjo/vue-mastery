<template>
  <h1 v-if @click="handler(arg, event)"></h1>
</template>

<script>
import { libName } from 'libName'
export default {
  data() {
    return {
      quote: 'I like VueJS'
    }
  }
}
</script>

<style>
</style>

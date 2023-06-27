<template>
  <div>
    <article>
      <h3>{{ title }}</h3>
      <p>some text...</p>
      <button @click="$emit('enlarge-text')">Enlarge text</button>
    </article>
  </div>
</template>

<script setup>
defineProps(['title'])
</script>

<style scoped>
article {
  background: rgb(100, 100, 100);
  margin-bottom: 1rem;
  padding: 0.5rem;
}
</style>

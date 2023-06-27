<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Component mounted.')
})
</script>

<template>
  <div>
    <h1>Lifecycle Hooks</h1>

    <article>
      <p>
        Each Vue component instance goes through a series of initialization steps when it's created - for example, it
        needs to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when
        data changes. Along the way, it also runs functions called lifecycle hooks, giving users the opportunity to add
        their own code at specific stages.
      </p>
    </article>

    <section>
      <h2>Registering Lifecycle Hooks</h2>
      <p>
        For example, the onMounted hook can be used to run code after the component has finished the initial rendering
        and created the DOM nodes
      </p>
    </section>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

article p {
  color: hsla(160, 100%, 37%, 1);
}
</style>

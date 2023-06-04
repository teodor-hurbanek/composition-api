<script setup>
import { ref } from 'vue'

const show = ref(true)
const type = ref('C')

const toggleShow = () => {
  show.value = !show.value
}
</script>

<template>
  <div>
    <h1>Conditional Rendering</h1>

    <section>
      <h2>v-if</h2>
      <button @click="toggleShow">Toggle</button>
      <p v-if="show">Vue is awesome!</p>
      <p v-else>Nope!</p>
    </section>

    <section>
      <h2>v-else-if</h2>
      <div v-if="type === 'A'">A</div>
      <div v-else-if="type === 'B'">B</div>
      <div v-else-if="type === 'C'">C</div>
      <div v-else>Not A/B/C</div>
    </section>

    <section>
      <h2>v-show</h2>
      <p v-show="show">Hello!</p>

      <article>
        <p>
          v-if is "real" conditional rendering because it ensures that event listeners and child components inside the
          conditional block are properly destroyed and re-created during toggles. v-if is also lazy: if the condition is
          false on initial render, it will not do anything - the conditional block won't be rendered until the condition
          becomes true for the first time. In comparison, v-show is much simpler - the element is always rendered
          regardless of initial condition, with CSS-based toggling. Generally speaking, v-if has higher toggle costs
          while v-show has higher initial render costs. So prefer v-show if you need to toggle something very often, and
          prefer v-if if the condition is unlikely to change at runtime.
        </p>
      </article>
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

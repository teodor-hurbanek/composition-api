<script setup>
import { ref, reactive } from 'vue'

const hasError = ref(true)
const styleObject = reactive({
  color: 'yellow',
  fontSize: '20px',
})
</script>

<template>
  <div>
    <h1>Class and Style Bindings</h1>

    <section>
      <h2>Binding HTML Classes</h2>
      <article>
        <p>
          A common need for data binding is manipulating an element's class list and inline styles. Since class and
          style are both attributes, we can use v-bind to assign them a string value dynamically, much like with other
          attributes.
        </p>
      </article>

      <p class="static" :class="{ error: hasError }">This is an error</p>
    </section>

    <section>
      <h2>Binding Inline Styles</h2>
      <div :style="styleObject">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur alias libero ipsum qui corporis
          similique fuga, nesciunt, facere sunt ullam? Quasi blanditiis placeat saepe architecto fugit in obcaecati
          aliquid!
        </p>
      </div>
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

.error {
  color: rgb(207, 52, 0);
}

.static {
  font-weight: 600;
  text-decoration: underline;
}
</style>

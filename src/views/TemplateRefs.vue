<script setup>
import { onMounted, ref, watchEffect } from 'vue'

const input = ref(null)

const list = ref([1, 2, 3])
const itemRefs = ref([])

onMounted(() => {
  input.value.focus()
})

watchEffect(() => {
  if (input.value) {
    // smth
  } else {
    // not mounted yet, or the element was unmounted (e.g. by v-if)
  }
})
</script>

<template>
  <div>
    <h1>Template Refs</h1>

    <article>
      <p>
        It allows us to obtain a direct reference to a specific DOM element or child component instance after it's
        mounted. This may be useful when you want to, for example, programmatically focus an input on component mount,
        or initialize a 3rd party library on an element.
      </p>
    </article>

    <section>
      <input type="text" ref="input" />
    </section>

    <section>
      <h2>Refs inside v-for</h2>
      <article>
        <p>
          When ref is used inside v-for, the corresponding ref should contain an Array value, which will be populated
          with the elements after mount:
        </p>
      </article>

      <ul>
        <li v-for="(item, index) in list" :key="index" ref="itemRefs">
          {{ item }}
        </li>
      </ul>
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

<script setup>
import { computed, reactive } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
})

const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
</script>

<template>
  <div>
    <h1>Computed Properties</h1>

    <section>
      <article>
        <p>That's why for complex logic that includes reactive data, it is recommended to use a computed property.</p>
      </article>

      <p>Author:</p>
      <p>{{ author.name }}</p>
      <span>Has published books:{{ ' ' }}</span>
      <span>{{ publishedBooksMessage }}</span>
      <p>Published books:</p>
      <p>{{ author.books }}</p>
    </section>

    <section>
      <article>
        <p>
          Instead of a computed property, we can define the same function as a method. For the end result, the two
          approaches are indeed exactly the same. However, the difference is that computed properties are cached based
          on their reactive dependencies. A computed property will only re-evaluate when some of its reactive
          dependencies have changed. This means as long as author.books has not changed, multiple access to
          publishedBooksMessage will immediately return the previously computed result without having to run the getter
          function again.
        </p>
        <p>
          A computed return value should be treated as read-only and never be mutated - instead, update the source state
          it depends on to trigger new computations.
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

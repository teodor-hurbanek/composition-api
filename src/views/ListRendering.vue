<script setup>
import { ref, reactive } from 'vue'

const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
const todos = ref([
  { name: 'Foo', isCompleted: true },
  { name: 'Bar', isCompleted: false },
  { name: 'Ha', isCompleted: true },
])
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10',
})
</script>

<template>
  <div>
    <h1>List Rendering</h1>

    <section>
      <h2>v-for</h2>
      <article>
        <p>
          We can use the v-for directive to render a list of items based on an array. The v-for directive requires a
          special syntax in the form of item in items, where items is the source data array and item is an alias for the
          array element being iterated on:
        </p>
      </article>

      <ul>
        <li v-for="(item, index) of items" :key="index">{{ item.message }}</li>
      </ul>
    </section>

    <section>
      <h2>v-for with an Object</h2>
      <ul>
        <li v-for="(value, key) of myObject" :key="key">{{ key }}: {{ value }}</li>
      </ul>
    </section>

    <section>
      <h2>v-for with a Range</h2>
      <article>
        <p>
          v-for can also take an integer. In this case it will repeat the template that many times, based on a range of
          1...n.
        </p>
      </article>
      <span v-for="n of 10" :key="n">{{ n }}</span>
    </section>

    <section>
      <h2>v-for with v-if</h2>
      <ul>
        <template v-for="(todo, index) in todos">
          <li :key="index" v-if="todo.isCompleted">
            {{ todo.name }}
          </li>
        </template>
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

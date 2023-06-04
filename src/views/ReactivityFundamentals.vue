<script setup>
import { reactive, ref } from 'vue'

const state = reactive({ count: 0 })
const raw = {}
const proxy = reactive(raw)

// proxy is NOT equal to the original.
console.log(proxy === raw) // false

const count = ref(0)

const increment = () => {
  state.count++
  count.value++
  //   nextTick(() => {
  //     // access updated DOM
  //   })
}
</script>

<template>
  <div>
    <h1>Reactivity Fundamentals</h1>
    <section>
      <h2>Declaring Reactive State</h2>
      <article>
        <p>
          Reactive objects are JavaScript Proxies and behave just like normal objects. The difference is that Vue is
          able to track the property access and mutations of a reactive object.
        </p>
      </article>

      <button @click="increment">Count: {{ state.count }}</button>
    </section>

    <section>
      <h2>Reactive Proxy vs. Original</h2>
      <article>
        <p>
          It is important to note that the returned value from reactive() is a Proxy of the original object, which is
          not equal to the original object.
        </p>
        <p>
          Only the proxy is reactive - mutating the original object will not trigger updates. Therefore, the best
          practice when working with Vue's reactivity system is to exclusively use the proxied versions of your state.
        </p>
        <p>
          It only works for object types (objects, arrays, and collection types such as Map and Set). It cannot hold
          primitive types such as string, number or boolean.
        </p>
      </article>
    </section>

    <section>
      <h2>Reactive Variables with ref()</h2>
      <article>
        <p>
          To address the limitations of reactive(), Vue also provides a ref() function which allows us to create
          reactive "refs" that can hold any value type.
        </p>
      </article>
      <button @click="increment">Count: {{ count }}</button>
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

<script setup>
import { ref } from 'vue'

const text = ref('Hello Vue')
const count = ref(0)
const isDisabled = ref(true)
const attrName = ref('click')

const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
}

const getSlicedText = (text, id1, id2) => {
  const newText = text
  return newText.slice(id1, id2)
}

const increment = () => {
  count.value++
}

const changeBoolean = () => {
  isDisabled.value = !isDisabled.value
}

const handleClick = () => {
  alert('test')
}

const onSubmit = () => {
  alert('submittng')
}
</script>

<template>
  <div>
    <h1>Template Syntax</h1>

    <section>
      <p>{{ text }}</p>

      <p>
        Functions called inside binding expressions will be called every time the component updates, so they should not
        have any side effects, such as changing data or triggering asynchronous operations.
      </p>
      <p>{{ getSlicedText(text, 6, 9) }}</p>
    </section>

    <section>
      <h2>Directives</h2>
      <article>
        <p>
          Directive attribute values are expected to be single JavaScript expressions (with the exception of v-for, v-on
          and v-slot, which will be discussed in their respective sections later). A directive's job is to reactively
          apply updates to the DOM when the value of its expression changes.
        </p>
        <p>Mustaches cannot be used inside HTML default attributes. Instead, use a v-bind directive:</p>
      </article>
      <button :disabled="isDisabled" @click="increment">Click</button>
      <span>{{ count }}</span>
      <div v-bind="objectOfAttrs"></div>
      <p v-if="isDisabled">Change value to false to remove this text form DOM</p>
      <button @click="changeBoolean">Change boolean</button>
    </section>

    <section>
      <h3>Dynamic Arguments</h3>
      <article>
        <p>
          It is also possible to use a JavaScript expression in a directive argument by wrapping it with square
          brackets:
        </p>
      </article>

      <button @[attrName]="handleClick">Click me</button>
    </section>

    <section>
      <h3>Modifiers</h3>
      <article>
        <p>
          Modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some
          special way. For example, the .prevent modifier tells the v-on directive to call event.preventDefault() on the
          triggered event:
        </p>
      </article>

      <form @submit.prevent="onSubmit">
        <button type="submit">Submit</button>
      </form>
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

<script setup>
import { ref, watch, watchEffect } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

const todoId = ref(1)
const data = ref(null)

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'

    try {
      const result = await fetch('https://yesno.wtf/api')
      answer.value = (await result.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})

watchEffect(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
  data.value = await response.json()
})
</script>

<template>
  <div>
    <h1>Watchers</h1>

    <article>
      <p>
        With Composition API, we can use the watch function to trigger a callback whenever a piece of reactive state
        changes
      </p>
    </article>

    <section>
      <p>
        Ask a yes/no question:
        <input type="text" v-model="question" />
      </p>
      <p>{{ answer }}</p>
    </section>

    <section>
      <h2>watchEffect()</h2>
      <article>
        <p>
          watchEffect() allows us to track the callback's reactive dependencies automatically. watchEffect only tracks
          dependencies during its synchronous execution. When using it with an async callback, only properties accessed
          before the first await tick will be tracked.
        </p>
      </article>

      <input type="number" v-model="todoId" />
      <p>{{ data }}</p>
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

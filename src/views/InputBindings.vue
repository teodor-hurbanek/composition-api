<script setup>
import { ref } from 'vue'

const message = ref('')
const checked = ref(false)
const checkedNames = ref([])
const picked = ref('One')
const selected = ref()
const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' },
])
</script>

<template>
  <div>
    <h1>Form Input Bindings</h1>

    <section>
      <h2>Basic Usage</h2>

      <p>Message is: {{ message }}</p>
      <input type="text" v-model="message" placeholder="edit me" />
    </section>

    <section>
      <h2>Multiline text</h2>

      <span>Multiline message is:</span>
      <p style="white-space: pre-line">{{ message }}</p>
      <textarea v-model="message" placeholder="add multiple lines"></textarea>
    </section>

    <section>
      <h2>Checkbox</h2>

      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>

      <div>Checked names: {{ checkedNames }}</div>

      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>

      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>

      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
    </section>

    <section>
      <h2>Radio</h2>

      <p>Picked: {{ picked }}</p>

      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>

      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
    </section>

    <section>
      <h2>Select</h2>

      <p>Selected: {{ selected }}</p>

      <select v-model="selected">
        <option value="" disabled>Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </section>

    <section>
      <select v-model="selected">
        <option v-for="(option, index) in options" :value="option.value" :key="index">
          {{ option.text }}
        </option>
      </select>
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

label,
input,
textarea,
select {
  margin-left: 0.5rem;
}
</style>

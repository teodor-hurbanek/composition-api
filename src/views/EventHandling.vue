<script setup>
const click = e => {
  console.log(e)
  alert(e.target.innerText)
}

const getString = (text, event) => {
  console.log(event)
  alert(text)
}

const keyUp = () => {
  alert('hi')
}
</script>

<template>
  <div>
    <h1>Event Handling</h1>

    <section>
      <h2>Method Handlers</h2>
      <button @click="click">Click</button>
    </section>

    <section>
      <h2>Calling Methods in Inline Handlers</h2>
      <article>
        <p>
          Instead of binding directly to a method name, we can also call methods in an inline handler. This allows us to
          pass the method custom arguments instead of the native event:
        </p>
      </article>
      <button @click="getString('cavec')">Click</button>
    </section>

    <section>
      <h2>Accessing Event Argument in Inline Handlers</h2>
      <button @click="event => getString('cavec', event)">Click</button>
    </section>

    <section>
      <h2>Event Modifiers</h2>
      <article>
        <p>
          It is a very common need to call event.preventDefault() or event.stopPropagation() inside event handlers.
          Although we can do this easily inside methods, it would be better if the methods can be purely about data
          logic rather than having to deal with DOM event details.
        </p>
      </article>
      <ul>
        <li>.stop</li>
        <li>.prevent</li>
        <li>.self</li>
        <li>.capture</li>
        <li>.once</li>
        <li>.passive</li>
      </ul>
    </section>

    <section>
      <h2>Key Modifiers</h2>
      <article>
        <p>
          When listening for keyboard events, we often need to check for specific keys. Vue allows adding key modifiers
          for v-on or @ when listening for key events.
        </p>
      </article>
      <input type="text" @keyup.enter="keyUp" />
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

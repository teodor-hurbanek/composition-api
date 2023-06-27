<script setup>
import CounterButton from '../components/CounterButton.vue'
import BlogPost from '../components/BlogPost.vue'
import AlertBox from '../components/AlertBox.vue'
import { ref } from 'vue'

const posts = ref([
  { id: 1, title: 'Title 1' },
  { id: 2, title: 'Title 2' },
  { id: 3, title: 'Title 3' },
])

const postFontSize = ref(1)

const enlargeText = () => {
  postFontSize.value += 0.1
}
</script>

<template>
  <div>
    <h1>Components</h1>

    <article>
      <p>
        Components allow us to split the UI into independent and reusable pieces, and think about each piece in
        isolation. It's common for an app to be organized into a tree of nested components
      </p>
    </article>

    <section>
      <p>
        Notice that when clicking on the buttons, each one maintains its own, separate count. That's because each time
        you use a component, a new instance of it is created.
      </p>
      <CounterButton />
      <CounterButton />
    </section>

    <section>
      <h2>Passing Props</h2>
      <BlogPost v-for="post in posts" :key="post.id" :title="post.title" />
    </section>

    <section>
      <h2>Listening to Events</h2>
      <article>
        <p>As we develop our BlogPost component, some features may require communicating back up to the parent.</p>
      </article>
      <p>
        The child component can emit an event on itself by calling the built-in $emit method, passing the name of the
        event
      </p>
      <div :style="{ fontSize: postFontSize + 'rem' }">
        <BlogPost v-for="post in posts" :key="post.id" :title="post.title" @enlarge-text="enlargeText" />
      </div>
    </section>

    <section>
      <h2>Content Distribution with Slots</h2>
      <article>
        <p>We use the Slot as a placeholder where we want the content to go – and that's it. We're done!</p>
      </article>
      <AlertBox>
        <p>Something bad happened.</p>
      </AlertBox>
    </section>

    <section>
      <h2>Dynamic Components</h2>
      <article>
        <p>Sometimes, it's useful to dynamically switch between components, like in a tabbed interface:</p>
      </article>
      <p>{{ '<component :is="tabs[currentTab]"></component>' }}</p>
    </section>
  </div>
</template>

<style scoped>
template div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

article p {
  color: hsla(160, 100%, 37%, 1);
}
</style>

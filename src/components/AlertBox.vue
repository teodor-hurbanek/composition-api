<template>
  <div class="alert-box">
    <strong>This is an Error for Demo Purposes</strong>
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.alert-box {
  border: 0.1rem solid rgb(170, 0, 0);
  padding: 1rem;
}

strong {
  color: rgb(170, 0, 0);
}
</style>

<template>
  <div id="app">
    <Hero />
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";

export default {
  name: "App",
  components: {
    Hero,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Encode Sans Expanded", sans-serif;
  font-family: "Inter", sans-serif;
  font-family: "Manrope", sans-serif;
}
a {
  text-decoration: none;
}
button {
  cursor: pointer;
}
</style>

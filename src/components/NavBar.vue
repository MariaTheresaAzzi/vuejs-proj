<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact Us</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "NavBar",
};
</script>


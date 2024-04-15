<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact Us</router-link> -->
    <a href="/" class="nav-link">Home</a> |
    <a href="/about" class="nav-link">About</a> |
    <a href="/contact" class="nav-link">Contact Us</a>

  </nav>
  <router-view />
</template>

<script>
export default {
  name: "NavBar",
};
</script>


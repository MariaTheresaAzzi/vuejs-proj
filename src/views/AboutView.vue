<template>
  <div class="about">
    <h1 data-test="about-data">This is an about page</h1>
    <div class="flex-row">
    <img alt="Vue logo" src="../assets/logo.png">
    <p data-test="about-section">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
  </div>
</template>

<style>
.flex-row {
  display: flex;
  flex-direction: row;
  max-width: 800px;
  margin: 0 auto;
}
</style>

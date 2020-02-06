<template>
  <div id="application">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#application {
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;

  --main-blue: #191d73;
  --main-blue-highlight: #2B2F99;
  --dark-blue: #0E103F;
  --light-grey: #F1F1F3;
  --dark-grey: #C3C4CC;
  --mid-grey: #E1E1E6;

  background-color: VAR(--light-grey);
}
</style>

<template>
  <div id="app">
    <v-app-bar class="pl-6">
      <v-spacer></v-spacer>
      <router-link to="/">HOME</router-link>
      <v-spacer></v-spacer>
      <router-link to="/concept">CONCEPT</router-link>
      <v-spacer></v-spacer>
      <router-link to="/works">WORKS</router-link>
      <v-spacer></v-spacer>
      <router-link to="/jobDescription">RECRUIT</router-link>
      <v-spacer></v-spacer>
      <router-link to="/company">COMPANY</router-link>
      <v-spacer></v-spacer>
    </v-app-bar>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

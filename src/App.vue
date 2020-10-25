<template>
  <div id="app">
    <v-app-bar class="pl-6" flat>
      <v-avatar>
      <img src="https://github.com/samo55/oozora_construction_company/blob/main/src/assets/%E3%82%A2%E3%83%92%E3%83%AB.png?raw=true"/>
      </v-avatar>
      <h2>大空建設</h2>
      <v-spacer></v-spacer>
      <router-link to="/" class="nav-content">HOME</router-link>
      <v-spacer></v-spacer>
      <router-link to="/concept" class="nav-content">CONCEPT</router-link>
      <v-spacer></v-spacer>
      <router-link to="/works" class="nav-content">WORKS</router-link>
      <v-spacer></v-spacer>
      <router-link to="/jobDescription" class="nav-content">RECRUIT</router-link>
      <v-spacer></v-spacer>
      <router-link to="/company" class="nav-content">COMPANY</router-link>
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
a.nav-content {
  text-decoration: none;
}
</style>

<template>
  <div id="app">
    <v-app-bar class="pl-6" flat>
      <v-app-bar-nav-icon v-if="screen < 760" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-avatar class="dack">
      <img src="https://github.com/samo55/oozora_construction_company/blob/main/src/assets/%E3%82%A2%E3%83%92%E3%83%AB.png?raw=true"/>
      </v-avatar>
      <div class="logo">
        <p>大空建設</p>
      </div>
        <v-spacer></v-spacer>
        <v-tabs  abs flat fixed-tabs v-if="screen >= 760">
          <v-tab to="/" class="nav-content">HOME</v-tab>
          <v-tab to="/concept" class="nav-content">CONCEPT</v-tab>
          <v-tab to="/works" class="nav-content">WORKS</v-tab>
          <v-tab to="/jobDescription" class="nav-content">RECRUIT</v-tab>
          <v-tab to="/company" class="nav-content">COMPANY</v-tab>
        </v-tabs>
      </v-app-bar>
      <v-navigation-drawer
        v-if="screen < 760"
        v-model="drawer"
        absolute
        left
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item to="/" class="nav-content">
              <v-list-item-title>HOME</v-list-item-title>
            </v-list-item>
            <v-list-item to="/concept" class="nav-content">
              <v-list-item-title>CONCEPT</v-list-item-title>
            </v-list-item>
            <v-list-item to="/works" class="nav-content">
              <v-list-item-title>WORKS</v-list-item-title>
            </v-list-item>
            <v-list-item to="/jobDescription" class="nav-content">
              <v-list-item-title>RECRUIT</v-list-item-title>
            </v-list-item>
            <v-list-item to="/company" class="nav-content">
              <v-list-item-title>COMPANY</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    <router-view/>
  </div>
</template>

<script>
export default {
  data: () => ({
    screen: '',
    drawer: false,
    group: null
  }),
  mounted() {
    this.screen = window.parent.screen.width;
  },
  watch: {
    group () {
      this.drawer = false
    },
  }
}
</script>


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
  }
}

.v-tabs-slider-wrapper {
  color: darkorange;
}

.logo {
  width: 10%;
  font-weight: bold;
}

a.nav-content {
  text-decoration: none;
}

// Moto G4, Galaxy S5, Pixel2, iPhone6/7/8, iPhoneX
@media screen and (max-width: 414px) {
  .dack {
    margin-left: 48%;
  }
  .logo {
    width: auto;
    font-size: large;
  }
  div.v-tabs {
    width: 66%;
  }
  a.nav-content {
    font-size: small;
  }
}

@media screen and (min-width: 415px) and (max-width: 539px) {
  .dack {
    margin-left: 44%;
  }
  .logo {
    width: auto;
    font-size: large;
  }
  div.v-tabs {
    width: 66%;
  }
  a.nav-content {
    font-size: small;
  }
}

// Surface Duo
@media screen and (min-width: 540px) and (max-width: 550px) {
  .dack {
    margin-left: 65%;
  }
  .logo {
    width: auto;
    font-size: large;
  }
  div.v-tabs {
    width: 66%;
  }
  a.nav-content {
    font-size: small;
  }
}
</style>

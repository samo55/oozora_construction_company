<template>
  <v-container>
    <div class="navi">
      <img class="photo" src="https://github.com/samo55/oozora_construction_company/blob/main/src/assets/home2.jpeg?raw=true">
      <h1>大空建設</h1>
      <br/>
      <span>あなたと作る SHUBA SHUBA LIFE</span>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'MainPage',

  data: () => ({}),
}
</script>

<style>
h1, span {
  z-index: 0;
}
.photo {
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
}
</style>
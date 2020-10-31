<template>
  <v-container>
    <div class="photo">
      <p class="title">大空建設</p>
      <br/>
      <h2 class="subtitle">あなたと作る SHUBA SHUBA LIFE</h2>
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
.title {
  font-size: 70px;
  padding-top: 33%;
}
.title, .subtitle {
  color: mintcream;
}
.photo {
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
  /* 画面いっぱいに背景画像を貼り付ける */
  background: url(https://github.com/samo55/oozora_construction_company/blob/main/src/assets/home.jpeg?raw=true) no-repeat center;
  background-size: cover;
  position: absolute;
}
.photo::before{
  /* 透過した黒を上から重ねるイメージ */
  background-color: rgba(0,0,0,0.3);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: ' ';
}
</style>
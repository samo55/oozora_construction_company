<template>
  <div class="concept">
    <br/>
    <br/>
    <h1>CONCEPT</h1>
    <span>コンセプト</span>
    <br/>
    <br/>
    <br/>
    <br/>
    <div v-if="this.screen <= 499">
    <p>社長の大胆な発想と有志のスバ友のアイデアを<p>
    <p>用いて住宅やトラップの建設を行います。</p>
    <p>また、建設したトラップによって被害者の</p>
    <p>所有アイテムが全ロスしてしまわないように、</p>
    <p>安全性にも配慮した建設を行います。</p>
    </div>
    <div v-else-if="this.screen >= 500 && this.screen < 699">
    <p>社長の大胆な発想と有志のスバ友のアイデアを用いて</p>
    <p>住宅やトラップの建設を行います。</p>
    <p>また、建設したトラップによって被害者の所有アイテムが</p>
    <p>全ロスしてしまわないように、安全性にも配慮した建設を行います。</p>
    </div>
    <div v-else-if="this.screen > 770">
      <p>社長の大胆な発想と有志のスバ友のアイデアを用いて住宅やトラップの建設を行います。</p>
      <p>また、建設したトラップによって被害者の所有アイテムが全ロスしてしまわないように、</p>
      <p>安全性にも配慮した建設を行います。</p>
    </div>
    <img class="subaru" src="https://github.com/samo55/oozora_construction_company/blob/main/src/assets/%E3%82%B9%E3%83%8F%E3%82%99%E3%83%AB.jpg?raw=true">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Concept',
  data: () => ({
    screen: ''
  }),
  mounted() {
    this.screen = window.parent.screen.width;
  },
}
</script>

<style>
.subaru {
  margin-top: 5%;
  width: 70%;
}
</style>
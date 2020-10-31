<template>
  <div class="works">
    <br/>
    <br/>
    <h1>WORKS</h1>
    <span>新居・トラップ作りなど</span>
    <br/>
    <br/>
    <br/>
    <br/>
    <h3>「スバルドダック」</h3>
    <img src="https://github.com/samo55/oozora_construction_company/blob/main/src/assets/%E3%82%B9%E3%83%8F%E3%82%99%E3%83%AB%E3%83%88%E3%82%99%E3%82%BF%E3%82%99%E3%83%83%E3%82%AF.jpeg?raw=true">
    <br/>
    <div v-if="this.screen <= 499">
      <p>羊毛の暖かさに包まれた</p>
      <p>スバル社長の新居でございます。</p>
      <p>一時、鼻水が出て風邪気味のようでしたが、</p>
      <p>現在はお元気そうです。</p>
      <p>多くのスバ友のサポートの末、</p>
      <p>無事に建設されました。</p>
    </div>
    <div v-else-if="this.screen <= 769">
      <p>羊毛の暖かさに包まれたスバル社長の新居でございます。</p>
      <p>一時、鼻水が出て風邪気味のようでしたが、現在はお元気そうです。</p>
      <p>多くのスバ友のサポートの末、無事に建設されました。</p>
    </div>
    <div v-else-if="this.screen > 770">
      <p>羊毛の暖かさに包まれたスバル社長の新居でございます。</p>
      <p>一時、鼻水が出て風邪気味のようでしたが、現在はお元気そうです。</p>
      <p>多くのスバ友のサポートの末、無事に建設されました。</p>
    </div>
    <br/>
    <br/>
    <h3>「焼けグソ」</h3>
    <img src="https://github.com/samo55/oozora_construction_company/blob/main/src/assets/%E7%84%BC%E3%81%91%E3%82%AF%E3%82%99%E3%82%BD.jpeg?raw=true">
    <br/>
    <div v-if="this.screen <= 499">
      <p>ネザーブロックで作られた、暖かさを通り越して</p>
      <p>むしろ暑ささえ感じられるスバル社長の</p>
      <p>寝室となっております。</p>
      <p>百鬼あやめ嬢との共同合作です。</p>
    </div>
    <div v-else-if="this.screen >= 500 && this.screen < 600">
      <p>ネザーブロックで作られた、暖かさを通り越して</p>
      <p>むしろ暑ささえ感じられるスバル社長の寝室となっております。</p>
      <p>百鬼あやめ嬢との共同合作です。</p>
    </div>
    <div v-else-if="this.screen <= 769">
      <p>ネザーブロックで作られた、暖かさを通り越して</p>
      <p>むしろ暑ささえ感じられるスバル社長の</p>
      <p>寝室となっております。</p>
      <p>百鬼あやめ嬢との共同合作です。</p>
    </div>
    <div v-if="this.screen > 769 && this.screen <= 770">
      <p>ネザーブロックで作られた、暖かさを通り越してむしろ暑ささえ感じられる</p>
      <p>スバル社長の寝室となっております。百鬼あやめ嬢との共同合作です。</p>
    </div>
    <div v-else-if="this.screen > 770">
      <p>ネザーブロックで作られた、暖かさを通り越してむしろ暑ささえ感じられるスバル社長の寝室となっております。</p>
      <p>百鬼あやめ嬢との共同合作です。</p>
    </div>
    <br/>
    <br/>
    <h3>「大空事務所」</h3>
    <img src="https://github.com/samo55/oozora_construction_company/blob/main/src/assets/%E5%A4%A7%E7%A9%BA%E4%BA%8B%E5%8B%99%E6%89%80.jpeg?raw=true">
    <br/>
    <div v-if="this.screen <= 540">
      <p>兎田建設のぺこら社長をトラップにはめようと</p>
      <p>意気込んで建設された事務所でしたが、</p>
      <p>ぺこら社長によってスバル社長をだますための</p>
      <p>トラップ事務所へと変貌しました。</p>
    </div>
    <div v-else-if="this.screen > 540">
      <p>兎田建設のぺこら社長をトラップにはめようと意気込んで建設された事務所でしたが、</p>
      <p>ぺこら社長によってスバル社長をだますためのトラップ事務所へと変貌しました。</p>
      <p>10月13日の配信にて、無事にトラップ事務所の祝砲をうけました。</p>
    </div>
    <br/>
    <br/>
    <h3>「ペンギンハウス地下のトラップ」</h3>
    <img src="https://github.com/samo55/oozora_construction_company/blob/main/src/assets/%E3%82%A2%E3%83%92%E3%83%AB%E3%83%88%E3%83%AD%E3%83%83%E3%82%B3.jpeg?raw=true">
    <br/>
    <div v-if="this.screen < 600">
      <p>ぺこら社長に反撃すべく、ペンギンハウスの地下に</p>
      <p>トロッコを利用したトラップを建設しました。</p>
      <p>スパイスラブの絆を表現した、日々の生活に</p>
      <p>賑やかさを与える作品の一つです。</p>
    </div>
    <div v-else-if="this.screen <= 769">
      <p>ぺこら社長に反撃すべく、ペンギンハウスの地下にトロッコを利用したトラップを建設しました。</p>
      <p>完成当初にはトロッコすべてにニワトリが乗っていましたが、</p>
      <p>育ちきったベリーの攻撃をうけ、２羽は天国へと元気に旅立ちました。</p>
      <p>スパイスラブの絆を表現した、日々の生活に賑やかさを与える作品の一つです。</p>
    </div>
    <div v-else-if="this.screen > 770">
      <p>ぺこら社長に反撃すべく、ペンギンハウスの地下にトロッコを利用したトラップを建設しました。</p>
      <p>完成当初にはトロッコすべてにニワトリが乗っていましたが、</p>
      <p>育ちきったベリーの攻撃をうけ、２羽は天国へと元気に旅立ちました。</p>
      <p>スパイスラブの絆を表現した、日々の生活に賑やかさを与える作品の一つです。</p>
    </div>
    <br/>
    <br/>
  </div>
</template>

<script>
export default {
  name: 'Works',
  data: () => ({
    screen: ''
  }),
  mounted() {
    this.screen = window.parent.screen.width;
  },
}
</script>
<style scoped>
@media screen and (max-width: 780px) {
  img {
    width: 80%;
  }
}
</style>
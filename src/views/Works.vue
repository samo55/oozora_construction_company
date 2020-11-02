<template>
  <v-app>
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
        <p>スバル社長の新居です。</p>
        <p>一時、鼻水が出て風邪気味でしたが、</p>
        <p>現在はとても元気です。</p>
        <p>多くのスバ友のサポートの末、</p>
        <p>無事に建設されました。</p>
      </div>
      <div v-else-if="this.screen <= 769">
        <p>羊毛の暖かさに包まれたスバル社長の新居です。</p>
        <p>一時、鼻水が出て風邪気味でしたが、現在はとても元気です。</p>
        <p>多くのスバ友のサポートの末、無事に建設されました。</p>
      </div>
      <div v-else-if="this.screen > 770">
        <p>羊毛の暖かさに包まれたスバル社長の新居です。</p>
        <p>一時、鼻水が出て風邪気味でしたが、現在はとても元気です。</p>
        <p>多くのスバ友のサポートの末、無事に建設されました。</p>
      </div>
      <br/>
      <br/>
      <h3>「焼けグソ」</h3>
      <img src="https://github.com/samo55/oozora_construction_company/blob/main/src/assets/%E7%84%BC%E3%81%91%E3%82%AF%E3%82%99%E3%82%BD.jpeg?raw=true">
      <br/>
      <div v-if="this.screen <= 499">
        <p>ネザーブロックで作られた、暖かさを通り越して</p>
        <p>暑さを感じるスバル社長の寝室です。</p>
        <p>百鬼あやめ嬢との共同合作です。</p>
      </div>
      <div v-else-if="this.screen >= 500 && this.screen < 600">
        <p>ネザーブロックで作られた、暖かさを通り越して</p>
        <p>暑さを感じるスバル社長の寝室です。</p>
        <p>百鬼あやめ嬢との共同合作です。</p>
      </div>
      <div v-else-if="this.screen <= 769">
        <p>ネザーブロックで作られた、暖かさを通り越して</p>
        <p>暑さを感じるスバル社長の寝室です。</p>
        <p>百鬼あやめ嬢との共同合作です。</p>
      </div>
      <div v-if="this.screen > 769 && this.screen <= 770">
        <p>ネザーブロックで作られた、暖かさを通り越して暑さを感じる</p>
        <p>スバル社長の寝室です。百鬼あやめ嬢との共同合作です。</p>
      </div>
      <div v-else-if="this.screen > 770">
        <p>ネザーブロックで作られた、暖かさを通り越して暑さを感じるスバル社長の寝室です。</p>
        <p>百鬼あやめ嬢との共同合作です。</p>
      </div>
      <br/>
      <br/>
      <h3>「大空事務所」</h3>
      <img src="https://github.com/samo55/oozora_construction_company/blob/main/src/assets/%E5%A4%A7%E7%A9%BA%E4%BA%8B%E5%8B%99%E6%89%80.jpeg?raw=true">
      <br/>
      <div v-if="this.screen <= 540">
        <p>兎田建設のぺこら社長をトラップにはめようと</p>
        <p>意気込んで建設した事務所でしたが、</p>
        <p>ぺこら社長によって改造されました。</p>
      </div>
      <div v-else-if="this.screen > 540">
        <p>兎田建設のぺこら社長をトラップにはめようと意気込んで建設した事務所でしたが、</p>
        <p>ぺこら社長によって改造されました。</p>
        <p>10月13日の配信にて、無事にトラップ事務所の祝砲をうけました。</p>
      </div>
      <br/>
      <br/>
      <h3>「ペンギンハウス地下のイタズラ」</h3>
      <img src="https://github.com/samo55/oozora_construction_company/blob/main/src/assets/%E3%82%A2%E3%83%92%E3%83%AB%E3%83%88%E3%83%AD%E3%83%83%E3%82%B3.jpeg?raw=true">
      <br/>
      <div v-if="this.screen < 600">
        <p>ぺこら社長のイタズラに対抗すべく、</P>
        <P>ペンギンハウスの地下にトロッコを利用した</p>
        <p>騒音施設を建設しました。</p>
        <p>スパイスラブの絆を表現した、日々の生活に</p>
        <p>賑やかさを与える作品の一つです。</p>
      </div>
      <div v-else-if="this.screen <= 769">
        <p>ぺこら社長のイタズラに対抗すべく、ペンギンハウスの地下に</P>
        <P>トロッコを利用した騒音施設を建設しました。</p>
        <p>完成当初にはトロッコすべてにニワトリが乗っていましたが、</p>
        <p>育ちきったベリーの攻撃をうけ、２羽は天国へと元気に旅立ちました。</p>
        <p>スパイスラブの絆を表現した、日々の生活に賑やかさを与える作品の一つです。</p>
      </div>
      <div v-else-if="this.screen > 770">
        <p>ぺこら社長のイタズラに対抗すべく、ペンギンハウスの地下にトロッコを利用した騒音施設を建設しました。</p>
        <p>完成当初にはトロッコすべてにニワトリが乗っていましたが、</p>
        <p>育ちきったベリーの攻撃をうけ、２羽は天国へと元気に旅立ちました。</p>
        <p>スパイスラブの絆を表現した、日々の生活に賑やかさを与える作品の一つです。</p>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <transition name="fade">
        <v-btn
          v-scroll="onScroll"
          v-show="fab"
          fab
          dark
          fixed
          bottom
          right
          color="yellow darken-3"
          @click="toTop"
        >
          <v-icon dark>
            mdi-arrow-up
          </v-icon>
        </v-btn>
      </transition>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'Works',
  data: () => ({
    screen: '',
    fab: false
  }),
  mounted() {
    this.screen = window.parent.screen.width;
  },
  methods : {
    onScroll (e) {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset ||   e.target.scrollTop || 0;
      this.fab = top > 500;
    },
    toTop () {
      this.$vuetify.goTo(0);
    }
  }
}
</script>
<style scoped>
@media screen and (max-width: 780px) {
  img {
    width: 80%;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: 0.4s;
} 
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
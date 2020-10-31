
<template>
  <div class="jobDescription">
    <br/>
    <br/>
    <h1>RECRUIT</h1>
    <span>社員募集</span>
    <br/>
    <br/>
    <br/>
    大空建設では社員を募集しています！
    <br/>
    A型の方も積極採用！！
    <br/>
    <br/>
    <br/>
    <h4>募集要項</h4>

      <v-list v-for="item in items" :key='item.value'>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              {{item.value}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

  </div>
</template>

<script>
export default {
  name: 'JobDescription',
  data: () => ({
    items: [{value: 'スバル社長の配信をよく見ている'}, {value: 'トラップのアイデアを考えることが好き'}, {value: 'トラップを作ることが好き'}, {value: '一緒にマイクラ建築をやってみたい人'}]
  }),
}
</script>

<style>
.list {
  margin-left: auto;
  margin-right: auto;
}
</style>
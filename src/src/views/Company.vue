<template>
  <div class="company">
    <br/>
    <br/>
    <h1>COMPANY</h1>
    <span>会社案内</span>
    <br/>
    <br/>
    <br/>
    <br/>
    <h2>ABOUT US</h2>
    <br/>
    <br/>
    <v-simple-table class="company-table">
      <tbody>
        <tr>
          <td>資本金</td>
          <td>０円</td>
        </tr>
        <tr>
          <td>所在地</td>
          <td>ホロ鯖内のホロ村ちかく</td>
        </tr>
        <tr>
          <td>連絡先</td>
          <td>TEL 777-1234-5678</td>
        </tr>
        <tr>
          <td>事業内容</td>
          <td>住宅やトラップの建設</td>
        </tr>
        <tr>
          <td>営業時間</td>
          <td>マイクラ配信時間内</td>
        </tr>
        <tr>
          <td>所属団体</td>
          <td>ホロライブプロダクション</td>
        </tr>
        <tr>
          <td>代表取締役</td>
          <td>大空スバル</td>
        </tr>
      </tbody>
    </v-simple-table>
    <br/>
    <br/>
  </div>
</template>

<script>
export default {
  name: 'Company',
}
</script>
<style>
.company-table {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 700px) {
  .company-table {
    width: 100%;
  }
}
</style>
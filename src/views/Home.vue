<template>
  <div class="concept">
    <MainPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from '@/components/MainPage.vue'

export default {
  name: 'Home',
  components: {
    MainPage
  }
}
</script>
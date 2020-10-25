<template>
  <v-container>
    <div class="navi">
      <img class="photo" src="https://github.com/samo55/oozora_construction_company/blob/main/src/assets/home.jpg?raw=true">
      <img class="photo fadeout" src="https://github.com/samo55/oozora_construction_company/blob/main/src/assets/home2.jpeg?raw=true">
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'MainPage',

  data: () => ({
    index: 0
  }),
  mounted() {
    const photos = document.getElementsByClassName('photo');
    this.showPhoto(photos);
    setInterval(() => {
      this.index = this.index < photos.length -1 ? this.index + 1 :
      this.showPhoto(photos);
    }, 3000);
  },
  methods: {
    showPhoto(photos) {
      const currentPhoto = photos[this.index];
      console.log('111', currentPhoto);
      const prevPhoto = photos[this.index -1] ? photos[this.index -1] :
      currentPhoto.classList.add('fadein');
      currentPhoto.classList.remove('fadeout');
      prevPhoto.classList.remove('fadein');
      prevPhoto.classList.add('fadeout');
    }
  }
}
</script>

<style>
.photo {
  left: 0px;
  width: 100%;
  height: 60%;
  position: absolute;
}
.fadein {
  opacity: 1;
  transition: opacity 0.5s;
}
.fadeout {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
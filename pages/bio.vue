<template>
  <div class="page bio">
    <h1>{{ $t('bio.picker') }}</h1>
    <ThrasherPicker></ThrasherPicker>
    <img src="/assets/images/logo.png" alt="" class="logo">
    <p v-html="$t('bio.bio')" class="jump"></p>
    <h2>Albums</h2>
    <div class="albums">
      <div class="album" v-for="album in albums" :class="{ activated: selected === album.title, deactivated: selected != album.title && selected != '' }">
        <img :src="album.imgSrc" :alt="album.title" v-on:click="changeAlbum(album.title)">
        <div class="albumInfo">
          <p v-on:click="changeAlbum('')" class="exit">X</p>
          <h3>{{ album.title }} - {{ album.date }}</h3>
          <p v-html="album.desc"></p>
          <a href="#" class="hexbutton hexbutton--full--1">Listen to it</a>
        </div>
      </div>
    </div>
    <h2>Photo Gallery</h2>
    <div class="gallerie"></div> 
  </div>
</template>

<script lang="ts" setup>
const albums = [{
  title: 'First in, First out',
  imgSrc: '../albums/albumFiFo.jpg',
  desc: 'First in, First out est sorti en 2023,  Fusce tincidunt, sapien vel hendrerit viverra, mauris nisi interdum  turpis, eu consequat risus dolor non nibh. Aliquam et bibendum diam, non ultrices nisi. Aliquam sed feugiat nibh. Nulla sit amet interdum nulla. Integer eu viverra eros. Nullam finibus varius varius. Sed efficitur  vel libero eget faucibus. Duis ultrices erat sed mollis ornare. Aliquam  vel sapien metus.Enregistré, mixé et masterisé par Sebastien Cahmi',
  date: 2023
}, {
  title: 'World on Disease',
  imgSrc: "../albums/albumWoD.jpg",
  desc: 'pi',
  date: 2020
}, {
  title: "Thrashocalypse",
  imgSrc: '../albums/albumThrasho.jpg',
  desc: 'pou',
  date: 2018
}]

var selected = ref('')



const changeAlbum = (album: string) => {
  selected.value = album
}

</script>
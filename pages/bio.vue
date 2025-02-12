<template>
  <div class="page bio">
    <h1>Choose your Thrasher</h1>
    <ThrasherPicker></ThrasherPicker>
    <img src="/assets/images/logo.png" alt="" class="logo">
    <p> Nulla placerat scelerisque massa, quis imperdiet velit finibus eu. In a euismod diam, a elementum libero. Ut
      tincidunt vulputate quam nec eleifend. Vivamus eros justo, vulputate id tempus id, tempus nec dui. Suspendisse vel
      nisl ut magna rutrum suscipit sed sit amet lectus. Pellentesque hendrerit ultricies purus sit amet dapibus. Sed
      condimentum porttitor leo, <span class="color-3">dignissim eleifend</span> purus fringilla pulvinar. In iaculis,
      lacus a mattis iaculis, tortor
      sem eleifend metus, sit amet vulputate nunc ligula sed augue. Morbi nec tortor finibus, placerat neque non,
      sagittis mauris.

      Sed maximus ornare libero a elementum. Curabitur sed enim cursus, lobortis est quis, condimentum sapien. Donec in
      nulla felis. Sed sit amet sagittis nunc. <span class="color-3">Vivamus cursus sodales</span> scelerisque.
      Suspendisse molestie scelerisque
      dignissim. Morbi dapibus commodo ex, id placerat eros lacinia ut. Nam scelerisque, ipsum vel tincidunt lacinia,
      dui erat tempus elit, vel accumsan eros justo id elit. Nullam elementum faucibus sapien, at pretium urna tristique
      non. Suspendisse vitae nulla congue, euismod quam eget, convallis odio. Fusce facilisis est at lacus mollis, et
      aliquam nibh luctus. </p>
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
  imgSrc: 'albums/albumFiFo.jpg',
  desc: 'First in, First out est sorti en 2023,  Fusce tincidunt, sapien vel hendrerit viverra, mauris nisi interdum  turpis, eu consequat risus dolor non nibh. Aliquam et bibendum diam, non ultrices nisi. Aliquam sed feugiat nibh. Nulla sit amet interdum nulla. Integer eu viverra eros. Nullam finibus varius varius. Sed efficitur  vel libero eget faucibus. Duis ultrices erat sed mollis ornare. Aliquam  vel sapien metus.Enregistré, mixé et masterisé par Sebastien Cahmi',
  date: 2023
}, {
  title: 'World on Disease',
  imgSrc: "albums/albumWoD.jpg",
  desc: 'pi',
  date: 2020
}, {
  title: "Thrashocalypse",
  imgSrc: 'albums/albumThrasho.jpg',
  desc: 'pou',
  date: 2018
}]

var selected = ref('')



const changeAlbum = (album: string) => {
  selected.value = album
}

</script>
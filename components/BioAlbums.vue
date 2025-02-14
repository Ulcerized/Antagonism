<script lang="ts" setup>
const { t } = useI18n()

const albums = [
  {
    name: "First in, First out",
    released: new Date("2023-03-15"),
    desc: t('bio.albums.fifo'),
    imgSrc: "../albums/albumFiFo.jpg",
    links: {
      spotify: "https://open.spotify.com/intl-fr/album/2c0YtWBdBAZ3szrS8b23Z5",
      youtube: "https://music.youtube.com/playlist?list=OLAK5uy_kFF17KedIyeH3k2XmkWTSyFZe8gjpVGgI",
      amazon: "https://music.amazon.fr/albums/B0BVMYNR7Y",
      apple: "https://music.apple.com/fr/album/first-in-first-out/1672067489"
    }
  },
  {
    name: "World on Disease",
    released: new Date("2020-02-29"),
    desc: t('bio.albums.wod'),
    imgSrc: "../albums/albumWoD.jpg",
    links: {
      spotify: "https://open.spotify.com/intl-fr/album/686Nvj4FaGgnzPZu88vrGo",
      youtube: "https://music.youtube.com/playlist?list=OLAK5uy_m4OzgbXAztV2uLW5drKvzNXPQbDw8XoTw",
      amazon: "https://music.amazon.fr/albums/B0876HKJ8X",
      apple: "https://music.apple.com/fr/album/world-on-disease/1508333383"
    }
  },
  {
    name: "Thrashocalypse",
    released: new Date("2018-03-01"),
    desc: t('bio.albums.thrasho'),
    imgSrc: "../albums/albumThrasho.jpg",
    links: {
      spotify: "https://open.spotify.com/intl-fr/album/7Jmp8260WKGbHccUlBp34q",
      youtube: "https://music.youtube.com/playlist?list=OLAK5uy_lRxRtzyyKvJb20vCH2gByiMnZokcu1yz0",
      amazon: "https://music.amazon.fr/albums/B0871PD57L",
      apple: "https://music.apple.com/fr/album/thrashocalypse-ep/1507684692"
    }
  }
]

var selected = ref('')



const changeAlbum = (album: string) => {
  if (selected.value === album) {
    selected.value = ""
  }
  else {
    selected.value = album
  }
}
</script>

<template>
  <div class="albums">
    <div class="album" v-for="album in albums"
      :class="{ activated: selected === album.name, deactivated: selected != album.name && selected != '' }">
      <img :src="album.imgSrc" :alt="album.name" v-on:click="changeAlbum(album.name)">
      <div class="albumInfo">
        <p v-on:click="changeAlbum('')" class="exit">X</p>
        <h3>{{ album.name }} - {{ album.released.getFullYear() }}</h3>
        <p v-html="album.desc"></p>
        <div class="listenToIt">
          <a :href="album.links.youtube" class="youtube">
            <SvgYoutube></SvgYoutube>
          </a>
          <a :href="album.links.apple" class="apple">
            <SvgApple></SvgApple>
          </a>
          <a :href="album.links.amazon" class="amazon">
            <SvgAmazon></SvgAmazon>
          </a>
          <a :href="album.links.spotify" class="spotify">
            <SvgSpotify></SvgSpotify>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

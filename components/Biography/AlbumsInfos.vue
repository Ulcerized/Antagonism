<script lang="ts" setup>
const { t } = useI18n()

const ALBUMS = [
  {
    name: "First in, First out",
    releaseDate: new Date("2023-03-15"),
    description: t('bio.albums.fifo'),
    imagePath: "../albums/first-in-first-out.jpg",
    links: {
      spotify: "https://open.spotify.com/intl-fr/album/2c0YtWBdBAZ3szrS8b23Z5",
      youtube: "https://music.youtube.com/playlist?list=OLAK5uy_kFF17KedIyeH3k2XmkWTSyFZe8gjpVGgI",
      amazon: "https://music.amazon.fr/albums/B0BVMYNR7Y",
      apple: "https://music.apple.com/fr/album/first-in-first-out/1672067489"
    }
  },
  {
    name: "World on Disease",
    releaseDate: new Date("2020-02-29"),
    description: t('bio.albums.wod'),
    imagePath: "../albums/world-on-disease.jpg",
    links: {
      spotify: "https://open.spotify.com/intl-fr/album/686Nvj4FaGgnzPZu88vrGo",
      youtube: "https://music.youtube.com/playlist?list=OLAK5uy_m4OzgbXAztV2uLW5drKvzNXPQbDw8XoTw",
      amazon: "https://music.amazon.fr/albums/B0876HKJ8X",
      apple: "https://music.apple.com/fr/album/world-on-disease/1508333383"
    }
  },
  {
    name: "Thrashocalypse",
    releaseDate: new Date("2018-03-01"),
    description: t('bio.albums.thrasho'),
    imagePath: "../albums/thrashocalypse.jpg",
    links: {
      spotify: "https://open.spotify.com/intl-fr/album/7Jmp8260WKGbHccUlBp34q",
      youtube: "https://music.youtube.com/playlist?list=OLAK5uy_lRxRtzyyKvJb20vCH2gByiMnZokcu1yz0",
      amazon: "https://music.amazon.fr/albums/B0871PD57L",
      apple: "https://music.apple.com/fr/album/thrashocalypse-ep/1507684692"
    }
  }
]

const SELECTED_ALBUM = ref('')

const change_album = (album: string) => {
  if (SELECTED_ALBUM.value === album) {
    SELECTED_ALBUM.value = ""
  }
  else {
    SELECTED_ALBUM.value = album
  }
}
</script>

<template>
  <div id="albums-info">
    <div class="album" v-for="album in ALBUMS"
      :class="{ selectedAlbum: SELECTED_ALBUM === album.name, unselectedAlbum: SELECTED_ALBUM != album.name && SELECTED_ALBUM != '' }">
      <img :src="album.imagePath" :alt="album.name" v-on:click="change_album(album.name)">
      <div class="album-text">
        <p v-on:click="change_album('')" class="exit">X</p>
        <h3>{{ album.name }} - {{ album.releaseDate.getFullYear() }}</h3>
        <p v-html="album.description"></p>
        <div class="listening-links">
          <a :href="album.links.youtube" class="youtube">
            <SvgYoutube />
          </a>
          <a :href="album.links.apple" class="apple">
            <SvgApple />
          </a>
          <a :href="album.links.amazon" class="amazon">
            <SvgAmazon />
          </a>
          <a :href="album.links.spotify" class="spotify">
            <SvgSpotify />
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

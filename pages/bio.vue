<template>
  <div class="page bio">
    <h1>{{ $t('bio.picker') }}</h1>
    <ThrasherPicker></ThrasherPicker>
    <img src="/assets/images/logo.png" alt="" class="logo">
    <p v-html="$t('bio.bio')" class="jump"></p>
    <h2>Albums</h2>
    <BioAlbums></BioAlbums>
    <h2>Photo Gallery</h2>
    <div class="gallerie"></div> 
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Biography | Antagonism'
})
</script>
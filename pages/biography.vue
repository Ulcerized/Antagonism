<script lang="ts" setup>
const { t } = useI18n({ useScope: "global" })

useHead({
  title: t('homepage.biography') + ' | Antagonism'
})
</script>

<template>
  <div class="page" id="biography">
    <h1>{{ $t("homepage.biography") }}</h1>
    <h3>{{ $t('bio.picker') }}</h3>
    <BiographyThrasherPicker />
    <img src="/assets/images/common/logo.png" alt="Antagonism" class="logo">
    <p v-html="$t('bio.bio')" class="history"></p>
    <h3>Albums</h3>
    <BiographyAlbumsInfos />
    <h3>Photo Gallery</h3>
    <div class="gallery"></div> 
  </div>
</template>
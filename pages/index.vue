<script lang="ts" setup>
useHead({
  title: "ANTAGONISM | Old School Thrash Metal",
})

definePageMeta({
  layout: 'empty',
});

</script>

<template>
  <div>
    <Socials class="socials"></Socials>
    <img src="../assets/images/215.png" alt="215" class="logo215">
    <div class="menuhp container" style="--m:7">
      <a href="#" style="--i: 0" title="Videos"><img src="../assets/images/video.png" alt="Videos">
        <SvgCircleName :name="$t('homepage.videos')" class="CircleName"></SvgCircleName>
      </a>
      <a href="#" style="--i: 1" title="Games"><img src="../assets/images/arcade.png" alt="Games">
        <SvgCircleName :name="$t('homepage.games')" class="CircleName"></SvgCircleName>
      </a>
      <a href="#" style="--i: 2" title="Merch"><img src="../assets/images/merch.png" alt="Merch">
        <SvgCircleName name="Merch" class="CircleName"></SvgCircleName>
      </a>
      <a href="#" style="--i: 3" title="News"><img src="../assets/images/news.png" alt="News">
        <SvgCircleName :name="$t('homepage.news')" class="CircleName"></SvgCircleName>
      </a>
      <a :href="$localePath('contact')" style="--i: 4" title="Contact"><img src="../assets/images/phone.png" alt="Contact">
        <SvgCircleName name="Contact" class="CircleName"></SvgCircleName>
      </a>
      <a :href="$localePath('bio')" style="--i: 5" title="Biography"><img src="../assets/images/livre.png" alt="Biography">
        <SvgCircleName :name="$t('homepage.bio')" class="CircleName"></SvgCircleName>
      </a>
      <a :href="$localePath('tour')" style="--i: 6" title="Tour"><img src="../assets/images/tour.png" alt="Tour">
        <SvgCircleName :name="$t('homepage.tour')" class="CircleName"></SvgCircleName>
      </a>
    </div>
  </div>
</template>
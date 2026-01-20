<script lang="ts" setup>
useHead({
  title: "ANTAGONISM | Old School Thrash Metal",
})

definePageMeta({
  layout: 'empty',
});

</script>

<template>
  <div id="homepage">
    <Socials />
    <img src="../assets/images/homepage/icon-215-logo.png" alt="215" class="logo-215">
    <div class="solar-system" style="--number-of-planets:7">
      <a style="--planet-number: 0" title="Videos" class="disabled"><img src="../assets/images/homepage/icon-videos.png" alt="Videos">
        <SvgHomepageCircleName :pageName="$t('homepage.videos')" class="circle-name"/>
      </a>
      <a style="--planet-number: 1" title="Games" class="disabled"><img src="../assets/images/homepage/icon-video-games.png" alt="Games">
        <SvgHomepageCircleName :pageName="$t('homepage.games')" class="circle-name" />
      </a>
      <a style="--planet-number: 2" title="Merch" class="disabled"><img src="../assets/images/homepage/icon-merch.png" alt="Merch">
        <SvgHomepageCircleName pageName="Merch" class="circle-name" />
      </a>
      <a style="--planet-number: 3" title="News" class="disabled"><img src="../assets/images/homepage/icon-news.png" alt="News">
        <SvgHomepageCircleName :pageName="$t('homepage.news')" class="circle-name" />
      </a>
      <a :href="$localePath('contact')" style="--planet-number: 4" title="Contact"><img src="../assets/images/homepage/icon-contact.png" alt="Contact">
        <SvgHomepageCircleName pageName="Contact" class="circle-name" />
      </a>
      <a :href="$localePath('biography')" style="--planet-number: 5" title="Biography"><img src="../assets/images/homepage/icon-biography.png" alt="Biography">
        <SvgHomepageCircleName :pageName="$t('homepage.biography')" class="circle-name" />
      </a>
      <a :href="$localePath('tour')" style="--planet-number: 6" title="Tour"><img src="../assets/images/homepage/icon-tour.png" alt="Tour">
        <SvgHomepageCircleName :pageName="$t('homepage.tour')" class="circle-name" />
      </a>
    </div>
  </div>
</template>
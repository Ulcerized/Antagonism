<script lang="ts" setup>
useHead({
  title: "ANTAGONISM | Old School Thrash Metal",
})

setPageLayout('empty')
definePageMeta({
  layout: false,
});

</script>

<template>
  <div>
    <Socials class="socials"></Socials>
    <img src="../assets/images/215.png" alt="215" class="logo215">
    <div class="menuhp container" style="--m:7">
      <a href="#" style="--i: 0" title="Videos"><img src="../assets/images/video.png" alt="Videos">
        <SvgCircleName name="Videos" class="CircleName"></SvgCircleName>
      </a>
      <a href="#" style="--i: 1" title="Games"><img src="../assets/images/arcade.png" alt="Games">
        <SvgCircleName name="Video Games" class="CircleName"></SvgCircleName>
      </a>
      <a href="#" style="--i: 2" title="Merch"><img src="../assets/images/merch.png" alt="Merch">
        <SvgCircleName name="Merch" class="CircleName"></SvgCircleName>
      </a>
      <a href="#" style="--i: 3" title="News"><img src="../assets/images/news.png" alt="News">
        <SvgCircleName name="News" class="CircleName"></SvgCircleName>
      </a>
      <a href="/contact" style="--i: 4" title="Contact"><img src="../assets/images/phone.png" alt="Contact">
        <SvgCircleName name="Contact" class="CircleName"></SvgCircleName>
      </a>
      <a href="#" style="--i: 5" title="Biography"><img src="../assets/images/livre.png" alt="Biography">
        <SvgCircleName name="Biography" class="CircleName"></SvgCircleName>
      </a>
      <a href="/tour" style="--i: 6" title="Tour"><img src="../assets/images/tour.png" alt="Tour">
        <SvgCircleName name="Tour" class="CircleName"></SvgCircleName>
      </a>
    </div>
  </div>
</template>
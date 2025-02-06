<script setup>
import { h } from 'vue'

useHead({
  title: "TEST",
})

const  { data }  = await useFetch('https://rest.bandsintown.com/artists/Antagonism/events?app_id=79ded5ff4c09a57614ecc43f90746887&date=past')

/*let info =  data.value
let i = 0*/

let jonhatan = h('div', {innerHTML:'ploup'})
let magalie = document.createElement('h1')
magalie.innerHTML = 'la vie de ta mere'

let jonhatan2 = typeof(jonhatan)


</script>

<template>
  <div>
    <component :is="jonhatan"/>
    {{ jonhatan2 }}
    <component :is="magalie"/>
    {{ magalie }}
    </div>
</template>

<style></style>
<script setup>
import { h } from 'vue'

useHead({
  title: "TEST",
})

const { data } = await useFetch('https://rest.bandsintown.com/artists/Antagonism/events?app_id=79ded5ff4c09a57614ecc43f90746887&date=past')

let info =  data.value
let res = Array()
for (let i=0; i < info.length; i++) {
  let url = info[i]['url']
  let datetime = info[i]['datetime']
  let venuename = info[i]['venue']['name']
  let venuecity = info[i]['venue']['city']
  let venuecountry = info[i]['venue']['county']
  let lineup = info[i]['lineup'].filter(checkAntagonism)
  let printedlineup = '' 
  if (lineup.length > 0) {
    lineup.forEach(band => {
      printedlineup = printedlineup + ', ' + band
    });
  }

  let j = h('div', 
  [h('a', {href: url}, [
    h('p', [datetime]),
    h('p', [venuename]),
    h('p', [venuecity, venuecountry]),
    h('p', [printedlineup])
    ])
  ])
  res.push(j)
}

function checkAntagonism(name) {
  return name != 'Antagonism'
}

let jonhatan = h('div', [res])

</script>

<template>
  <div>
    <component :is="jonhatan" />
    <div>
      <a href="[url]">
        <p>[datetime]</p>
        <p>[venue[name]]</p>
        <p>[venue[city]][venue[country]]</p>
        <p>[lineup]</p>
      </a>
    </div>
  </div>
</template>

<style></style>
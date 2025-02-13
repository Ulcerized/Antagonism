<template>
  <div class="page tour">
    <h1>{{ $t('tour.title') }}</h1>
    <div class="select">
      <button v-for="tomselec in selectable" :key="tomselec" v-on:click="chargeDates(tomselec)"
        :class="{ active: selected === tomselec }">
        {{ tomselec }}
      </button>
    </div>
    <div>
      <a v-for="date in tourDates" :key="date.id" :href="date.url" target="_blank" class="datesList">
        <div class="details">
          <p class="date">{{ formatDate(date.datetime) }}</p>
          <p class="venue">{{ date.venue.name }}<br>
            {{ date.venue.city }}, {{ date.venue.country }}</p>
          <p class="lineup"> {{ formatLineUp(date.lineup) }}</p>
        </div>
        <div class="buttons" v-html="formatButtons(date)">
        </div>
      </a>
    </div>
  </div>
</template>


<script lang="ts" setup>
const { t } = useI18n({ useScope: "global" })


const months = [t('tour.month.jan'), t('tour.month.feb'), t('tour.month.mar'), t('tour.month.apr'), t('tour.month.may'), t('tour.month.jun'), t('tour.month.jul'), t('tour.month.aug'), t('tour.month.sep'), t('tour.month.oct'), t('tour.month.nov'), t('tour.month.dec')] as const
var selected = ref(t('tour.future'))
const selectable = [t('tour.future'), t('tour.past')]
const ticket = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 40 32" shape-rendering="crispEdges">
        <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
        <path stroke="#000000"
            d="M29 0h2M27 1h2M31 1h1M25 2h2M31 2h1M23 3h2M32 3h1M21 4h2M32 4h1M19 5h2M33 5h1M17 6h2M33 6h1M15 7h2M34 7h1M1 8h38M0 9h40M0 10h2M29 10h1M38 10h2M0 11h2M29 11h1M38 11h2M0 12h2M38 12h2M0 13h2M29 13h1M38 13h2M0 14h2M29 14h1M38 14h2M0 15h3M37 15h3M1 16h3M29 16h1M36 16h3M2 17h3M29 17h1M35 17h3M3 18h2M35 18h2M3 19h2M29 19h1M35 19h2M3 20h2M29 20h1M35 20h2M3 21h2M35 21h2M2 22h3M29 22h1M35 22h3M1 23h3M29 23h1M36 23h3M0 24h3M37 24h3M0 25h2M29 25h1M38 25h2M0 26h2M29 26h1M38 26h2M0 27h2M38 27h2M0 28h2M29 28h1M38 28h2M0 29h2M29 29h1M38 29h2M0 30h40M1 31h38" />
    </svg>`
const bell = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 32 32" shape-rendering="crispEdges">
        <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
        <path stroke="#000000"
         d="M14 0h4M14 1h4M13 2h2M17 2h2M13 3h2M17 3h2M13 4h6M2 5h1M11 5h10M29 5h1M1 6h2M10 6h3M19 6h3M29 6h2M1 7h1M9 7h2M21 7h2M30 7h1M0 8h2M8 8h3M21 8h3M30 8h2M0 9h1M4 9h1M8 9h2M22 9h2M27 9h1M31 9h1M0 10h1M3 10h1M8 10h2M22 10h2M28 10h1M31 10h1M0 11h1M3 11h1M8 11h2M22 11h2M28 11h1M31 11h1M0 12h1M3 12h1M7 12h2M23 12h2M28 12h1M31 12h1M0 13h1M3 13h1M7 13h2M23 13h2M28 13h1M31 13h1M0 14h1M4 14h1M7 14h2M23 14h2M27 14h1M31 14h1M0 15h2M7 15h2M23 15h2M30 15h2M1 16h1M7 16h2M23 16h2M30 16h1M1 17h2M7 17h2M23 17h2M29 17h2M2 18h1M7 18h2M23 18h2M29 18h1M6 19h2M24 19h2M6 20h2M24 20h2M5 21h2M25 21h2M4 22h3M25 22h3M3 23h26M2 24h2M28 24h2M2 25h2M28 25h2M2 26h28M3 27h26M11 28h2M19 28h2M12 29h2M18 29h2M13 30h6M14 31h4" />
    </svg>`




const { data: past } = await useFetch('https://rest.bandsintown.com/artists/Antagonism/events?app_id=79ded5ff4c09a57614ecc43f90746887&date=past', { method: 'GET' });
const { data: future } = await useFetch('https://rest.bandsintown.com/artists/Antagonism/events?app_id=79ded5ff4c09a57614ecc43f90746887', { method: 'GET' });

const pastDates = computed(() => {
  return past && past.value.slice().reverse() || []
})
const futureDates = computed(() => {
  return future && future.value || []
})
var tourDates = futureDates

useHead({
  title: "Tour | Antagonism",
})
onMounted(() => {
  // cette fonction est lancée quand le composant est prêt
})

const chargeDates = (period: string) => {
  if (period === selectable[0]) {
    selected.value = selectable[0]
    tourDates = futureDates
  }
  else if (period === selectable[1]) {
    selected.value = selectable[1]
    tourDates = pastDates
  }
}

const formatDate = (date: string) => {
  const dateInput = new Date(date)
  return months[dateInput.getMonth()] + '. ' + dateInput.getDate() + ' ' + dateInput.getFullYear()
}

const formatLineUp = (lineup: Array<string>) => {
  if (lineup.length > 1) {
    let liste = t('tour.with')
    lineup.forEach(band => {
      if (band !== "Antagonism") {
        liste = liste + band + ', '
      }
    })
    liste = liste.slice(0, -2)
    if (liste.length > 50) {
      liste = liste.slice(0, 50) + '...'
    }
    return liste
  }
  return ''
}

const formatButtons = (date: Array) => {
  const concertDate = new Date(date.datetime)
  const now = new Date()
  if (concertDate < now) {
    return "<a target='_blank' href='" + date.url + "&trigger=rate' class='hexbutton hexbutton--outline hexbutton--tour'><p>" + t('tour.wathere') +"</p></a>"
  }
  else {
    let offers = date.offers[0]
    if (offers.length === 0) {
      return "<a target='_blank' href='"+ date.url+ "&trigger=notify_me' class='hexbutton hexbutton--tour'><p>" + t('tour.notify') +"</p></a>"
    }
    else {
      return "<a target='_blank' href='"+ offers.url + "' class='hexbutton hexbutton--full--1 hexbutton--tour'>"+ticket+"<p>TICKETS</p></a>" +
      "<a target='_blank' href='"+ date.url+ "&trigger=rsvp_going' class='hexbutton hexbutton--full--2 hexbutton--tour'>"+bell+"<p>" + t('tour.reminder') +"</p></a>"
    }
  }
}



</script>
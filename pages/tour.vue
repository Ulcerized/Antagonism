<template>
  <div class="page tour">
    <h1>CATCH US ON TOUR !</h1>
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
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'] as const
var selected = ref('Future')
const selectable = ['Future', 'Past']



const { data: zbeb } = await useFetch('https://rest.bandsintown.com/artists/Antagonism/events?app_id=79ded5ff4c09a57614ecc43f90746887&date=past', { method: 'GET' });
const { data: zboub } = await useFetch('https://rest.bandsintown.com/artists/Antagonism/events?app_id=79ded5ff4c09a57614ecc43f90746887', { method: 'GET' });

const pastDates = computed(() => {
  return zbeb && zbeb.value.slice().reverse() || []
})
const futureDates = computed(() => {
  return zboub && zboub.value || []
})
var tourDates = futureDates

useHead({
  title: "Tour | Antagonism",
})
onMounted(() => {
  // cette fonction est lancée quand le composant est prêt
})

const chargeDates = (period: string) => {
  if (period === 'Future') {
    selected.value = 'Future'
    tourDates = futureDates
  }
  else if (period === 'Past') {
    selected.value = 'Past'
    tourDates = pastDates
  }
}

const formatDate = (date: string) => {
  const dateInput = new Date(date)
  return months[dateInput.getMonth()] + '. ' + dateInput.getDate() + ' ' + dateInput.getFullYear()
}

const formatLineUp = (lineup: Array<string>) => {
  if (lineup.length > 1) {
    let liste = 'With : '
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
    return "<a target='_blank' href='" + date.url + "&trigger=rate' class='hexbutton hexbutton--tour'><p>I WAS THERE</p></a>"
  }
  else {
    let offers = date.offers[0]
    if (offers.length === 0) {
      return "<a target='_blank' href='"+ date.url+ "&trigger=notify_me' class='hexbutton hexbutton--tour'><p>NOTIFY ME</p></a>"
    }
    else {
      return "<a target='_blank' href='"+ offers.url + "' class='hexbutton hexbutton--tour'><p>TICKETS</p></a>" +
      "<a target='_blank' href='"+ date.url+ "&trigger=rsvp_going' class='hexbutton hexbutton--tour'><p>SET REMINDER</p></a>"
    }
  }
}



</script>
<script setup>


function pastDates() {
  console.log('blaboum')
  const { data } = useFetch('https://rest.bandsintown.com/artists/Antagonism/events?app_id=79ded5ff4c09a57614ecc43f90746887&date=past', { server: false, immediate: false, method: 'GET' });

  let info = data.value
  let past = Array()
  let months = Array('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC')
  for (let i = 0; i < info.length; i++) {
    let url = info[i]['url']
    let datetime = new Date(info[i]['datetime'])
    let date = months[datetime.getMonth()] + '. ' + datetime.getDate() + ' ' + datetime.getFullYear()
    let venuename = info[i]['venue']['name']
    let venuecity = info[i]['venue']['city']
    let venuecountry = info[i]['venue']['country']
    let lineup = info[i]['lineup'].filter(checkAntagonism)
    let lineupYesNo = ''
    if (lineup.length > 0) {
      let printedlineup = 'With : '
      lineup.forEach(band => {
        printedlineup = printedlineup + band + ', '
      });
      printedlineup = printedlineup.slice(0, -2)
      lineupYesNo = h('p', { class: 'lineup' }, [printedlineup])
    }

    let j = h('div',
      [h('a', { href: url, class: 'datesList' },
        [h('div', { class: 'details' }, [
          h('p', { class: 'date' }, [date]),
          h('p', { class: 'venue' }, [venuename, h('br'), venuecity, ', ', venuecountry]),
          lineupYesNo
        ]),
        h('div', { class: 'buttons' }, [

        ])
        ])
      ])
    past.unshift(j)
  }
  return past
}

function checkAntagonism(name) {
  return name != 'Antagonism'
}
</script>
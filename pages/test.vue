<script lang="ts" setup>
const lang = ['ENGLISH', 'LANGUAGE', 'FRENCH'] as const
const night = ['OFF', 'NIGHTMARE', 'ON'] as const
const point = ['POINTER', 'CURSOR', 'SHOTGUN'] as const





var nightmare = ref(true)
var language = ref('english')
var shotgun = ref(false)



const toggleLanguage = (input: string) => {

}


const toggleNightmare = (input: boolean) => {
  if (!input) {
    nightmare.value = false
    document.documentElement.setAttribute('data-theme', 'dark')
  }
  else {
    nightmare.value = true
    document.documentElement.setAttribute('data-theme', 'nightmare')
  }
}

const toggleShotgun = (input: boolean) => {

}





</script>

<template>
  <div class="choices">
    <div class="choice" :class="{ on: language === 'french' }">
      <button v-on:click="toggleLanguage('english')">{{ lang[0] }}</button>
      <p>{{ lang[1] }}</p>
      <div class="bar"></div>
      <button v-on:click="toggleLanguage('french')">{{ lang[2] }}</button>
    </div>
    <div class="choice" :class="{ on: nightmare }">
      <button v-on:click="toggleNightmare(false)">{{ night[0] }}</button>
      <p>{{ night[1] }}</p>
      <div class="bar"></div>
      <button v-on:click="toggleNightmare(true)">{{ night[2] }}</button>
    </div>
    <div class="choice" :class="{ on: shotgun }">
      <button v-on:click="toggleShotgun(false)">{{ point[0] }}</button>
      <p>{{ point[1] }}</p>
      <div class="bar"></div>
      <button v-on:click="toggleShotgun(true)">{{ point[2] }}</button>
    </div>
  </div>
</template>

<style>
.choices {
  display: flex;
  flex-direction: column;
  width: 80vw;
  gap: 10px;

  .choice {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    button:hover {
      cursor: pointer;
    }

    button:first-child {
      position: absolute;
      left: 10%;
      transform: translateX(-50%);
    }

    button:last-child {
      position: absolute;
      right: 10%;
      transform: translateX(50%);
    }


    .bar {
      position: absolute;
      box-sizing: border-box;
      left: 50%;
      top: 50%;
      transform:  translate(-100%, -50%);
      width: 40%;
      border: 2px solid red;


    }
  }



  .on {
      .bar {
        transform: translate(0, -50%);


      }
    }

}
</style>
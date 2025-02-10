<template>
    <div>
        <div class="options opener" v-on:click="openOptions">
            <p>OPTIONS</p>
        </div>
        <div class="overlay" :style="{ 'display': optionsMenu }"></div>
        <div class="options menu" :style="{ 'display': optionsMenu }">
            <div class="cross" v-on:click="closeOptions">
                <p>X</p>
            </div>
            <div class="encadre">
                <p>OPTIONS</p>
            </div>
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
            <div class="exit" v-on:click="closeOptions">
                <p>EXIT</p>
            </div>
            <div>
                <p class="credit">
                    Website powered by <span class="color-3 dashed">Ulcer</span><br>
                    © 2025 ANTAGONISM - All rights reserved
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const optionsMenu = ref('none')

const openOptions = () => {
    optionsMenu.value = 'flex'
}

const closeOptions = () => {
    optionsMenu.value = 'none'
}

const lang = ['ENGLISH', 'LANGUAGE', 'FRANÇAIS'] as const
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
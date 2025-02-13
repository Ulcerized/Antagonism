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
                <div class="choice" :class="{ on: language === 'fr' }">
                    <button v-on:click="setLocale('en')">ENGLISH</button>
                    <p class="hexbutton hexbutton--outline--full">{{ $t('options.language') }}</p>
                    <div class="bar"></div>
                    <button v-on:click="setLocale('fr')">FRANÇAIS</button>
                </div>
                <div class="choice" :class="{ on: nightmare }">
                    <button v-on:click="toggleNightmare(false)">{{ night[0] }}</button>
                    <p class="hexbutton hexbutton--outline--full">{{ $t('options.nightmare') }}</p>
                    <div class="bar"></div>
                    <button v-on:click="toggleNightmare(true)">{{ night[2] }}</button>
                </div>
                <div class="choice" :class="{ on: shotgun }">
                    <button v-on:click="toggleShotgun(false)">{{ $t('options.pointer') }}</button>
                    <p class="hexbutton hexbutton--outline--full">{{ $t('options.cursor') }}</p>
                    <div class="bar"></div>
                    <button v-on:click="toggleShotgun(true)">{{ $t('options.shotgun') }}</button>
                </div>
            </div>
            <div class="exit" v-on:click="closeOptions">
                <p>{{ $t('options.exit') }}</p>
            </div>
            <div>
                <p class="credit" v-html="$t('options.credits')">
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { locale, setLocale, t } = useI18n({ useScope: "global" });

const optionsMenu = ref('none')

const openOptions = () => {
    optionsMenu.value = 'flex'
}

const closeOptions = () => {
    optionsMenu.value = 'none'
}

var night = ['OFF', 'NIGHTMARE', 'ON'] as const
var point = ['POINTER', 'CURSOR', 'SHOTGUN'] as const



let test = t('options.option')

var nightmare = ref(true)
var language = ref(locale)
var shotgun = ref(false)


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
<template>
    <div>
        <div class="options opener" v-on:click="openOptions">
            <p>OPTIONS</p>
        </div>
        <div class="overlay" :style="{ 'display': optionsMenu }" v-on:click="closeOptions"></div>
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
                <div class="choice" :class="{ on: theme == 'nightmare' }">
                    <button v-on:click="toggleNightmare(false)">OFF</button>
                    <p class="hexbutton hexbutton--outline--full">{{ $t('options.nightmare') }}</p>
                    <div class="bar"></div>
                    <button v-on:click="toggleNightmare(true)">ON</button>
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
const { locale, setLocale } = useI18n({ useScope: "global" });
const cookie = useCookie('data-theme')

cookie.value = cookie.value || 'dark'

const optionsMenu = ref('none')

const openOptions = () => {
    optionsMenu.value = 'flex'
}

const closeOptions = () => {
    optionsMenu.value = 'none'
}

var theme = ref(cookie.value)
var language = ref(locale)
var shotgun = ref(false)

useHead({
    htmlAttrs: {
        'data-theme': cookie.value
    }
})



const toggleNightmare = (input: boolean) => {
    if (!input) {
        cookie.value = 'dark'
        theme.value = cookie.value
        useHead({
            htmlAttrs: {
                'data-theme': cookie.value
            }
        })
    }
    else {
        cookie.value = 'nightmare'
        theme.value = cookie.value
        useHead({
            htmlAttrs: {
                'data-theme': cookie.value
            }
        })
    }
}

const toggleShotgun = (input: boolean) => {

}

</script>
<script lang="ts" setup>
definePageMeta({
  layout: 'test',
});

useHead({
    title: 'retest'
})

async function test() {
    console.log(await $fetch('/api/test'))
}
</script>

<template>
    <button v-on:click="test">test</button>
</template>



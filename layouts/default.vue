<template>
    <div>
        <MainMenu></MainMenu>
        <Options></Options>
        <label class="switcher">
            <input type="checkbox" v-model="isNightmareMode">
            <span class="slider round"></span>
        </label>
        <slot>

        </slot>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    components: {
    },
    data: () => {
        return {
            isNightmareMode: localStorage.getItem('theme') === 'nightmare'
        }
    },
    watch: {
        isNightmareMode: {
            handler(val) {
                const theme = val ? 'dark' : 'nightmare';
                document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem('theme', theme);
            },
            immediate: true
        }
    }
}
</script>
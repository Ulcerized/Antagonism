<template>
  <div>
    <svg width="100%" height="100%" style="position: absolute;">
      <g text-anchor="middle">
        <text dy="5">
          <textPath :href="'#'+name" startOffset="69%">
            {{ name }}
          </textPath>
        </text>
      </g>
      <path :id="name" d="
        M 80 80
        m 65, 0
        a 65,65 0 1,1 -130,0
        a 65,65 0 1,1  130,0
        " fill="none"></path>
    </svg>
  </div>
</template>

<script lang="ts" setup>
const { name } = defineProps(['name'])
</script>

<style></style>
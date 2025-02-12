<script lang="ts" setup>
const ChosenClass = ref('black-mage')

useHead({
  title: "Contact | Antagonism",
})

</script>

<template>
  <div class="page contact">
    <h1>Vous avez une idée, une suggestion, un problème avec le site ...?</h1>
    <form action="" method="POST" class="forrm">
      <h1 class="title">Contact us !</h1>
      <div class="form-fields input-1">
        <img :src="'/classes/' + ChosenClass + '.gif'" :alt="ChosenClass">
        <label for="class">Class</label>
        <select type="text" id="class" name="class" v-model="ChosenClass">
          <option value="black-mage">Black Mage</option>
          <option value="monk">Monk</option>
          <option value="red-mage">Red Mage</option>
          <option value="thief">Thief</option>
          <option value="warrior">Warrior</option>
          <option value="white-mage">White Mage</option>
          <option value="bob">bob</option>
        </select>
      </div>

      <div class="form-fields input-2">
        <label for="name">Name *</label>
        <input type="text" id="name" name="name" required>
      </div>

      <div class="form-fields input-3">
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="form-fields input-4">
        <label for="object">Object *</label>
        <input id="object" name="object" required>
      </div>

      <div class="form-fields input-5">
        <label for="message">Message *</label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <button type="submit" class=" input-6">Send</button>
    </form>
  </div>
</template>
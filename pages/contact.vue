<script lang="ts" setup>
const ChosenClass = ref('black-mage')

useHead({
  title: "Contact | Antagonism",
})

</script>

<template>
  <div class="page contact">
    <h1>{{ $t('contact.title') }}</h1>
    <form action="" method="POST" class="forrm">
      <h1 class="title">{{ $t('contact.contactus') }}</h1>
      <div class="form-fields input-1">
        <img :src="'/classes/' + ChosenClass + '.gif'" :alt="ChosenClass">
        <label for="class">{{ $t('contact.class') }}</label>
        <select type="text" id="class" name="class" v-model="ChosenClass">
          <option value="black-mage">{{ $t('contact.classes.blackmage') }}</option>
          <option value="monk">{{ $t('contact.classes.monk') }}</option>
          <option value="red-mage">{{ $t('contact.classes.redmage') }}</option>
          <option value="thief">{{ $t('contact.classes.thief') }}</option>
          <option value="warrior">{{ $t('contact.classes.warrior') }}</option>
          <option value="white-mage">{{ $t('contact.classes.whitemage') }}</option>
          <option value="bob">bob</option>
        </select>
      </div>

      <div class="form-fields input-2">
        <label for="name">{{ $t('contact.name') }}</label>
        <input type="text" id="name" name="name" required>
      </div>

      <div class="form-fields input-3">
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="form-fields input-4">
        <label for="object">{{ $t('contact.object') }}</label>
        <input id="object" name="object" required>
      </div>

      <div class="form-fields input-5">
        <label for="message">Message *</label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <button type="submit" class=" input-6">{{ $t('contact.send') }}</button>
    </form>
  </div>
</template>
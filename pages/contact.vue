<script lang="ts" setup>
const CHOSEN_CLASS = ref('black-mage')

useHead({
  title: "Contact | Antagonism",
})

</script>

<template>
  <div class="page" id="contact">
    <h1>Contact</h1>
    <h2>{{ $t('contact.title') }}</h2>
    <form action="" method="POST"> <!-- A remplir -->
      <h2 class="title">{{ $t('contact.contactUs') }}</h2>
      <div class="input-class">
        <img :src="'/classes/' + CHOSEN_CLASS + '.gif'" :alt="CHOSEN_CLASS">
        <label for="class">{{ $t('contact.class') }}</label>
        <select id="class" name="class" v-model="CHOSEN_CLASS">
          <option value="black-mage">{{ $t('contact.classes.blackMage') }}</option>
          <option value="monk">{{ $t('contact.classes.monk') }}</option>
          <option value="red-mage">{{ $t('contact.classes.redMage') }}</option>
          <option value="thief">{{ $t('contact.classes.thief') }}</option>
          <option value="warrior">{{ $t('contact.classes.warrior') }}</option>
          <option value="white-mage">{{ $t('contact.classes.whiteMage') }}</option>
          <option value="bob">bob</option>
        </select>
      </div>

      <div class="input-name">
        <label for="name">{{ $t('contact.name') }}</label>
        <input type="text" id="name" name="name" required>
      </div>

      <div class="input-email">
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="input-subject">
        <label for="subject">{{ $t('contact.subject') }}</label>
        <input id="subject" name="subject" required>
      </div>

      <div class="input-message">
        <label for="message">Message *</label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <button type="submit" class="input-send">{{ $t('contact.send') }}</button>
    </form>
  </div>
</template>
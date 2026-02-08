<script lang="ts" setup>

const CHOSEN_CLASS = ref('black-mage')
const name = ref('')
const email = ref('')
const password = ref('')
const subject = ref('')
const message = ref('')

interface reponse {
  sent: boolean,
  message: string,
}

const sentOrNot = ref({status : 0, message: ''})

async function sendEmail() {
  try {
    const resp: reponse = await $fetch('/api/send-email', {
      method: "POST",
      body: { 
        chosenClass: CHOSEN_CLASS.value,
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
        password: password.value},
    })
    sentOrNot.value = {status : 1, message : resp.message}
  } catch (error) {
    console.log(error)
  }
  reset()
}

const reset = () => {
  CHOSEN_CLASS.value = 'black-mage'
  name.value = ''
  email.value = ''
  subject.value = ''
  message.value = ''
  password.value = ''
}

</script>

<template>
  <div :class="{ hidden : sentOrNot.status === 0, shown : sentOrNot.status !== 0 }">
    {{ sentOrNot.message }}
  </div>

  <div>
    <form style='display: flex; gap: 1rem; flex-direction: column;' v-on:submit.prevent="sendEmail"> <!-- A remplir -->
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
        <input type="text" id="name" name="name" v-model="name" required>
      </div>

      <div class="input-email">
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" v-model="email" required>
      </div>

      <div class="input-password">
        <label for="password">Password *</label>
        <input type="password" id="password" name="password" v-model="password">
      </div>

      <div class="input-subject">
        <label for="subject">{{ $t('contact.subject') }}</label>
        <input id="subject" name="subject" v-model="subject" required>
      </div>

      <div class="input-message">
        <label for="message">Message *</label>
        <textarea id="message" name="message" v-model="message" required></textarea>
      </div>

      <button type="submit" class="input-send">{{ $t('contact.send') }}</button>
    </form>
  </div>
</template>

<style>

.shown {
  display : block
}

</style>

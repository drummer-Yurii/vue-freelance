<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Your Email</label>
      <input type="text" id="email" v-model.trim="email" />
    </div>
    <div>
      <label for="message">Message</label>
      <textarea id="message" rows="5" v-model.trim="message"></textarea>
    </div>
    <div class="actions">
      <BaseButton>Send Message</BaseButton>
    </div>
    <p class="errors" v-if="!formIsValid">Please enter a valid email and non-empty message</p>
  </form>
</template>

<script>
import BaseButton from '../components/ui/BaseButton';
export default {
  components: { BaseButton },
  name: 'ContactDev',
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (this.email === '' || !this.email.includes('@') || this.message === '') {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch('requestModule/contactDev', {
        email: this.email,
        message: this.message,
        developId: this.$route.params.id,
      });
      this.$router.replace('/devs');
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}
</style>

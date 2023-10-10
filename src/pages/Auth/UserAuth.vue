<template>
  <div>
    <BaseDialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </BaseDialog>
    <BaseSpinner v-if="isLoading"></BaseSpinner>
    <BaseCard>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid">Please enter a valid email and password</p>
        <BaseButton>{{ submitButtonCaption }}</BaseButton>
        <BaseButton type="button" mode="flat" @click="switchAuthMode">{{
          switchModeButtonCaption
        }}</BaseButton>
      </form>
    </BaseCard>
  </div>
</template>

<script>
import BaseSpinner from '../components/ui/BaseSpinner';
import BaseDialog from '../components/ui/BaseDialog';
import BaseButton from '../components/ui/BaseButton';
import BaseCard from '../components/ui/BaseCard';
export default {
  components: {
    BaseSpinner,
    BaseDialog,
    BaseButton,
    BaseCard,
  },
  name: 'UserAuth',
  data() {
    return {
      email: '',
      password: '',
      formIsValid: false,
      mode: 'Login',
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      const actionPayload = {
        email: this.email,
        password: this.password,
      };
      try {
        if (this.mode === 'Login') {
          await this.$store.dispatch('login', actionPayload);
        } else {
          await this.$store.dispatch('signup', actionPayload);
        }
      } catch (error) {
        this.error = error.message || 'Failed to authenticate, pls try later';
      }
      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode === 'Login') {
        this.mode = 'Signup';
      } else {
        this.mode = 'Login';
      }
    },
    handleError() {
      this.error = null;
    },
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'Login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'Login') {
        return 'Signup instead';
      } else {
        return 'Login instead';
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
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

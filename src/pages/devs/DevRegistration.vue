<template>
  <BaseCard>
    <h2>Register as Developer Now!</h2>
    <RegisterForm @save-data="saveData"></RegisterForm>
  </BaseCard>
</template>

<script>
import BaseCard from '../components/ui/BaseCard';
import RegisterForm from './RegisterForm';
export default {
  components: {
    BaseCard,
    RegisterForm,
  },
  name: 'DevRegistration',
  methods: {
    saveData(data) {
      this.$store.dispatch('devModule/regDev', data);
    },
  },
};
</script>

<style scoped></style>

<template>
  <BaseCard>
    <section>
      <h2>Page not found!</h2>
      <p>This page could not be found! Maybe check out all our <router-link to="/devs">developers</router-link></p>
    </section>
  </BaseCard>
</template>

<script>
import BaseCard from './components/ui/BaseCard'
export default {
  components: { BaseCard },
  name: 'NotFound',
};
</script>

<style scoped></style>

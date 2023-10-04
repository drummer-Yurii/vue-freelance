<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as a Developer</router-link>
    </div>
    <ul v-if="hasDev">
      <li v-for="dev in filteredList" :key="dev.id">
        {{ dev.firstName }}
      </li>
    </ul>
    <p v-else>No developers found</p>
  </section>
</template>

<script>
export default {
  name: 'DevList',
  computed: {
    filteredList() {
      return this.$store.getters['devModule/devs'];
    },
    hasDev() {
      return this.$store.getters['devModule/hasDev'];
    }
  },
};
</script>

<style scoped></style>

<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as a Developer</router-link>
    </div>
    <ul v-if="hasDev">
      <DevItem
        v-for="dev in filteredList"
        :key="dev.id"
        id="dev.id"
        :first-name="dev.firstName"
        :last-name="dev.lastName"
        :rate="dev.hourlyRate"
        :areas="dev.areas"
      >
      </DevItem>
    </ul>
    <p v-else>No developers found</p>
  </section>
</template>

<script>
import DevItem from '../components/DevItem';
export default {
  components: { DevItem },
  name: 'DevList',
  computed: {
    filteredList() {
      return this.$store.getters['devModule/devs'];
    },
    hasDev() {
      return this.$store.getters['devModule/hasDev'];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

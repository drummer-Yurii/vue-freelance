<template>
  <section>FILTER</section>
  <section>
    <BaseCard>
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
    </BaseCard>
  </section>
</template>

<script>
import BaseCard from '../components/ui/BaseCard';
import DevItem from '../components/DevItem';
export default {
  components: {
    BaseCard,
    DevItem,
  },
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

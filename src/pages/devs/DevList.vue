<template>
  <section>FILTER</section>
  <section>
    <BaseCard>
      <div class="controls">
        <BaseButton mode="outline">Refresh</BaseButton>
        <BaseButton link to="/register">Register as a Developer</BaseButton> 
      </div>
      <ul v-if="hasDev">
        <DevItem
          v-for="dev in filteredList"
          :key="dev.id"
          :id="dev.id"
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
import BaseButton from '../components/ui/BaseButton.vue';
export default {
  components: {
    BaseCard,
    DevItem,
    BaseButton,
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

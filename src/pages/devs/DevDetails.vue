<template>
  <section>
    <BaseCard>
      <h2>{{ fullName }}</h2>
      <h2>${{ rate }}/hour</h2>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <header>
        <h2>Interested? Reach out now!</h2>
        <BaseButton link :to="contactLink">Contact</BaseButton>
      </header>
      <router-view></router-view>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <BaseBadge v-for="area in areas" :key="area" :type="area" :title="area"></BaseBadge>
      <p>{{ description }}</p>
    </BaseCard>
  </section>
</template>

<script>
import BaseBadge from '../components/ui/BaseBadge';
import BaseButton from '../components/ui/BaseButton';
import BaseCard from '../components/ui/BaseCard';
export default {
  components: {
    BaseBadge,
    BaseButton,
    BaseCard,
  },
  name: 'DevDetails',
  props: ['id'],
  data() {
    return {
      selectedDev: null,
    };
  },
  created() {
    this.selectedDev = this.$store.getters['devModule/devs'].find((dev) => dev.id === this.id);
  },
  computed: {
    fullName() {
      return this.selectedDev.firstName + ' ' + this.selectedDev.lastName;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    areas() {
      return this.selectedDev.areas;
    },
    rate() {
      return this.selectedDev.hourlyRate;
    },
    description() {
      return this.selectedDev.description;
    },
  },
};
</script>

<style scoped></style>

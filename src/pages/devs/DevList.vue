<template>
  <div>
    <BaseDialog :show="!!error" title="An error has occurred" @close="handleError">
      {{ error }}
    </BaseDialog>
    <section>
      <DevFilter @change-filter="setFilters"></DevFilter>
    </section>
    <section>
      <BaseCard>
        <div class="controls">
          <BaseButton mode="outline" @click="loadDevs(true)">Refresh</BaseButton>
          <BaseButton link to="auth" v-if="!isLoggedIn">Login</BaseButton>
          <BaseButton link to="/register" v-if="!isDev && !isLoading && isLoggedIn">Register as a Developer</BaseButton>
        </div>
        <div v-if="isLoading">
          <BaseSpinner></BaseSpinner>
        </div>
        <ul v-else-if="hasDev">
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
  </div>
</template>

<script>
import BaseDialog from '../components/ui/BaseDialog';
import BaseSpinner from '../components/ui/BaseSpinner';
import DevFilter from './DevFilter';
import BaseCard from '../components/ui/BaseCard';
import DevItem from '../components/DevItem';
import BaseButton from '../components/ui/BaseButton.vue';
export default {
  components: {
    BaseDialog,
    BaseSpinner,
    DevFilter,
    BaseCard,
    DevItem,
    BaseButton,
  },
  name: 'DevList',
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        fullstack: true,
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    filteredList() {
      const devs = this.$store.getters['devModule/devs'];
      return devs.filter((dev) => {
        if (this.activeFilters.frontend && dev.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && dev.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.fullstack && dev.areas.includes('fullstack')) {
          return true;
        }
        return false;
      });
    },
    hasDev() {
      return !this.isLoading && this.$store.getters['devModule/hasDev'];
    },
    isDev() {
      return this.$store.getters['devModule/isDevs'];
    },
  },
  created() {
    this.loadDevs();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadDevs(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('devModule/loadDevs', { forceRefresh: refresh });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
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

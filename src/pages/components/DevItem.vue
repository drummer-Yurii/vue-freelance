<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>$ {{ rate }}/hour</h4>
  </li>
  <span v-for="area in areas" :key="area.id">{{ area }}</span>
  <div class="actions">
    <BaseButton mode="outline" link :to="devContactLink">Contact</BaseButton>
    <BaseButton link :to="devDetailsLink">ViewDetails</BaseButton>
  </div>
</template>

<script>
import BaseButton from './ui/BaseButton'
export default {
  components: { BaseButton },
  name: 'DevItem',
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    devContactLink() {
      return '/devs/' + this.id + '/contact';
    },
    devDetailsLink() {
      return '/devs/' + this.id;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>

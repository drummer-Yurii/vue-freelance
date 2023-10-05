<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input v-model.trim="firstName" type="text" id="firstname" />
    </div>
    <div class="form-control">
      <label for="lastname">Lastname</label>
      <input v-model.trim="lastName" type="text" id="lastname" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea v-model.trim="description" id="description" rows="6"></textarea>
    </div>
    <div class="form-control">
      <label for="rate">HourlyRate</label>
      <input v-model.number="rate" type="number" id="rate" />
    </div>
    <div class="form-control">
      <h3>Areas of skills</h3>
    </div>
    <div>
      <input v-model="areas" type="checkbox" id="frontend" value="frontend" />
      <label for="frontend">Frontend Developmend</label>
    </div>
    <div>
      <input v-model="areas" type="checkbox" id="backend" value="backend" />
      <label for="backend">Backend Developmend</label>
    </div>
    <div>
      <input v-model="areas" type="checkbox" id="fullstack" value="fullstack" />
      <label for="fullstack">Fullstack Developmend</label>
    </div>
  </form>
  <BaseButton>Register</BaseButton>
</template>

<script>
import BaseButton from '../components/ui/BaseButton';
export default {
  components: { BaseButton },
  name: 'RegisterForm',
  emits: ['save-data'],
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: '',
      areas: [],
    };
  },
  methods: {
    submitForm() {
      const formData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        rate: this.rate,
        areas: this.areas,
      };
      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d;
}
</style>

<template>
  <div>
    <h3>Add Event <input type="checkbox" v-model="showForm" /></h3>
    <form class="form" @submit.prevent="onSubmit" v-if="showForm">
      <label
        >Title: <input v-model="event.title" placeholder="Enter title"
      /></label>
      <label
        >Description:
        <input v-model="event.description" placeholder="Enter description"
      /></label>
      <label
        >Date:
        <input v-model="event.date" placeholder="Enter description" type="date"
      /></label>
      <label
        >Location: <input v-model="event.location" placeholder="Enter location"
      /></label>
      <div>
        <button type="submit" class="button">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { eventRef } from "../firebaseApp";
import { push } from "firebase/database";

export default {
  name: "AddEvent",
  data() {
    return {
      event: {
        title: "",
        description: "",
        date: "",
        location: "",
        email: "",
      },
      showForm: false,
    };
  },
  methods: {
    onSubmit() {
      this.event.email = this.$store.state.user.email;
      push(eventRef, this.event).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 20px;
}

.button {
  background: blue;
  color: white;
  border: none;
  outline: none;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
}
</style>

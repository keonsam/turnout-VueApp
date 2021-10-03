<template>
  <div>
    <h2>Sign Up</h2>
    <form class="form" @submit.prevent="onSubmit">
      <label
        >Email: <input v-model="email" placeholder="Enter email address"
      /></label>
      <label
        >Password:
        <input v-model="password" placeholder="Enter password" type="password"
      /></label>
      <div>
        <p v-if="error.message" class="error">{{ error.message }}</p>
        <button type="submit" class="button">Sign Up</button>
      </div>
    </form>
    <router-link to="/signin">Already a user? Sign In</router-link>
  </div>
</template>

<script>
import { firebaseApp } from "../firebaseApp";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      error: {
        message: "",
      },
    };
  },
  methods: {
    onSubmit() {
      const auth = getAuth(firebaseApp);
      createUserWithEmailAndPassword(auth, this.email, this.password).catch(
        (error) => (this.error = error)
      );
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

.error {
  background: lightcoral;
  border: 2px solid red;
  border-radius: 4px;
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

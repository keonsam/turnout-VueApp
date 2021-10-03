<template>
  <div>
    <header class="header">
      <h2 class="heading">Events Dashboard</h2>
      <button class="button signout" @click="onSignOut">Sign Out</button>
    </header>
    <AddEvent />
    <ul class="list">
      <EventItem
        v-for="(event_item, index) in $store.state.events"
        :event="event_item"
        :key="index"
      />
    </ul>
  </div>
</template>

<script>
import { firebaseApp } from "../firebaseApp";
import { getAuth, signOut } from "firebase/auth";
import AddEvent from "../components/AddEvent.vue";
import { eventRef } from "../firebaseApp";
import { onValue } from "firebase/database";
import EventItem from "../components/EventItem.vue";

export default {
  name: "Dashboard",
  components: {
    AddEvent,
    EventItem,
  },
  mounted() {
    onValue(eventRef, (snapshot) => {
      let events = [];
      snapshot.forEach((snap) => {
        events.push(snap.val());
      });
      this.$store.dispatch("setEvents", events);
    });
  },
  methods: {
    onSignOut() {
      const auth = getAuth(firebaseApp);
      this.$store.dispatch("signOut");
      signOut(auth);
    },
  },
};
</script>

<style scoped>
.button {
  background: blue;
  color: white;
  border: none;
  outline: none;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
}

.header {
  display: flex;
}

.heading {
  font-size: 18px;
  margin: 0 auto;
}

.signout {
  background: lightcoral;
  font-size: 12px;
  padding: 10px;
  color: white;
  margin-left: auto;
}

.list {
  margin: 0;
  padding: 10px;
  list-style: none;
  display: flex;
  gap: 15px;
}
</style>

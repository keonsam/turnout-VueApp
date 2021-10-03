<template>
  <li class="item">
    <h4>{{ event.title }}</h4>
    <p>{{ event.description }}</p>
    <ul>
      <li>Date: {{ event.date }}</li>
      <li>Location: {{ event.location }}</li>
      <li>User: {{ event.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "EventItem",
  props: {
    event: [Object],
  },
};
</script>

<style scoped>
.item {
  border: 1px solid black;
  height: 350px;
  width: 350px;
  padding: 15px;
}
</style>

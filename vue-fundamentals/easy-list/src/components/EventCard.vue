<template>
  <div class="event-card">
    <!-- Display event data -->
    <h4>{{event.title}}</h4>
    <p>Category: {{event.category}} </p>
    <p>Mission Brief: {{event.description}} </p>
    <p>Location: {{event.location}} </p>
    <span>@ {{event.time}} on {{event.date}}</span>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .event-card {
        padding: 20px;
        width: 250px;
        cursor: pointer;
        border: 1px solid #39495c;
        margin-bottom: 18px;
    }
    .event-card:hover {
        transform: scale(1.01);
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
    }
</style>

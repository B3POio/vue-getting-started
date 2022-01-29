<template>
  <div class="events">
    <img alt="Vue logo" src="../assets/logo.png" />
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "Home",
  components: {
    EventCard,
  },
  data(){
      return {
          events: [
          {
              id: 5928101,
              category: 'Mingle',
              title: 'Dinner Soiree',
              description: 'Make connections, gather intelligence.',
              location: 'Bezzleton Museum',
              date: 'January 28, 2022',
              time: '12:00',
              petsAllowed: true,
              organizer: 'Kat Lundeen'
          },
          {
              id: 5928102,
              category: 'Target',
              title: 'Analyze Intel and Locate Target',
              description: 'Find your new target at this event.',
              location: 'New City Opening',
              date: 'January 29, 2022',
              time: '1:00',
              petsAllowed: true,
              organizer: 'General Hoffstat'
          },
          {
              id: 5928103,
              category: 'Intel',
              title: 'Relay target intelligence',
              description: 'Relay target location and intelligence, stand by for orders.',
              location: 'Downtown',
              date: 'January 31, 2022',
              time: '19:00',
              petsAllowed: true,
              organizer: 'Gentlemens Club Liason'
          },
          {
              id: 5928104,
              category: 'Execute',
              title: 'Take out target',
              description: 'Carry on, 007',
              location: 'S. Africa',
              date: 'February 01, 2022',
              time: '4:00',
              petsAllowed: true,
              organizer: 'James Bond'
          },
          ]
      }
  }
};
</script>

<style scoped>
  .events {
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align:left;
  }
</style>
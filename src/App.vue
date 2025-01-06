<template>
  <div id="app">
    <!-- Contenu du composant Home -->
    <router-view />
  </div>
</template>

<script>
import Home from './views/Home.vue'; // Import direct du composant Home

export default {
  name: 'App',
  components: {
    Home,
  },
};
</script> 

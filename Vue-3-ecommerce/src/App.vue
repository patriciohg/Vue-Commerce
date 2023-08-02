<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar  from './components/NavBar.vue';

export default {
    data() {
        return {
            details: []
        };
    },
    components: { NavBar }
}
</script>

<template>
  <v-app>
    <NavBar />    


    <v-main >
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
  
</template>

<style scoped>

</style>

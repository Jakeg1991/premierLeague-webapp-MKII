<template>
  <v-app>
    <div class="body">
      <router-view />
      <navBar />
    </div>
  </v-app>
</template>

<script>
import navBar from '@/components/navBar.vue';


export default {

  name: 'App',
  components: {
    navBar
  },
  data() {
    return {
      //
    }
  },
  methods: {},
  created() {
  }
}
</script>

<style>

</style>


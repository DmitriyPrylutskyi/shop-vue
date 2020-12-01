<template>
  <v-app>
    <Navbar />
    <v-snackbar
      multi-line: true
      :top = "true"
      :timeout = 0
      color="error"
      @input="closeError"
      :value="true"
      v-if="error"
    >
      {{ error }}
      <v-btn
          dark
          text
          @click="closeError"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: 'App',
  components: {
    Navbar
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError')
    }
  }
};
</script>

<template>
  <v-row justify="center">
<p>{{this.$store.state.selectedQ.answer[this.$store.state.i].name}}</p>
    <v-img 
    max-height="250"
    contain
    :src="this.$store.state.selectedQ.answer[this.$store.state.i].src">
    </v-img>
  </v-row>
</template>
  <script>
export default {
  name: "v-state",

  components: {
    //
  },
  data: function () {
    return {
      i: 0,
    };
  },
  mounted() {
    
  },
};
</script>
  <style>
</style>
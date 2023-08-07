  <template>
  <v-alert v-if="this.result.show" :color="this.result.color">
    <v-row justify="end" class="mb-1">
      <v-icon color="white" @click="result.show = false">mdi-close</v-icon>
    </v-row>

    <p class="white--text">
      <v-icon color="white">{{ this.result.icons }}</v-icon>
      {{ this.result.text }}
    </p>
  </v-alert>
</template>
<script>
export default {
  props: ["result"],
  name: "VResultAlert",
  components: {
    //
  },
  data: function () {
    return {
    }
  },
  mounted(){
    console.log('vResultAlert')
  }
};
</script>
<style>

.v-alert{
    position: absolute;
    right: 0px;
    z-index: 5;
}</style>
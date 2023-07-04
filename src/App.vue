<template>
  <v-app>
    <VResultAlert :result="this.result"></VResultAlert>
    <v-row justify="space-around">
      <v-col>
        <h3>Выберите тему</h3>
        <v-sheet>
          <v-chip-group active-class="deep-purple darken-1 white--text">
            <v-chip
              class="deep-purple lighten-3"
              v-for="item in this.$store.state.questions"
              :key="item.name"
              @click="selectTheme(item.onclick, $event)"
            >
              {{ item.name }}
            </v-chip>
          </v-chip-group>
        </v-sheet>
      </v-col>
    </v-row>
    <vAnimals3d
      v-if="this.$store.state.selectedTheme == 'animals'"
      @onAlertByResult="onAlertByResult"
    ></vAnimals3d>
  </v-app>
</template>

<script>
import VResultAlert from './components/v-result-alert'
import vResultAlert from "./components/v-result-alert.vue";
import vAnimals3d from "./components/v-animals3d.vue";
export default {
  name: "App",

  components: {
    VResultAlert,
    vAnimals3d,
    vResultAlert,
    //
  },

  data: () => {
    return {
      result: {
        show:false
      },
    };
  },
  methods: {
    selectTheme(theme, e) {
      this.$store.commit("SET_SELECTED_THEME", theme);
      this.$store.commit("SET_SELECT_Q", theme);
    },
    onAlertByResult(data) {
      this.result=data.result;
      console.log('this.result',this.result)
    },
  },
};
</script>
<style>
#app {
  padding: 3rem;
}

.v-application--wrap {
  min-height: auto;
}
</style>
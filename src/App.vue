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
    <VWrapperQuestion v-if="this.$store.state.selectedQ.answer !=undefined" @onAlertByResult="onAlertByResult"></VWrapperQuestion>
    
  </v-app>
</template>

<script>
import VResultAlert from './components/v-result-alert'
import VWrapperQuestion from './components/v-wrapperQuestion'
import vState from './components/v-state.vue';
import vAnimals3d from "./components/v-animals3d.vue";
export default {
  name: "App",

  components: {
    VResultAlert,
    VWrapperQuestion,
    vAnimals3d,
    vState,
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
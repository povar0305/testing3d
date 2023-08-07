<template>
  <v-app>
    <VResultAlert :result="this.result"></VResultAlert>
    <v-row justify="space-between">
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
      <div class="settings">
        <v-btn
          elevation="0"
          fab
          @click="showSettings = !showSettings"
        >
          <v-icon>mdi-cog</v-icon></v-btn
        >
        <v-col
          class="settings-inner rounded-lg"
          v-bind:class="{ ' grey lighten-4': showSettings }"
          v-show="showSettings"
          cols="auto"
        >
          <v-row
            class="align-center"
            v-for="setting in this.$store.state.settings"
            :key="setting.name"
          >
            <v-switch
              color="primary"
              value
              :input-value="setting.status"
              :label="setting.text"
              class="mr-1"
              @change="setting.status = !setting.status"
            ></v-switch>
            <v-tooltip bottom v-if="setting.desc != ''">
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                  <div class="rounded-circle grey lighten-2 helper">
                    <v-icon small color="grey darken-1"> mdi-help </v-icon>
                  </div>
                </span>
              </template>
              <span>{{ setting.desc }}</span>
            </v-tooltip>
          </v-row>
        </v-col>
      </div>
    </v-row>

    <VWrapperQuestion
      v-if="this.$store.state.selectedQ.answer != undefined"
      @onAlertByResult="onAlertByResult"
    ></VWrapperQuestion>
  </v-app>
</template>

<script>
import VResultAlert from "./components/v-result-alert";
import VWrapperQuestion from "./components/v-wrapperQuestion";
export default {
  name: "App",

  components: {
    VResultAlert,
    VWrapperQuestion,
    //
  },

  data: () => {
    return {
      result: {
        show: false,
      },
      showSettings: false,
    };
  },
  methods: {
    selectTheme(theme, e) {
      console.log('theme, e',theme, e)
      this.$store.commit("SET_SELECTED_THEME", theme);
      this.$store.commit("SET_SELECT_Q", theme);
    },

    onAlertByResult(data) {
      this.result = data.result;
    },
  },
};
</script>
<style lang="scss">
#app {
  padding: 3rem;
}

.v-application--wrap {
  min-height: auto;
}

.helper {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.settings {
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: end;
  z-index: 3;
  & button{
    z-index: 4;
  }
  &-inner {
    position: absolute;
    z-index: 2;
    padding-top: 50px;
    padding: 1.5rem;
  }
}
</style>
<template>
  <v-row>
    <v-col>
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          {{ this.$store.state.rightAnswer }}
          <v-list-item-content>
            <div class="text-overline mb-4">
              Вопрос {{ this.$store.state.i + 1 }} из
              {{ this.$store.state.selectedQ.answer.length }}
            </div>
            <v-list-item-title class="text-h5 mb-1">
              {{ this.$store.state.selectedQ.question }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{
                this.$store.state.selectedQ.questionTwoTitle
              }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <vScene3D
          v-if="this.$store.state.selectedTheme == 'animals'"
          :count="this.$store.state.i"
        ></vScene3D>
        <vState v-if="this.$store.state.selectedTheme == 'state'"></vState>
        <v-card-actions>
          <v-row justify="center">
            <v-col>
              <v-sheet>
                <div class="pa-4">
                  <v-chip-group
                    active-class="blue darken-1 white--text"
                    column
                    :class="this.resultClass"
                    class="align-center"
                    v-model="resultAnswer"
                  >
                    <v-chip
                      class="blue lighten-4"
                      v-for="answer in this.$store.getters.VARIANTS_ANSWER"
                      :key="answer.name"
                      @input="selectAnswer()"
                      :class="{
                        rightAnswerWithError:
                          answer.name ==
                            $store.state.selectedQ.answer[$store.state.i]
                              .name &&
                          result != undefined &&
                          !result,
                      }"
                      :value="answer.name"
                    >
                      {{ answer.name }}
                    </v-chip>
                  </v-chip-group>
                </div>
              </v-sheet>
            </v-col>
          </v-row>
        </v-card-actions>
        <div class="text-center mb-4">
          <v-btn
            rounded
            color="deep-purple lighten-2"
            dark
            @click="checkAnswer()"
          >
            Проверить
          </v-btn>
          <v-btn
            class="mx-2"
            rounded
            color="deep-purple lighten-2"
            dark
            v-if="showNext"
            @click="nextQuestion()"
          >
            Следующий вопрос
          </v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>  
  <script>
import $ from "jquery";
import vState from "./v-state.vue";
import vScene3D from "./v-scene3D.vue";
export default {
  name: "v-wrapperQuestion",

  components: {
    vScene3D,
    vState,
    //
  },
  data: function () {
    return {
      answers: [],
      i: 0,
      resultAnswer: "",
      countQ: 0,
      result: Boolean,
      resultClass: "",
      alerts: {
        show: false,
        text: "",
        icons: "",
        color: "",
      },
      showNext: false,
      rightAnswer: 0,
    };
  },
  mounted() {
    //
  },
  methods: {
    selectAnswer() {
      this.resultClass = " ";
      this.alerts.show = false;
      this.pushInfoAlert();
    },
    checkAnswer() {
      console.log(this.$store.state.settings);
      for (let i in this.$store.state.settings) {
        if (this.$store.state.settings[i].name == "controlTest") {
          if (this.$store.state.settings[i].status) {
            console.log("не считаем");
            if (
              this.resultAnswer ==
              this.$store.state.selectedQ.answer[this.$store.state.i].name
            ) {
              this.$store.state.rightAnswer++;
            }
            this.nextQuestion();
          } else {
            if (
              this.resultAnswer ==
              this.$store.state.selectedQ.answer[this.$store.state.i].name
            ) {
              if (
                this.$store.state.i + 1 ==
                this.$store.state.selectedQ.answer.length
              ) {
                this.alerts.text =
                  "Поздравляю, ты ответил на все вопросы правильно";
                this.alerts.color = "deep-purple darken-1";
                this.alerts.icons = "mdi-trophy-award";
              } else {
                this.result = true;
                this.resultClass = "rightAnswer";
                this.alerts.text = "Поздравляю, ты правильно ответил на вопрос";
                this.alerts.icons = "mdi-thumb-up";
                this.alerts.color = "green darken-1";
                this.showNext = true;
              }
            } else {
              this.result = false;
              this.resultClass = "errorAnswer";
              this.alerts.text = "Увы, ты ошибся. Попробуй еще раз!";
              this.alerts.icons = "mdi-thumb-down";
              this.alerts.color = "red darken-1";
              this.showNext = false;
            }
            this.alerts.show = true;
            this.pushInfoAlert();
          }
        }
      }
    },
    nextQuestion() {
      if (
        this.$store.state.i + 1 !=
        this.$store.state.selectedQ.answer.length
      ) {
        this.showNext = true;
        this.$store.state.i = this.$store.state.i + 1;
        this.showNext = false;
        this.alerts.show = false;
        this.resultClass = "";
        this.resultAnswer = "";
      } else {
        this.alerts.show = true;
      }
      this.pushInfoAlert();
    },
    pushInfoAlert() {
      this.$emit("onAlertByResult", {
        result: this.alerts,
      });
    },
  },
};
</script>
  <style>
.errorAnswer span.v-chip.v-chip--active {
  background-color: #e53935 !important;
}

.rightAnswer span.v-chip.v-chip--active,
.rightAnswerWithError.v-chip.theme--light.v-chip:not(.v-chip--active) {
  background-color: #43a047 !important;
}
</style>
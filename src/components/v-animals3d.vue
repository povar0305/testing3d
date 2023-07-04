<template>
  <v-row>
    <v-col>
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              Вопрос {{ this.i + 1 }} из
              {{ this.$store.state.selectedQ.answer.length }}
            </div>
            <v-list-item-title class="text-h5 mb-1">
              Выбери животное
            </v-list-item-title>
            <v-list-item-subtitle
              >Внимательно рассмотри животное и выбери внизу правильный
              ответ</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <div class="scene"></div>
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
                      v-for="answer in this.answers"
                      :key="answer"
                      @input="selectAnswer()"
                      :value="answer"
                    >
                      {{ answer }}
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
import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
export default {
  name: "v-animals3d",

  components: {
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
      scene: null,
      camera: null,
      controls: null,
      renderer: null,
      material: null,
      loaderOBJ: null,
      model: null,
    };
  },
  mounted() {
    this.initScene();
  },
  methods: {
    selectAnswer() {
      this.resultClass = " ";
      this.alerts.show = false;
      this.pushInfoAlert();
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
    checkAnswer() {
      if (
        this.resultAnswer == this.$store.state.selectedQ.answer[this.i].name
      ) {
        this.result = true;
        this.resultClass = "rightAnswer";
        this.alerts.text = "Поздравляю, ты правильно ответил на вопрос";
        this.alerts.icons = "mdi-thumb-up";
        this.alerts.color = "green darken-1";
        this.showNext = true;
      } else {
        this.result = false;
        this.resultClass = "errorAnswer";
        this.alerts.text = "Увы, ты ошибся. Попробуй еще раз!";
        this.alerts.icons = "mdi-thumb-down";
        this.alerts.color = "red darken-1";
        this.showNext = false;
      };
      this.alerts.show = true;
      this.pushInfoAlert();
    },
    nextQuestion() {
      this.showNext = true;
      this.i = this.i + 1;
      this.loadModels();
      this.showNext = false;
      this.alerts.show = false;
      this.resultClass = "";
      this.pushInfoAlert();
      this.resultAnswer='';

    },
    pushInfoAlert(){
      this.$emit("onAlertByResult", {
        result: this.alerts,
      });
    },
    initScene() {
      this.renderer = new THREE.WebGLRenderer({ alpha: true });
      this.renderer.setClearColor(0x000000, 0);
      this.renderer.setSize($(".scene").width(), $(".scene").height());
      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(
        75,
        $(".scene").width() / $(".scene").height(),
        1,
        100
      );
      this.camera.position.set(10, 5, 0);

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.update();

      for (let item of this.$store.state.selectedQ.answer) {
        this.answers.push(item.name);
      }
      // const axesHelper = new THREE.AxesHelper(5);
      // this.scene.add(axesHelper);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight.position.set(10, 10, 0);

      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight2.position.set(-10, 10, 0);

      const directionalLight3 = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight3.position.set(0, 10, -10);
      this.scene.add(directionalLight, directionalLight2, directionalLight3);
      this.loadModels();
    },
    loadModels() {
      if (this.scene.getObjectByName("model") != undefined) {
        this.scene.remove(this.scene.getObjectByName("model"));
      }
      this.loaderOBJ = new OBJLoader();
      this.loaderOBJ.load(
        this.$store.state.selectedQ.answer[this.i].src,
        (object) => {
          object.scale.set(5, 5, 5);
          object.rotation.y = Math.PI / 2;
          object.position.set(0, -5, 0);
          object.name = "model";
          object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
              child.material = new THREE.MeshStandardMaterial({
                color: "gray",
              });
            }
          });
          this.model = object;
          this.scene.add(this.model);
        },
        function (xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        function (error) {
          console.log("An error happened", error);
        }
      );
      this.animate();
      $(".scene").html(this.renderer.domElement);
    },
  },
};
</script>
<style>
.scene {
  min-height: 350px;
  width: 100%;
}

.errorAnswer span.v-chip.v-chip--active {
  background-color: #e53935 !important;
}

.rightAnswer span.v-chip.v-chip--active {
  background-color: #43a047 !important;
}
</style>
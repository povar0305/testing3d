<template>
  <v-row>
    <v-col>
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">Как хорошо ты знаешь животных</div>
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
      resultAnswer: null,
      result: null,
      resultClass: null,
    };
  },
  mounted() {
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    document.body.appendChild(renderer.domElement);
    renderer.setClearColor(0x000000, 0);
    renderer.setSize($(".scene").width(), $(".scene").height());

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      $(".scene").width() / $(".scene").height(),
      1,
      100
    );
    camera.position.set(10, 5, 0);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    for (let item of this.$store.state.selectedQ.answer) {
      this.answers.push(item.name);
    }

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
    const material = new THREE.MeshStandardMaterial({ color: "gray" });
    const loader = new OBJLoader();
    loader.load(
      this.$store.state.selectedQ.answer[this.i].src,
      (object) => {
        object.scale.set(5, 5, 5);
        object.rotation.y = Math.PI / 2;
        object.position.set(0, -5, 0);

        object.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        scene.add(object);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.log("An error happened", error);
      }
    );

    var light = new THREE.AmbientLight("white", 1); // soft white light (мягкий белый свет)
    scene.add(light);

    $(".scene").html(renderer.domElement);

    animate();
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
  },
  methods: {
    selectAnswer() {
      this.resultClass = " ";
      console.log('this.resultClass',this.resultClass)
    },
    checkAnswer() {
      console.log(
        this.resultAnswer,
        this.$store.state.selectedQ.answer[this.i].name
      );
      if (
        this.resultAnswer == this.$store.state.selectedQ.answer[this.i].name
      ) {
        console.log("yes");
        this.result = true;
        this.resultClass = "rightAnswer";
      } else {
        console.log("no");
        this.result = false;
        this.resultClass = "errorAnswer";
      }
      console.log(this.result);
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
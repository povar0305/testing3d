<template>
    <div class="row">
        <div :title=this.count class="scene"></div>
    </div>
</template>
<script>
import $ from "jquery";
import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export default {
  name: "v-scene3D",
  props:['count'],
  components: {
    //
  },
  data: function () {
    return {
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
    console.log("looooading",this.count)
  },
  updated() {
    this.initScene();
    console.log('updated')},
  methods: {
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },

    initScene() {
        console.log('init')
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
      console.log(this.count);
      this.loaderOBJ.load(
        this.$store.state.selectedQ.answer[this.count].src,
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
</style>
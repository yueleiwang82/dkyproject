<template>
  <div>
    <h1>Vue+Three实例（二）--旋转的正方体(BoxGeometry)</h1>
    <div id="container1"></div>
  </div>
</template>
 
<script>
import * as Three from "Three";
export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      lastDate: new Date()
    };
  },
  methods: {
    init: function() {
      let container1 = document.getElementById("container1");
      this.scene = new Three.Scene();
      this.camera = new Three.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.camera.position.z = 5;
      let geometry = new Three.BoxGeometry(2, 2, 2);
      let material = new Three.MeshBasicMaterial({ color: 11397866 });
             
      this.mesh = new Three.Mesh(geometry, material);
      this.scene.add(this.mesh);
      this.renderer = new Three.WebGLRenderer();
      this.renderer.setSize(container1.clientWidth, container1.clientHeight);
      container1.appendChild(this.renderer.domElement);
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.1;
      this.mesh.rotation.y += 0.1;
      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    this.init();
    this.animate();
  }
};
</script>
<style scoped>
#container1 {
  height: 500px;
}
</style>
<template>
  <div>
    <h1>Vue+Three实例（三）--旋转的圆柱体(CylinderGeometry)</h1>
    <div id="container2"></div>
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
      //场景元素获取
      let container2 = document.getElementById("container2");
      this.scene = new Three.Scene();
      this.camera = new Three.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.camera.position.z = 20;
      let geometry = new Three.CylinderGeometry( 2, 2, 10, 32 );
      let material = new Three.MeshBasicMaterial( {color: 0x0077aa} );
             
      this.mesh = new Three.Mesh(geometry, material);
      this.scene.add(this.mesh);
      this.renderer = new Three.WebGLRenderer();
      this.renderer.setSize(container2.clientWidth, container2.clientHeight);
      container2.appendChild(this.renderer.domElement);
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.1;
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
#container2 {
  height: 500px;
}
</style>
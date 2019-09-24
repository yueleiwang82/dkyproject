<template>
  <div>
    <h1>Vue+Three实例（一）--旋转的球体(SphereGeometry)</h1>
    <div id="container"></div>
    <test-a></test-a>
    <cylinder></cylinder>
  </div>
</template>
 
<script>
import * as Three from "Three";//Three.js引入
import STLLoader from "three/examples/js/loaders/STLLoader";//模型导入js
import OrbitControls from "three/examples/js/controls/OrbitControls";//模型控制js
import TestA from '@/components/TestA'
import cylinder from '@/components/Cylinder'
export default {
  components: {
    TestA,
    cylinder
  },
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      controls:null,
      lastDate: new Date()
    };
  },
  methods: {
    init: function() {
      let container = document.getElementById("container");
      this.scene = new Three.Scene();
      let self=this;
      let loader = new STLLoader();
      //模板引入函数
      loader.load("/static/hp.stl", function(obj) {
        //self.scene.add(new Three.Mesh(obj));
      });
      this.camera = new Three.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        13.9
      );
      this.camera.position.z = 15;
      this.camera.position.x = 0;
      this.camera.position.y = 0;
      //鼠标拖拽
      this.controls=new Three.OrbitControls(this.camera);
      let geometry = new Three.SphereGeometry(5, 20, 20);
      let material = new Three.MeshBasicMaterial({
        color: 0x0077aa,
        wireframe: true
      });

      this.mesh = new Three.Mesh(geometry, material);
      this.scene.add(this.mesh);
      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setClearColor(0x000000);
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      var now = new Date();
      var delay = now - this.lastDate;
      this.lastDate = now;
      this.mesh.rotation.y += delay * 0.001;
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
#container {
  height: 500px;
}
</style>
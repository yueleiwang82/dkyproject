<template>
  <div>
    <h1>Vue+Three实例（一）--旋转的球体(SphereGeometry)</h1>
    <div id="container"></div>
    <test-a></test-a>
    <cylinder></cylinder>
    <transfer :options="options" :title='title' :showContentOne='valueType' :moveButtonStyle='buttonstlye' :ThreeShow='Threeshow' :titleOne='titleOne' :titleTwo='titleTwo' :titleThree='titleThree' @projectOneValue="getvalueOne" @projectTwoValue="getvalueTwo" @projectThreeValue="getvalueThree"></transfer>
  </div>
</template>
<script>
//Three.js引入
import * as Three from 'Three';
//模型导入js
import STLLoader from 'three/examples/js/loaders/STLLoader';
//模型控制js
import OrbitControls from 'three/examples/js/controls/OrbitControls';
import TestA from '@/components/TestA';
import cylinder from '@/components/Cylinder';
import transfer from '@/components/transfer';
export default {
  components: {
    TestA,
    cylinder,
    transfer
  },
  data() {
    return {
      valueType:'name',
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      controls:null,
      lastDate: new Date(),
      options:[
　　　　　　{account: '项目组1',id:'1'},
　　　　　　{account: '项目组2',id:'2'},
　　　　　　{account: '项目组3',id:'3'},
　　　　　　{account: '项目组4',id:'4'},
　　　　　　{account: '项目组5',id:'5'},
　　　　],
      titleOne:'读',
      titleTwo:'写',
      titleThree:'无权限',
      title:'SVN权限分配', 
      buttonstlye:{
        width:'60px',
        'border-radius':'6px',
        outline:'none',
        background:'#50bfff',
        color: '#fff',
        border: 'none',
        'font-weight':'700'			    
      }, 
      Threeshow:true,           
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
      //this.controls=new Three.OrbitControls(this.camera);
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
    },
    getvalueOne(value){	   
	   console.log('读:',value);
    },
      getvalueTwo(value){
      console.log('写:',value)
    },
      getvalueThree(value){
      console.log('无权限:',value)
    },    
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
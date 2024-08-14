import * as BABYLON from '@babylonjs/core';

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = function() {
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultCameraOrLight(true, false, true);
  const box = new BABYLON.MeshBuilder.CreateBox('box', {
    size: 0.3,
    width: 2,
    height: 2,
    depth: 2,
    faceColors: [
      new BABYLON.Color4(1, 0, 0, 1),
    ]
  }, scene);
  //const sphere = new BABYLON.MeshBuilder.CreateSphere();
  //const plane = new BABYLON.MeshBuilder.CreatePlane();
  //const cylinder = new BABYLON.MeshBuilder.CreateCylinder();
  //const torus = new BABYLON.MeshBuilder.CreateTorus();

  return scene;
}

const scene = createScene();

engine.runRenderLoop(function() {
  scene.render();
});

window.addEventListener('resize', function() {
  engine.resize();
});
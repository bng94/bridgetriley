import * as THREE from 'three';
import { Injectable, ElementRef, OnInit, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CubeService implements OnInit {
  canvas: HTMLCanvasElement;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  cube: THREE.Mesh;
  frameId: number = null;


  constructor(private ngZone: NgZone) { }

  ngOnInit() {

  }

  createScene(canvas: ElementRef<HTMLCanvasElement>) {
      // The first step is to get the reference of the canvas element from our HTML document
      this.canvas = canvas.nativeElement;
      //var texture = new THREE.TextureLoader().load('../assets/cubes.png');
      this.renderer = new THREE.WebGLRenderer({
          canvas: this.canvas,
          alpha: false,    // transparent background - true
          antialias: true // smooth edges
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight-120);

      // create the scene
      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(
          75, window.innerWidth / window.innerHeight, 0.1, 1000
      );
      this.camera.position.z = 5;
      this.scene.add(this.camera);

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
      //const material = new THREE.MeshBasicMaterial({ map: texture });
      this.cube = new THREE.Mesh(geometry, material);
      this.scene.add(this.cube);

  }

  animate() {
      // We have to run this outside angular zones,
      // because it could trigger heavy changeDetection cycles.
      this.ngZone.runOutsideAngular(() => {
          if (document.readyState !== 'loading') {
              this.render();
          } else {
              window.addEventListener('DOMContentLoaded', () => {
                  this.render();
              });
          }

          window.addEventListener('resize', () => {
              this.resize();
          });
      });
  }

  render() {
      this.frameId = requestAnimationFrame(() => {
          this.render();
      });

      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
  }

  resize() {
      this.camera.aspect = window.innerWidth / window.innerHeight - 120;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(window.innerWidth, window.innerHeight - 120);
  }
}

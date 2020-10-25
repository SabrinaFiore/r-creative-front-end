import { Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-r-creative-three-second',
  templateUrl: './r-creative-three-second.component.html',
})
export class RCreativeThreeSecondComponent {

  @ViewChild('rendererContainerSecond') rendererContainer: ElementRef;
  
  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;
  mesh = null;
  geometry = null;
  material = null;
  sphere = null;
  raycaster = null;
  mouse = null;
  light = null;
  clientX: number;
  clientY: number;
  clientZ: number;

  constructor() { 
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 10;

    this.geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
    this.material = new THREE.MeshBasicMaterial({color: 0xffff00, wireframe: true} );
    this.sphere = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.sphere);

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.sphere.rotation.x += 0.01;
    this.sphere.rotation.y += 0.02;
    this.sphere.rotation.z += 0.02;
    this.renderer.render(this.scene, this.camera);
  }
}


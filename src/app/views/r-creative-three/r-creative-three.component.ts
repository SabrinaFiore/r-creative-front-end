import { Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-r-creative-three',
  templateUrl: './r-creative-three.component.html',
})

export class RCreativeThreeComponent {
  
  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  title: string = 'Who we are';
  description: string = 'New concepts, methods and technologies are completely revolutionizing  traditional methods of project planning, design and construction. Implementing these changes to achieve the promise of higher quality standards, shorter turnaround times and lower costs requires totally rethinking Design and Construction Management today RIMOND is an exceptionally capable partner in this area.  We bring innovative tools and precision to the design, construction and acquisition of buildings, particularly in complex projects where attention to each individual aspect of the process is critical to achieving the brilliant results our clients expect.In this rapidly evolving context, we are confident in our ability to satisfy architects ambitions, developers needs for sustainability and clients profitability by ensuring excellence throughout each project.At RIMOND, we are breaking ground for tomorrow.';

  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;
  mesh = null;

  constructor() { 
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;

    const geometry = new THREE.BoxGeometry(100, 100, 100);
    const material = new THREE.MeshNormalMaterial();
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(500, 100, 50);

    this.scene.add(this.mesh);
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
  }
}

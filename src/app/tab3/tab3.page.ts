import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as THREE from 'three';
import { CubeService } from '../services/cube.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private cubeServ: CubeService) { }

  public ngOnInit(): void {
    this.cubeServ.createScene(this.rendererCanvas);
    this.cubeServ.animate();
  }
}

import { Component, OnInit, ViewChild, Renderer, HostListener } from '@angular/core';
import { Platform } from '@ionic/angular';
declare var requestPermission;
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
    @ViewChild('canvas', { static: true }) canvas: any;
    canvasElement: any;
    lastX: number;
    lastY: number;
    colors = ["AliceBlue", "CadetBlue", "Cyan", "DarkBlue", "DarkRed", "Lavender", "LightCyan", "LightSkyBlue", "MistyRose", "PaleTurquoise", "SkyBlue", "Teal"];
    rand = Math.floor(Math.random() * this.colors.length);
    bgColor = this.colors[this.rand];

    constructor(public platform: Platform, public renderer: Renderer) { }

    ionViewDidLoad() {
        this.myCanvasInitializationFunction();
    }

    myCanvasInitializationFunction() {
        this.canvasElement = this.canvas.nativeElement;
        this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
        this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
        let ctx = this.canvasElement.getContext('2d');
        ctx.fillStyle = this.bgColor;
        this.myCanvasDrawingFunction(ctx);
    }

    myCanvasDrawingFunction(ctx) {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        for (var i = 0; i < this.canvas.height; i++) {
            var startPos = 10 + (i * 15);
            ctx.beginPath();
            ctx.lineWidth = 6;
            ctx.moveTo(startPos, 0);
            ctx.bezierCurveTo(5 + (i * 5), 5 + (i * 8), 8 + (i * 13), 3 + (i * 12), 0, 20 + (i * 18));
            ctx.stroke();
            ctx.save();
        }
    }

    handleMotionEvent(event) {
        console.log("init");
        var x = event.accelerationIncludingGravity.x;
        var y = event.accelerationIncludingGravity.y;
        var z = event.accelerationIncludingGravity.z;
        console.log("x: " + x);
        console.log("y: " + y);
        console.log("z: " + z);
        if (y > 0) {
            this.myCanvasAnimationFunction();
        }
    }

    permission() {
        requestPermission().then(window.addEventListener('devicemotion', this.handleMotionEvent, true));
    }

    @HostListener('click', [])
    myCanvasAnimationFunction() {
        this.canvasElement = this.canvas.nativeElement;

        let ctx = this.canvasElement.getContext('2d');
        console.log("running");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillStyle = this.bgColor;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        var i = 0;
        var intervals = setInterval(frame, 5);
        function frame() {
            if (i == 200) {
                clearInterval(intervals);
            } else {
                i++;
                ctx.beginPath();
                ctx.lineWidth = 6;
                ctx.moveTo(10 + (i * 15), 0);
                ctx.bezierCurveTo(5 + (i * 5), 5 + (i * 8), 8 + (i * 13), 3 + (i * 12), 0, 20 + (i * 18));
                ctx.stroke();
                ctx.save();
            }
        }
    }
    ngOnInit() {
        this.myCanvasInitializationFunction();
    }

}

import {AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-knob-slider',
    templateUrl: './knob-slider.component.html',
    styleUrls: ['./knob-slider.component.css']
})
export class KnobSliderComponent implements AfterViewInit {
    private value = 100;
    @Input() public width = 100;
    @Input() public height = 100;
    @Input() public fontSize = 14;
    @Input() public lineWidth = 3;
    @Input() public strokeColor = '#ff0000';
    @Input() public backgroundColor = '#c1c1c1';
    @Input() public textColor = '#c1c1c1';
    @Output() onKnobValueChanged = new EventEmitter<number>();

    constructor() {
    }

    ngAfterViewInit() {
        const canvases = document.getElementsByClassName('knob-slider');
        for (let i = 0; i < canvases.length; i++) {
            const canvas = canvases[i];
            this.drawArc(canvas);
            let mouseDown = false;
            const currentCordinates = {
                x: null,
                y: null
            };
            canvas.addEventListener('mousedown', (event: MouseEvent) => {
                if (event.which === 1) {
                    mouseDown = true;
                }
                currentCordinates.x = event.clientX;
                currentCordinates.y = event.clientY;
            });
            window.addEventListener('mouseup', (event: MouseEvent) => {
                if (event.which === 1) {
                    mouseDown = false;
                    currentCordinates.x = null;
                    currentCordinates.y = null;
                }
            });
            window.addEventListener('mousemove', (event: MouseEvent) => {
                if (mouseDown) {
                    const x = event.clientX;
                    const y = event.clientY;
                    // Move up
                    if (y < currentCordinates.y) {
                        if (this.value < 100) {
                            this.value += 2;
                            if (this.value > 100) {
                                this.value = 100;
                            }
                        }
                    } else if (y > currentCordinates.y) {
                        if (this.value > 0) {
                            this.value -= 2;
                            if (this.value < 0) {
                                this.value = 0;
                            }
                        }
                    }
                    currentCordinates.x = x;
                    currentCordinates.y = y;
                    this.drawArc(canvas);
                    this.onKnobValueChanged.emit(this.value);
                }
            });
            canvas.addEventListener('wheel', (e: WheelEvent) => {
                const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
                // Scroll Up
                if (delta > 0) {
                    if (this.value < 100) {
                        this.value += 4;
                        if (this.value > 100) {
                            this.value = 100;
                        }
                    }
                    // Scroll Down
                } else {
                    if (this.value > 0) {
                        this.value -= 4;
                        if (this.value < 0) {
                            this.value = 0;
                        }
                    }
                }
                this.drawArc(canvas);
                this.onKnobValueChanged.emit(this.value);
            });
        }
    }

    drawArc(canvas): void {
        const startAngle = -1.25;
        const endAngle = 0.25;
        const angleDiff = Math.abs(startAngle) + Math.abs(endAngle);
        const currentEndAngle = endAngle - ((100 - this.value) * angleDiff) / 100;

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        ctx.strokeStyle = this.backgroundColor;
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 3, startAngle * Math.PI, endAngle * Math.PI);
        ctx.stroke();
        ctx.strokeStyle = this.strokeColor;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 3, startAngle * Math.PI, currentEndAngle * Math.PI);
        ctx.stroke();
        const fontSize = canvas.height / 2 - 6;
        ctx.font = this.fontSize + 'px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = this.textColor;
        ctx.fillText(this.value.toString(), canvas.width / 2, canvas.height / 2 + fontSize / 2 - this.lineWidth + 1);
    }

}

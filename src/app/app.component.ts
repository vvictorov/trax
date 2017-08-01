import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AudioPlayerService } from './audio-player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Trax';
  constructor(private audioPlayerService: AudioPlayerService) {}
}

import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {Subscription} from 'rxjs/Subscription';
import { AudioPlayerService } from '../audio-player.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
  animations: [
    trigger('openState', [
      state('open', style({
          height: '100px',
          visibility: 'visible'
      })),
      state('minimized', style({
        height: '40px',
        visibility: 'visible'
      })),
      state('closed',   style({
        height: '0px',
        visibility: 'hidden'
      })),
      transition('open => closed', animate('200ms ease-out')),
      transition('closed => open', animate('200ms ease-in')),
      transition('minimized => open', animate('200ms ease-in')),
      transition('open => minimized', animate('200ms ease-out')),
    ])
  ]
})
export class AudioPlayerComponent implements OnInit {

  public openState = 'closed';
  subscription: Subscription;
  constructor(private audioPlayerService: AudioPlayerService ) {
    this.subscription = audioPlayerService.stateChanged$.subscribe(state => {
      console.log(state);
      this.openState = state;
    });
  }

  changePlayerState(state: string): void {
    switch (state) {
      case 'open':
        this.openState = 'open';
        break;
      case 'closed':
        this.openState = 'closed';
        break;
      case 'minimized':
        this.openState = 'minimized';
        break;
      default: break;
    }
  }
  ngOnInit() {
  }

}

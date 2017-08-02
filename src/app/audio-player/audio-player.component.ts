import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {Subscription} from 'rxjs/Subscription';
import { AudioPlayerService } from '../audio-player.service';
import { Track } from '../track';

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
export class AudioPlayerComponent implements OnInit, OnDestroy {

  public openState = 'closed';
  public track: Track;
  public duration: string;
  public currentTime: string;
  @Input() sliderColor = 'red';
  subscription: Subscription;
  constructor(private audioPlayerService: AudioPlayerService ) {
    this.subscription = audioPlayerService.trackPlayed$.subscribe(track => {
      this.track = track;
      this.openState = 'open';
      this.duration = track.audio.duration.toString();
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
  timelineSliderHover(mouseleave: boolean) {
    for (const thumb of Array.from(document.getElementsByClassName('mat-slider-thumb'))) {
      if (mouseleave) {
        thumb.classList.add('hide-player-thumb');
        thumb.classList.remove('show-player-thumb');
      }else {
        thumb.classList.add('show-player-thumb');
        thumb.classList.remove('hide-player-thumb');
      }
    }
  }
  ngOnInit() {
    for (const thumb of Array.from(document.getElementsByClassName('mat-slider-thumb'))) {
      thumb.classList.add('hide-player-thumb');
    }
    for (const trackBackground of Array.from(document.getElementsByClassName('mat-slider-track-background'))) {
      trackBackground.classList.add('player-track-background');
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

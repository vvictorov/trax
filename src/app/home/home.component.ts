import { Component, OnInit, OnDestroy } from '@angular/core';
import { TracksService } from '../tracks.service';
import { Track } from '../track';
import { AudioPlayerService } from '../audio-player.service';
import { Subscription } from 'rxjs/Subscription';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TracksService]
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private TracksService: TracksService, private audioPlayerService: AudioPlayerService) {
    this.subscription = audioPlayerService.trackPlayed$.subscribe(track => {
      // TODO
    });
  }
  suggestedTracks: Track[];
  subscription: Subscription;
  ngOnInit() {
    this.TracksService.getSuggestedTracks().then(tracks => {
      this.suggestedTracks = this.TracksService.castToTracks(tracks);
    });
  }
  playTrack(track: Track) {
    this.audioPlayerService.play(track);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

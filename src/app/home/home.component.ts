import { Component, OnInit, Output} from '@angular/core';
import { TracksService } from '../tracks.service';
import { Track } from '../track';
import { AudioPlayerService } from '../audio-player.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TracksService, AudioPlayerService]
})
export class HomeComponent implements OnInit {

  playerState: string;
  constructor(private TracksService: TracksService, private audioPlayerService: AudioPlayerService ) {
    this.subscription = audioPlayerService.stateChanged$.subscribe(state => {
      this.playerState = state;
    });
  }
  suggestedTracks: Track[];
  subscription: Subscription;
  ngOnInit() {
    this.suggestedTracks = this.TracksService.getAllSuggestedTracks();
  }
  changePlayerState(state: string) {
    this.playerState = state;
    this.audioPlayerService.changeState(state);
  }
}

import {Component, OnInit, OnDestroy} from '@angular/core';
import {TracksService} from '../../services/tracks.service';
import {Track} from '../../models/track';
import {AudioPlayerService} from '../../services/audio-player.service';
import {Subscription} from 'rxjs/Subscription';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [TracksService]
})
export class HomeComponent implements OnInit, OnDestroy {
    suggestedTracks: Track[];
    subscription: Subscription;

    constructor(private TracksService: TracksService, private audioPlayerService: AudioPlayerService) {
        this.subscription = audioPlayerService.trackPlayed$.subscribe(track => {
            // TODO
        });
    }

    ngOnInit() {
        this.TracksService.getSuggestedTracks().then(tracks => {
            this.suggestedTracks = this.TracksService.castToTracks(tracks);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

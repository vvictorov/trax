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
    trackPlayedSubscription: Subscription;
    suggestedTracksSubscription: Subscription;

    constructor(private TracksService: TracksService, private audioPlayerService: AudioPlayerService) {
        this.trackPlayedSubscription = audioPlayerService.trackPlayed$.subscribe(track => {
            // TODO
        });
        this.suggestedTracksSubscription = this.TracksService.getSuggestedTracks().subscribe(tracks => {
            this.suggestedTracks = tracks;
        });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.trackPlayedSubscription.unsubscribe();
        this.suggestedTracksSubscription.unsubscribe();
    }
}

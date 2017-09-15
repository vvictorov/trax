import {Component, Input, OnInit} from '@angular/core';
import {Track} from '../../models/track';
import {AudioPlayerService} from '../../services/audio-player.service';
import {TracksService} from '../../services/tracks.service';
import {AlertService} from '../../services/alert.service';

@Component({
    selector: 'app-track',
    templateUrl: './track.component.html',
    styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

    public display = 'show';
    constructor(private audioPlayerService: AudioPlayerService, private tracksService: TracksService, private alertService: AlertService) {
    }

    @Input() track: Track;

    ngOnInit() {
    }

    playTrack(track: Track) {
        this.audioPlayerService.play(track);
    }

    addToFavorites(track: Track) {
        this.tracksService.addToFavorites(track).then(response => {
            if (response.result === 'success') {
                this.alertService.success(response.message);
                track.favorite = true;
            }
        });
    }

    removeFromFavorites(track: Track) {
        this.tracksService.removeFromFavorites(track).then(response => {
            if (response.result === 'success') {
                this.alertService.success(response.message);
                track.favorite = false;
                this.display = 'hide';
            }
        });
    }
}

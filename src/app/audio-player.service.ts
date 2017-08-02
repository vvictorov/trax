import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Track} from './track';

@Injectable()
export class AudioPlayerService {

    constructor() {
    }

    // Observable string sources
    private trackPlayedSource = new Subject<Track>();
    public audio = new Audio();
    public isPlaying = false;

    // Observable string streams
    trackPlayed$ = this.trackPlayedSource.asObservable();
    // Track Played
    play(track: Track) {
        this.audio.src = track.audio.path;
        this.audio.onloadedmetadata = () => {
            this.audio.play();
            this.isPlaying = true;
            track.audio.duration = this.audio.duration;
            this.trackPlayedSource.next(track);
        };
    }
}

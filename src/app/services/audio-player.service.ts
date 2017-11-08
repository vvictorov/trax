import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Track} from '../models/track';

@Injectable()
export class AudioPlayerService {

    constructor() {
        this.audio.autoplay = true;
        this.audio.muted = true;
    }

    // Observable string sources
    private trackPlayedSource = new Subject<Track>();
    public audio = new Audio();
    public isPlaying = false;

    // Observable string streams
    trackPlayed$ = this.trackPlayedSource.asObservable();

    // Track Played
    play(track: Track) {
        this.audio.src = track.audio.url;
        this.audio.onloadeddata = () => {
            this.audio.muted = false;
            this.isPlaying = true;
            track.audio.duration = this.audio.duration;
            this.trackPlayedSource.next(track);
        };
    }

    pause(): void {
        this.audio.pause();
        this.isPlaying = false;
    }

    resume(): void {
        this.audio.play();
        this.isPlaying = true;
    }

    setTime(time: number) {
        this.audio.currentTime = time;
    }

    setVolume(volume: number) {
        this.audio.volume = volume / 100;
    }
}

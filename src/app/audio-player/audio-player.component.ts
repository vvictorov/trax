import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {Subscription} from 'rxjs/Subscription';
import {AudioPlayerService} from '../audio-player.service';
import {Track} from '../track';
import {FormsModule} from '@angular/forms';

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
            state('closed', style({
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
    public isPlaying = false;
    protected duration: number;
    public durationString: string;
    private currentTime: number;
    public currentTimeString: string;
    public sliderValue = 0;
    public sliderDragged = false;
    private timer = {
        interval: setInterval(() => {
        }, 100),
        start: () => {
            clearInterval(this.timer.interval);
            this.timer.change();
            this.timer.interval = setInterval(() => {
                if (this.currentTime < this.duration) {
                    this.isPlaying = true;
                    this.currentTime += 0.1;
                    this.currentTimeString = AudioPlayerComponent.parseTime(this.currentTime);
                    if (!this.sliderDragged) {
                        this.sliderValue += 0.1;
                    }
                }else {
                    if (this.isPlaying) {
                        this.audioPlayerService.pause();
                        this.timer.pause();
                    }else {
                        this.timer.stop();
                        this.sliderValue = 0;
                        this.audioPlayerService.play(this.track);
                    }
                }
            }, 100);
        },
        pause: () => {
            clearInterval(this.timer.interval);
            this.timer.change();
        },
        stop: () => {
            clearInterval(this.timer.interval);
            this.currentTime = 0;
            this.currentTimeString = AudioPlayerComponent.parseTime(this.currentTime);
            this.timer.change();
        },
        change: () => {
            this.isPlaying = this.audioPlayerService.isPlaying;
        }
    };
    private subscription: Subscription;

    constructor(private audioPlayerService: AudioPlayerService) {
        this.subscription = audioPlayerService.trackPlayed$.subscribe(track => {
            this.track = track;
            this.play(this.track);
        });
    }

    static parseTime(seconds: number): string {
        seconds = Math.round(seconds);
        const hours = Math.floor(seconds / 3600) % 24;
        const minutes = Math.floor(seconds / 60) % 60;
        seconds = seconds % 60;
        return [hours, minutes, seconds]
            .map(v => v < 10 ? '0' + v : v)
            .filter((v, i) => v !== '00' || i > 0)
            .join(':');
    }

    timeSliderHover(mouseleave: boolean) {
        for (const thumb of Array.from(document.getElementsByClassName('mat-slider-thumb'))) {
            if (mouseleave) {
                thumb.classList.add('hide-player-thumb');
                thumb.classList.remove('show-player-thumb');
            } else {
                thumb.classList.add('show-player-thumb');
                thumb.classList.remove('hide-player-thumb');
            }
        }
    }

    play(track: Track): void {
        if (!track) {
            track = this.track;
        }
        if (track) {
            this.openState = 'open';
            this.duration = track.audio.duration;
            this.durationString = AudioPlayerComponent.parseTime(track.audio.duration);
            this.currentTime = 0;
            this.currentTimeString = AudioPlayerComponent.parseTime(this.currentTime);
            this.sliderValue = 0;
            this.timer.start();
        }
    }

    pause(): void {
        this.audioPlayerService.pause();
        this.timer.pause();
    }

    resume(): void {
        this.timer.start();
        if (this.currentTime < this.duration) {
           this.audioPlayerService.resume();
        }
    }

    changeTime(time: number): void {
        this.currentTime = this.sliderValue = time;
        this.currentTimeString = AudioPlayerComponent.parseTime(time);
        this.audioPlayerService.setTime(time);
    }
    ngOnInit() {
        const slider = document.getElementById('time-slider');
        slider.addEventListener('mousedown', () => {
            this.sliderDragged = true;
        });
        document.addEventListener('mouseup', () => {
            this.sliderDragged = false;
        });
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

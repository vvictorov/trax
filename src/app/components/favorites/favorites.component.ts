import {Component, OnInit} from '@angular/core';
import {Track} from '../../models/track';
import {TracksService} from '../../services/tracks.service';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css'],
    animations: [
        trigger('display', [
            state('show', style({
                opacity: 1,
                display: 'block'
            })),
            state('hide', style({
                opacity: 0,
                display: 'none'
            })),
            transition('show => hide', animate('300ms ease-out')),
            transition('hide => show', animate('300ms ease-in')),
        ])
    ]
})
export class FavoritesComponent implements OnInit {

    favorites: Track[];

    constructor(private tracksService: TracksService) {
        this.tracksService.getFavorites().then(tracks => {
            this.favorites = this.tracksService.castToTracks(tracks);
        });
    }

    ngOnInit() {
    }

}

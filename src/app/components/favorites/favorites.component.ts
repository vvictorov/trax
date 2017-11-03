import {Component, OnDestroy, OnInit} from '@angular/core';
import {Track} from '../../models/track';
import {TracksService} from '../../services/tracks.service';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {Subscription} from 'rxjs/Subscription';

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
export class FavoritesComponent implements OnInit, OnDestroy {

    favorites: Track[];
    favoritesSubscription: Subscription;

    constructor(private tracksService: TracksService) {
        this.favoritesSubscription = this.tracksService.getFavorites().subscribe(tracks => {
            this.favorites = this.tracksService.castToTracks(tracks);
        });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.favoritesSubscription.unsubscribe();
    }

}

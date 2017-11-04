import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {TracksService} from '../../services/tracks.service';

@Component({
    selector: 'app-view-track',
    templateUrl: './view-track.component.html',
    styleUrls: ['./view-track.component.css']
})
export class ViewTrackComponent implements OnInit, OnDestroy {
    private slug: string;
    private routeSubscription: Subscription;
    private trackSubscription: Subscription;
    public track;

    constructor(private route: ActivatedRoute, private tracksService: TracksService) {
    }

    ngOnInit() {
        this.routeSubscription = this.route.params.subscribe(params => {
            this.slug = params['slug'];
            this.loadTrack();
        });
    }

    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
        this.trackSubscription.unsubscribe();
    }

    loadTrack() {
        this.trackSubscription = this.tracksService.getTrack(this.slug)
            .subscribe((track) => {
                this.track = track;
            });
    }
}

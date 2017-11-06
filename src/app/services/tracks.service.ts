import {Injectable} from '@angular/core';
import {Track, TrackImage, TrackAudio} from '../models/track';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import {AppConfig} from '../app.config';
import {User} from "../models/user";
import {AuthService} from "./auth.service";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TracksService {
    constructor(private http: Http, private authService: AuthService) {
    }

    getSuggestedTracks(): Observable<Track[]> {
        return this.http.get('/suggested')
            .delay(500000)
            .map(response => this.castToTracks(response.json()))
    }

    getTrack(slug: string): Observable<Track> {
        return this.http.get('/tracks/' + slug)
            .map((response) => this.castToTrack(response.json()));
    }

    getFavorites(): Observable<Track[]> {
        return this.http.get('/favorites')
            .map(response => this.castToTracks(response.json()))
    }

    addToFavorites(track): Promise<any> {
        return this.http.post('/favorites/add',{id: track.id})
            .toPromise()
            .then((response: Response) => {
                return Promise.resolve({result: 'success', message: response.text()})
            })
    }

    removeFromFavorites(track): Promise<any> {
        return this.http.post('/favorites/remove',{id: track.id})
            .toPromise()
            .then((response: Response) => {
                return Promise.resolve({result: 'success', message: response.text()})
            })
    }

    castToTrack(trackJson): Track {
        const image = new TrackImage(trackJson.image.url);
        const audio = new TrackAudio(trackJson.audio.url);
        const user = new User(trackJson.user.id, trackJson.user.name);
        return new Track(trackJson.id, trackJson.name, trackJson.slug, trackJson.genre, image, audio, user, trackJson.favorite);
    }

    castToTracks(tracksJson): Track[] {
        const tracks = [];
        for (const trackJson of tracksJson) {
            const image = new TrackImage(trackJson.image.url);
            const audio = new TrackAudio(trackJson.audio.url);
            const user = new User(trackJson.user.id, trackJson.user.name);
            const track = new Track(trackJson.id, trackJson.name, trackJson.slug, trackJson.genre, image, audio, user, trackJson.favorite);
            tracks.push(track);
        }
        return tracks;
    }
}

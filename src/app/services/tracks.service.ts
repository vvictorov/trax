import {Injectable} from '@angular/core';
import {Track, TrackImage, TrackAudio} from '../models/track';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {AppConfig} from '../app.config';
import {User} from "../models/user";
import {AuthService} from "./auth.service";

@Injectable()
export class TracksService {
    constructor(private http: Http, private authService: AuthService) {
    }

    getSuggestedTracks(): Promise<Track[]> {
        return this.http.get('/suggested')
            .toPromise()
            .then(response => response.json() as Track[])
            .catch(this.handleError);
    }

    getFavorites(): Promise<Track[]> {
        return this.http.get('/favorites')
            .toPromise()
            .then(response => response.json() as Track[])
            .catch(this.handleError);
    }

    addToFavorites(track): Promise<any> {
        return this.http.post('/favorites/add',{id: track.id})
            .toPromise()
            .then((response: Response) => {
                return Promise.resolve({result: 'success', message: response.text()})
            })
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    castToTrack(trackJson): Track {
        const image = new TrackImage(trackJson.image.url);
        const audio = new TrackAudio(trackJson.audio.url);
        const user = new User(trackJson.user.id, trackJson.user.name);
        return new Track(trackJson.id, trackJson.name, trackJson.genre, image, audio, user, trackJson.favorite);
    }

    castToTracks(tracksJson): Track[] {
        const tracks = [];
        for (const trackJson of tracksJson) {
            const image = new TrackImage(trackJson.image.url);
            const audio = new TrackAudio(trackJson.audio.url);
            const user = new User(trackJson.user.id, trackJson.user.name);
            const track = new Track(trackJson.id, trackJson.name, trackJson.genre, image, audio, user, trackJson.favorite);
            tracks.push(track);
        }
        return tracks;
    }
}

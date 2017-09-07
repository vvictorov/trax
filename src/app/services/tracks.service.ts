import { Injectable } from '@angular/core';
import { Track, TrackImage, TrackAudio } from '../models/track';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AppConfig } from '../app.config';
import {User} from "../models/user";

@Injectable()
export class TracksService {
  constructor(private http: Http) {}

  getSuggestedTracks(): Promise<Track[]> {
    return this.http.get('/tracks')
        .toPromise()
        .then(response => response.json() as Track[])
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  castToTrack(trackJson): Track {
    const image = new TrackImage(trackJson.image);
    const sound = new TrackAudio(trackJson.sound);
    const user = new User(trackJson.user.id, trackJson.user.name);
    return new Track(trackJson.id, trackJson.name, trackJson.genre, image, sound, user);
  }

  castToTracks(tracksJson): Track[] {
    const tracks = [];
    for (const trackJson of tracksJson) {
      const image = new TrackImage(trackJson.image);
      const audio = new TrackAudio(trackJson.audio);
        const user = new User(trackJson.user.id, trackJson.user.name);
      const track = new Track(trackJson.id, trackJson.name, trackJson.genre, image, audio, user);
      tracks.push(track);
    }
    return tracks;
  }
}

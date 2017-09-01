import { Injectable } from '@angular/core';
import { Track, TrackImage, TrackAudio } from './track';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { AppSettings } from './app-settings';

@Injectable()
export class TracksService {
  constructor(private http: HttpClient) {}

  getSuggestedTracks(): Promise<Track[]> {
    return this.http.get(AppSettings.API_URL + 'tracks')
        .toPromise()
        .then(response => response as Track[])
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  castToTrack(trackJson): Track {
    const image = new TrackImage(trackJson.image);
    const sound = new TrackAudio(trackJson.sound);
    return new Track(trackJson.id, trackJson.name, trackJson.genre, image, sound);
  }

  castToTracks(tracksJson): Track[] {
    const tracks = [];
    for (const trackJson of tracksJson) {
      const image = new TrackImage(trackJson.image);
      const audio = new TrackAudio(trackJson.audio);
      const track = new Track(trackJson.id, trackJson.name, trackJson.genre, image, audio);
      tracks.push(track);
    }
    return tracks;
  }
}

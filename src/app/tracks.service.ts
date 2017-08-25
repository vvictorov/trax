import { Injectable } from '@angular/core';
import { Track, TrackImage, TrackAudio } from './track';
import { TRACKS } from './mock-tracks';

@Injectable()
export class TracksService {

  constructor() { }
  getAllSuggestedTracks(): Track[] {
    const tracks = [];
    for (const trackJson of TRACKS){
      const image = new TrackImage(trackJson.image);
      const sound = new TrackAudio(trackJson.sound);
      const track = new Track(trackJson.id, trackJson.name, trackJson.genre, image, sound);
      tracks.push(track);
    }
    return tracks;
  }
}

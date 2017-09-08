import {User} from './user';

export class TrackImage {
    fileName: string;
    url: string;
    constructor(url) {
        this.url = url;
    }
}

export class TrackAudio {
    fileName: string;
    duration: number;
    url: string;
    constructor(url) {
        this.url = url;
    }
}

export class Track {
    id: number;
    name: string;
    genre: string;
    image: TrackImage;
    audio: TrackAudio;
    user: User;
    constructor(id: number, name: string, genre: string, image: TrackImage, sound: TrackAudio, user: User) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.audio = sound;
        this.genre = genre;
        this.user = user;
    }
}

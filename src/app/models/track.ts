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
    slug: string;
    genre: string;
    image: TrackImage;
    audio: TrackAudio;
    user: User;
    favorite: boolean;
    constructor(id: number, name: string, slug: string, genre: string, image: TrackImage, sound: TrackAudio, user: User, favourite: boolean) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.image = image;
        this.audio = sound;
        this.genre = genre;
        this.user = user;
        this.favorite = favourite;
    }
}

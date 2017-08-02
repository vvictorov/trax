export class TrackImage {
    fileName: string;
    constructor(image) {
        this.fileName = image.fileName;
    }
    get path(): string {
        return 'assets/images/track-images/' + this.fileName;
    }
}

export class TrackAudio {
    fileName: string;
    duration: number;
    constructor(sound) {
        this.fileName = sound.fileName;
    }
    get path(): string {
        return 'assets/sounds/' + this.fileName;
    }
}

export class Track {
    id: number;
    name: string;
    image: TrackImage;
    audio: TrackAudio;
    constructor(id: number, name: string, image: TrackImage, sound: TrackAudio) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.audio = sound;
    }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from './audio-player.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        AudioPlayerComponent,
    ],
    declarations: [AudioPlayerComponent],
})
export class AudioPlayerModule { }

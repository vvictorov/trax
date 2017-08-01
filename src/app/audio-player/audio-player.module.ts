import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from './audio-player.component';
import { AudioPlayerService } from '../audio-player.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        AudioPlayerComponent,
    ],
    declarations: [AudioPlayerComponent],
    providers: [AudioPlayerService]
})
export class AudioPlayerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from '../components/audio-player/audio-player.component';
import {AngularMaterialModule} from './angular-material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialModule,
        FormsModule
    ],
    exports: [
        AudioPlayerComponent,
    ],
    declarations: [AudioPlayerComponent],
})
export class AudioPlayerModule { }

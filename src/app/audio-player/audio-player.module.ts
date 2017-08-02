import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from './audio-player.component';
import {AngularMaterialModule} from '../angular-material/angular-material.module';

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialModule
    ],
    exports: [
        AudioPlayerComponent,
    ],
    declarations: [AudioPlayerComponent],
})
export class AudioPlayerModule { }

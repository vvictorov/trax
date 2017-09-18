import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from '../components/audio-player/audio-player.component';
import {AngularMaterialModule} from './angular-material.module';
import {FormsModule} from '@angular/forms';
import {KnobSliderComponent} from '../components/widgets/knob-slider/knob-slider.component';

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialModule,
        FormsModule,
    ],
    exports: [
        AudioPlayerComponent,
    ],
    declarations: [AudioPlayerComponent, KnobSliderComponent],
})
export class AudioPlayerModule { }

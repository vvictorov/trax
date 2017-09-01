import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {AudioPlayerModule} from './audio-player/audio-player.module';
import {HttpClientModule} from '@angular/common/http';


import {AudioPlayerService} from './audio-player.service';
import 'hammerjs';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HomeComponent} from './home/home.component';
import {PopularComponent} from './popular/popular.component';
import {MyTracksComponent} from './my-tracks/my-tracks.component';
import {FormsModule} from '@angular/forms';
import {TracksService} from './tracks.service';
import {AccountComponent} from './account/account.component';
import {UsersService} from './users.service';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
        PopularComponent,
        MyTracksComponent,
        AccountComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        BrowserAnimationsModule,
        FormsModule,
        AngularMaterialModule,
        AppRoutingModule,
        AudioPlayerModule,
        HttpClientModule
    ],
    exports: [
        AppComponent
    ],
    providers: [AudioPlayerService, TracksService, UsersService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

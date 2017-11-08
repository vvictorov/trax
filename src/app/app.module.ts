import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './modules/angular-material.module';
import {AudioPlayerModule} from './modules/audio-player.module';
import {HttpClientModule} from '@angular/common/http';


import {AudioPlayerService} from './services/audio-player.service';
import 'hammerjs';

import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {AppRoutingModule} from './app.routing';
import {HomeComponent} from './components/home/home.component';
import {PopularComponent} from './components/popular/popular.component';
import {MyTracksComponent} from './components/my-tracks/my-tracks.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TracksService} from './services/tracks.service';
import {AccountComponent} from './components/account/account.component';
import {UsersService} from './services/users.service';
import {AuthService} from './services/auth.service';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './services/alert.service';
import {AuthGuard} from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {customHttpProvider} from './helpers/custom-http';
import {HttpModule} from '@angular/http';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { TrackComponent } from './components/track/track.component';
import { SearchTracksComponent } from './components/widgets/search-tracks/search-tracks.component';
import {Ng2CompleterModule} from 'ng2-completer';
import { ImageUploadComponent } from './components/widgets/image-upload/image-upload.component';
import {FancyImageUploaderModule} from './components/widgets/fancy-image-uploader/fancy-image-uploader.module';
import {ImageCropperComponent, ImageCropperModule} from 'ng2-img-cropper';
import { ViewTrackComponent } from './components/view-track/view-track.component';
import {BusyModule} from 'angular2-busy';
import {MatDialogModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
        PopularComponent,
        MyTracksComponent,
        AccountComponent,
        AlertComponent,
        LoginComponent,
        RegisterComponent,
        FavoritesComponent,
        TrackComponent,
        SearchTracksComponent,
        ImageUploadComponent,
        ViewTrackComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        BrowserAnimationsModule,
        BusyModule,
        FormsModule,
        AngularMaterialModule,
        ReactiveFormsModule,
        Ng2CompleterModule,
        FancyImageUploaderModule,
        AppRoutingModule,
        AudioPlayerModule,
        HttpClientModule,
        HttpModule,
        ImageCropperModule,
    ],
    exports: [
        AppComponent
    ],
    providers: [
        AudioPlayerService,
        AuthService,
        TracksService,
        UsersService,
        AlertService,
        AuthGuard,
        customHttpProvider,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

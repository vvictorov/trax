import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PopularComponent} from './components/popular/popular.component';
import {MyTracksComponent} from './components/my-tracks/my-tracks.component';
import {AccountComponent} from './components/account/account.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthGuard} from './guards/auth.guard';
import {FavoritesComponent} from './components/favorites/favorites.component';
import {ViewTrackComponent} from './components/view-track/view-track.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'popular', component: PopularComponent},
    {path: 'my-tracks', component: MyTracksComponent, canActivate: [AuthGuard]},
    {path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard]},
    {path: 'track/:slug', component: ViewTrackComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}

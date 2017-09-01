import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PopularComponent } from '../popular/popular.component';
import { MyTracksComponent } from '../my-tracks/my-tracks.component';
import {AccountComponent} from "../account/account.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'my-tracks', component: MyTracksComponent },
  { path: 'account', component: AccountComponent },
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
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { TracksService } from '../tracks.service';
import { Track } from '../track';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TracksService]
})
export class HomeComponent implements OnInit {

  constructor(private TracksService: TracksService) { }
  suggestedTracks: Track[];
  ngOnInit() {
    this.suggestedTracks = this.TracksService.getAllSuggestedTracks();
  }

}

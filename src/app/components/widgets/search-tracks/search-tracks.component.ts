import {Component, OnInit} from '@angular/core';
import {CompleterData, CompleterService} from 'ng2-completer';

@Component({
    selector: 'app-search-tracks',
    templateUrl: './search-tracks.component.html',
    styleUrls: ['./search-tracks.component.css'],
})
export class SearchTracksComponent implements OnInit {

    public searchText: string;
    public dataService: CompleterData;

    constructor(private completerService: CompleterService) {
        this.dataService = completerService
            .remote('/search/tracks/', 'name', 'name')
            .imageField('image.url')
            .descriptionField('user.name');
    }

    ngOnInit() {
    }

}

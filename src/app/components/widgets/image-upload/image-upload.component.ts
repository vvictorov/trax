import {Component, OnInit} from '@angular/core';
import {Ng2FileDropAcceptedFile, Ng2FileDropRejectedFile} from 'ng2-file-drop';

@Component({
    selector: 'app-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

    currentProfileImage: string;
    imageShown: boolean;

    constructor() {
    }

    ngOnInit() {
    }


    // File being dragged has moved into the drop region
    private dragFileOverStart() {
    }

    // File being dragged has moved out of the drop region
    private dragFileOverEnd() {
    }

    // File being dragged has been dropped and is valid
    private dragFileAccepted(acceptedFile: Ng2FileDropAcceptedFile) {
        // Load the image in
        const fileReader = new FileReader();
        fileReader.onload = () => {
            // Set and show the image
            this.currentProfileImage = fileReader.result;
            this.imageShown = true;
        };

        // Read in the file
        fileReader.readAsDataURL(acceptedFile.file);
    }

    // File being dragged has been dropped and has been rejected
    private dragFileRejected(rejectedFile: Ng2FileDropRejectedFile) {
    }

}

import {Component, Input, OnInit} from '@angular/core';
import {AppConfig} from '../../../app.config';
import {FancyImageUploaderOptions} from '../fancy-image-uploader/interfaces';
import {UploadedFile} from '../fancy-image-uploader/uploaded-file';

@Component({
    selector: 'app-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

    @Input() defaultImage;
    constructor() {
    }

    options: FancyImageUploaderOptions = {
        thumbnailHeight: 150,
        thumbnailWidth: 150,
        uploadUrl: AppConfig.API_URL + '/account/uploadPicture',
        authTokenPrefix: 'Bearer ',
        allowedImageTypes: ['image/png', 'image/jpeg', 'image/gif'],
        maxImageSize: 3,
    };

    onUpload(file: UploadedFile) {
    }

    ngOnInit() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        this.options.defaultImage = this.defaultImage;
        this.options.authToken = user.token;
    }
}

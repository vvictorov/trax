import {Component, OnInit} from '@angular/core';
import {FancyImageUploaderOptions, UploadedFile} from 'ng2-fancy-image-uploader';
import {AppConfig} from '../../../app.config';
import {User} from '../../../models/user';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

    user: User;
    constructor(private authService: AuthService) {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        this.options.authToken = user.token;
        this.user = this.authService.getUser();
    }

    options: FancyImageUploaderOptions = {

        thumbnailHeight: 150,
        thumbnailWidth: 150,
        uploadUrl: AppConfig.API_URL + '/account/uploadPicture',
        authTokenPrefix: 'Bearer ',
        allowedImageTypes: ['image/png', 'image/jpeg', 'image/gif'],
        maxImageSize: 3
    };

    onUpload(file: UploadedFile) {
    }

    ngOnInit() {

    }
}

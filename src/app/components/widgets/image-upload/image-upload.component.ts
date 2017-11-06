import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';

@Component({
    selector: 'app-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.css'],
})
export class ImageUploadComponent implements OnInit {

    @Input() currentImage;
    data: any;
    cropperSettings: CropperSettings;
    @ViewChild(ImageCropperComponent) public cropper: ImageCropperComponent;

    constructor() {
        this.cropperSettings = new CropperSettings();
        this.cropperSettings.width = 200;
        this.cropperSettings.height = 200;
        this.cropperSettings.croppedWidth = 200;
        this.cropperSettings.croppedHeight = 200;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 300;
        this.cropperSettings.keepAspect = true;
        this.cropperSettings.rounded = true;
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.cropperClass = 'img-upload-canvas';
        this.cropperSettings.croppingClass = 'img-upload-canvas-init';

        this.data = {};
    }

    public onPhotoUpload($event): void {
        const image = new Image();
        const file: File = $event.target.files[0];
        const myReader: FileReader = new FileReader();

        if (!file) {
            return;
        }

        myReader.onloadend = (loadEvent: any) => {
            image.src = loadEvent.target.result;
            this.cropper.setImage(image);
        };

        myReader.readAsDataURL(file);
    }

    ngOnInit() {
        // const user = JSON.parse(localStorage.getItem('currentUser'));
        // this.options.defaultImage = this.defaultImage;
        // this.options.authToken = user.token;
    }
}

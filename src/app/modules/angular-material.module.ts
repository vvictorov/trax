import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
    MatDialog, MatDialogRef, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule
} from '@angular/material';
import {MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule, MatGridListModule} from '@angular/material';
import {
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule
} from '@angular/material';
import {
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule
} from '@angular/material';
import {MatTableModule, MatSortModule, MatPaginatorModule} from '@angular/material';
import {ImageUploadComponent} from '../components/widgets/image-upload/image-upload.component';

@NgModule({
    imports: [
        MatDialogModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatTabsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatDialogModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        CommonModule
    ],
    exports: [
        MatDialogModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatTabsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatDialogModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
    ],
    entryComponents: [
        ImageUploadComponent
    ],
    declarations: []
})
export class AngularMaterialModule {
}

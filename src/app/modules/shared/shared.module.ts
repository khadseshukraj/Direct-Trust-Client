import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTabsModule, MatMenuModule, MatIconModule,
    MatDialogModule, MatDialog, MatDialogRef, MatFormFieldModule, MatInputModule, MatGridListModule, MatSelectModule, MatDatepickerModule,
    MatNativeDateModule, MAT_DIALOG_DATA, MatSliderModule, MatSlideToggleModule, MatTableModule, MatSortModule, MatRadioModule,
    MatPaginatorModule, MatSidenavModule, MatListModule, MatStepperModule, MatProgressSpinnerModule, MatAutocompleteModule, MatCardModule, MatTooltipModule,
    MatButtonToggleModule, MatBadgeModule, MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions, MatChipsModule
} from '@angular/material';
import { BarRatingModule } from "ngx-bar-rating";
import { ClickOutsideModule } from 'ng-click-outside';

import { CdkTableModule } from '@angular/cdk/table';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

// import { PieChartComponent } from './components/pie-chart/pie-chart.component';
// import { BarChartComponent } from './components/bar-chart/bar-chart.component';
// import { LineChartComponent } from './components/line-chart/line-chart.component';
// import { WorldMapChartComponent } from './components/world-map-chart/world-map-chart.component';
//import { FilterComponent } from './components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { BasicComponent } from './components/filter/basic/basic.component';
//import { AdvancedComponent } from './components/filter/advanced/advanced.component';
import { AngularGridComponent } from './components/angular-grid/angular-grid.component';
import { RouterModule } from '@angular/router';
import { CurrencyFormatterDirective } from './directives/currency-formatter.directive';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { FooterComponent } from '../../layout/components/footer/footer.component';
import { HeaderComponent } from '../../layout/components/header/header.component';
import { SidebarComponent } from '../../layout/components/sidebar/sidebar.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthorizationService } from '../../core/services/authorization.service';
import { AuthGuardService } from '../../core/services/auth-guard.service';
import { StorageHelper } from '../../core/services/storage-helper.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../../core/services/auth-interceptor.service';
import { ApiService } from '../../core/services/api.service';
import { LoginService } from '../../core/services/login.service';
import { ModalComponent } from './components/modal/modal.component';
import { WholenumberDirective } from './directives/wholenumber.directive';
import { UniquePipe } from "../shared/pipes/unique.pipe";
import { LimitCharacters } from "../shared/pipes/limit-characters.pipe";
import { DecimalFormatterDirective } from './directives/decimal-formatter.directive';
import { DecimalTwoPlaceFormatterDirective } from './directives/decimal-two-place-formatter.directive';
// import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
// import { FileUploadModalComponent } from './components/file-upload/file-upload-modal.component';
import { saveAs } from 'file-saver';
import { ReversePipe } from './pipes/reverse.pipe';
// import { NotificationComponent } from './components/notification/notification.component';
import { DecimalFormatterParamDirective } from './directives/decimal-formatter-param.directive';
// import { FileDownloadComponent } from './components/file-download/file-download.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { DecimalwithoutzeroPipe } from './pipes/decimalwithoutzero.pipe';
import { PendingChangesGuard } from 'src/app/core/services/pending-changes.guard';
import { DecimalFormatterWithPrecisionDirective } from './directives/decimal-formatter-with-precision.directive';
import { SelectAutocompleteModule } from 'mat-select-autocomplete';
import { XMLPipe } from "../shared/pipes/xml.pipe";
import { XMLHighlightPipe } from "../shared/pipes/xml-highlight.pipe";
import { PhonePipe } from "../shared/pipes/phone.pipe";
import { ArchwizardModule } from 'angular-archwizard';


import {
    HighlightModule,
    HIGHLIGHT_OPTIONS,
    HighlightOptions } from 'ngx-highlightjs';

import { HighlightDirective } from './directives/highlightText.directive';
const globalRippleConfig: RippleGlobalOptions = {
    disabled: true,
    animation: {
        enterDuration: 300,
        exitDuration: 0
    }
};
export function getHighlightLanguages() {
    return {
        //typescript: () => import('highlight.js/lib/languages/typescript'),
        //css: () => import('highlight.js/lib/languages/css'),
        xml: () => import('highlight.js/lib/languages/xml')
    };
}


@NgModule({
    declarations: [
        // PieChartComponent,
        // BarChartComponent,
        // LineChartComponent,
        // WorldMapChartComponent,
        // FilterComponent,
        // BasicComponent,
        // AdvancedComponent,
        AngularGridComponent,
        CurrencyFormatterDirective,
        NumberOnlyDirective,
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        ModalComponent,
        WholenumberDirective,
        UniquePipe,
        LimitCharacters,
        DecimalFormatterDirective,
        DecimalTwoPlaceFormatterDirective,
        DecimalFormatterParamDirective,
        // FileUploadComponent,
        DragAndDropDirective,
        // FileUploadModalComponent,
        ReversePipe,
        // NotificationComponent,
        // FileDownloadComponent,
        DecimalwithoutzeroPipe,
        DecimalFormatterWithPrecisionDirective,
        XMLPipe,
        XMLHighlightPipe,
        HighlightDirective,
        PhonePipe
       
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatTabsModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatTableModule,
        CdkTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSidenavModule,
        MatListModule,
        MatStepperModule,
        RouterModule,
        HttpClientModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        ReactiveFormsModule, MatCardModule, MatTooltipModule, MatRadioModule, MatButtonToggleModule,
        BarRatingModule,
        MatBadgeModule,
        MultiSelectModule,
        NgxDatatableModule,
        ClickOutsideModule,
        SelectAutocompleteModule,
        ArchwizardModule,
        HighlightModule,
        MatChipsModule
      
    ],
    exports: [
        CommonModule,
        // PieChartComponent,
        // BarChartComponent,
        // WorldMapChartComponent,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatTabsModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
        FormsModule,
        MatFormFieldModule,
        //FilterComponent,
        MatInputModule,
        MatGridListModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        //BasicComponent,
        //AdvancedComponent,
        MatSliderModule,
        MatSlideToggleModule,
        MatTableModule,
        AngularGridComponent,
        CdkTableModule,
        RouterModule,
        MatSortModule,
        MatPaginatorModule,
        MatSidenavModule,
        MatListModule,
        MatStepperModule,
        CurrencyFormatterDirective,
        NumberOnlyDirective,
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        HttpClientModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        ReactiveFormsModule, MatCardModule, MatTooltipModule, MatRadioModule,
        WholenumberDirective,
        UniquePipe,
        LimitCharacters,
        DecimalFormatterDirective,
        DecimalFormatterParamDirective,
        DecimalTwoPlaceFormatterDirective,
        //FileUploadComponent,
        DragAndDropDirective,
        //FileUploadModalComponent,
        ReversePipe,
        MatButtonToggleModule,
        BarRatingModule,
        //FileDownloadComponent,
        MatBadgeModule,
        MultiSelectModule,
        DecimalwithoutzeroPipe,
        DecimalFormatterWithPrecisionDirective,
        NgxDatatableModule,
        ClickOutsideModule,
        SelectAutocompleteModule,
        XMLPipe,
        XMLHighlightPipe,
        HighlightDirective,
        MatChipsModule,
        PhonePipe
       
    ],
    entryComponents: [ModalComponent],
    providers: [DecimalPipe, CookieService, AuthorizationService, AuthGuardService, StorageHelper, ApiService, LoginService, PendingChangesGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true,
        },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: <HighlightOptions>{
                lineNumbers: true
            }
        }
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

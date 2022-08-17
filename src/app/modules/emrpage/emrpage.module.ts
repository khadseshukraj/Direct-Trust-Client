import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { EMRPageRoutingModule } from './emrpage-routing.module';
import { EMRaddviewComponent,PersonalizationDialog } from './component/emraddview/emraddview.component';
import { SharedModule } from '../shared/shared.module';
import { ReferralService } from './services/referral.service';

import { IncomingmessageComponent } from './component/incomingmessage/incomingmessage.component';
import { DtPatientReferralWIPComponent } from './component/dt-patient-referral-wip/dt-patient-referral-wip.component';
import { DTPocNotFoundComponent } from './component/dtpoc-not-found/dtpoc-not-found.component';
import { DtPatientReferralProcessedComponent } from './component/dt-patient-referral-processed/dt-patient-referral-processed.component';
import { DTIncomingMessageDetailComponent, XMLViewDialog, PatientDialog, ReferrerDialog } from './component/dtincoming-message-detail/dtincoming-message-detail.component';
import { DtClinicUserMappingComponent } from './component/dt-clinic-user-mapping/dt-clinic-user-mapping.component';
import { ArchwizardModule } from 'angular-archwizard';
import { DtSentPocComponent } from './component/dt-sent-poc/dt-sent-poc.component';
import { DtPlanCareProcessedComponent } from './component/dt-plan-care-processed/dt-plan-care-processed.component'
import { FileUploadModule } from 'ng2-file-upload';
import {
    HighlightModule,
    HIGHLIGHT_OPTIONS,
    HighlightOptions
} from 'ngx-highlightjs';
export function getHighlightLanguages() {
    return {
        //typescript: () => import('highlight.js/lib/languages/typescript'),
        //css: () => import('highlight.js/lib/languages/css'),
        xml: () => import('highlight.js/lib/languages/xml')
    };
}


@NgModule({
    declarations: [EMRaddviewComponent, PersonalizationDialog, IncomingmessageComponent, DtPatientReferralWIPComponent,
        DtSentPocComponent, DtPlanCareProcessedComponent, DTPocNotFoundComponent, DtPatientReferralProcessedComponent,
        DTIncomingMessageDetailComponent, DtClinicUserMappingComponent, XMLViewDialog, PatientDialog, ReferrerDialog],
  imports: [
    CommonModule,
    EMRPageRoutingModule,
      SharedModule,
      ArchwizardModule,
      HighlightModule,
      FileUploadModule

  ],
    entryComponents: [PersonalizationDialog, XMLViewDialog, PatientDialog, ReferrerDialog],
   providers: [
       ReferralService, 
       DatePipe,
       {
           provide: HIGHLIGHT_OPTIONS,
           useValue: <HighlightOptions>{
               lineNumbers: true
           }
       }
     
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class EMRPageModule { }

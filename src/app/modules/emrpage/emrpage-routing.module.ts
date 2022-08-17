import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EMRaddviewComponent } from './component/emraddview/emraddview.component';
import { IncomingmessageComponent } from './component/incomingmessage/incomingmessage.component';
import { DtPatientReferralWIPComponent } from './component/dt-patient-referral-wip/dt-patient-referral-wip.component';
import { DTPocNotFoundComponent } from './component/dtpoc-not-found/dtpoc-not-found.component';
import { DtPatientReferralProcessedComponent } from './component/dt-patient-referral-processed/dt-patient-referral-processed.component';
import { DTIncomingMessageDetailComponent } from './component/dtincoming-message-detail/dtincoming-message-detail.component';
import { DtClinicUserMappingComponent } from './component/dt-clinic-user-mapping/dt-clinic-user-mapping.component';
import { DtSentPocComponent } from './component/dt-sent-poc/dt-sent-poc.component';
import { DtPlanCareProcessedComponent } from './component/dt-plan-care-processed/dt-plan-care-processed.component';

const routes: Routes = [
    { path: 'referrer', component: EMRaddviewComponent },
    { path: 'incomingmessage', component: IncomingmessageComponent },
    { path: 'incomingmessagedetail/:id/:action', component: DTIncomingMessageDetailComponent },//canActivate: [ContractGuardService], canDeactivate: [PendingChangesGuard] 
    { path: 'wipmessage', component: DtPatientReferralWIPComponent },
    { path: 'dtpocnotfoundmessage', component: DTPocNotFoundComponent },
    { path: 'processedmessages', component: DtPatientReferralProcessedComponent },
    { path: 'sentPocs', component: DtSentPocComponent },
    { path: 'ProcessedPocs', component: DtPlanCareProcessedComponent },
    { path: 'clinicmapping', component: DtClinicUserMappingComponent },
    { path: '', component: EMRaddviewComponent }
  
];

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EMRPageRoutingModule { }

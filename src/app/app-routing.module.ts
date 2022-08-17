import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { UnauthorizedComponent } from './core/components/unauthorized/unauthorized.component';
import { LogoutComponent } from './core/components/logout/logout.component';
import { AuthGuardService } from './core/services/auth-guard.service';



const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'referrer', loadChildren: './modules/emrpage/emrpage.module#EMRPageModule', canLoad: [AuthGuardService] },
    { path: 'referrer/incomingmessage', loadChildren: './modules/emrpage/emrpage.module#EMRPageModule', canLoad: [AuthGuardService] },
    { path: 'referrer/wipmessage', loadChildren: './modules/emrpage/emrpage.module#EMRPageModule', canLoad: [AuthGuardService] },
    { path: 'referrer/dtpocnotfoundmessage', loadChildren: './modules/emrpage/emrpage.module#EMRPageModule', canLoad: [AuthGuardService] },
    { path: 'referrer/processedmessages', loadChildren: './modules/emrpage/emrpage.module#EMRPageModule', canLoad: [AuthGuardService] },
    { path: 'referrer/clinicmapping', loadChildren: './modules/emrpage/emrpage.module#EMRPageModule', canLoad: [AuthGuardService] },
    { path: 'referrer/sentPocs', loadChildren: './modules/emrpage/emrpage.module#EMRPageModule', canLoad: [AuthGuardService] },
    { path: 'referrer/ProcessedPocs', loadChildren: './modules/emrpage/emrpage.module#EMRPageModule', canLoad: [AuthGuardService] },

    //{ path: 'incomingmessage', loadChildren: './modules/emrpage/emrpage.module#EMRPageModule' },
    //{ path: 'projects', loadChildren: './modules/project-creation/project.module#ProjectModule', canLoad: [AuthGuardService] },
    // { path: 'backupbuyers', loadChildren: './modules/backup-buyer/backup-buyer.module#BackupBuyerModule', canLoad: [AuthGuardService] },
    // { path: 'reports', loadChildren: './modules/reports/reports.module#ReportsModule', canLoad: [AuthGuardService] },
    { path: 'actions', loadChildren: './modules/actions/actions.module#ActionsModule', canLoad: [AuthGuardService]},
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: 'logout/:autoLogout', component: LogoutComponent },
   
    // { path: 'support', loadChildren: './modules/support/support.module#SupportModule', canLoad: [AuthGuardService] },
    //{ path: 'help', loadChildren: './modules/help/help.module#HelpModule', canLoad: [AuthGuardService] },
    // { path: 'contracts', loadChildren: './modules/contracts-creation/contracts.module#ContractsModule', canLoad: [AuthGuardService] },
    // { path: 'commodityImpact', loadChildren: './modules/commodity-impact/commodity-impact.module#CommodityImpactModule', canLoad: [AuthGuardService] },
    // { path: 'figdashboard', loadChildren: './modules/fig-dashboard/fig-dashboard.module#FigDashboardModule', canLoad: [AuthGuardService] },
    //{ path: 'figmasterdatamaintenance', loadChildren: './modules/fig-master-data-maintenance/fig-master-data-maintenance.module#FIGMasterDataMaintenanceModule', canLoad: [AuthGuardService] },
   
    { path: 'index.html', redirectTo: '/index.html', pathMatch: 'full' },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

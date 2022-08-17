import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './components/action/action.component';
import { FigRunPricesComponent } from './components/fig-run-prices/fig-run-prices.component';
import { RunPricesGuardService } from './run-prices-guard.service';

const appRoutes: Routes = [
    { path: 'actions', component: ActionComponent },
    { path: '', component: ActionComponent },
    { path: 'figrunprices', component: FigRunPricesComponent, canActivate: [RunPricesGuardService] }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [RouterModule]
})
export class ActionsRoutingModule { }

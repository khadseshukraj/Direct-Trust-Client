import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionComponent } from './components/action/action.component';
import { ActionCardComponent } from './components/action-card/action-card.component';
import { ActionsRoutingModule } from './actions-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FIGRunPricesService } from './services/fig-run-prices.service';
import { FigRunPricesComponent } from './components/fig-run-prices/fig-run-prices.component';
@NgModule({
    declarations: [ActionComponent, ActionCardComponent, FigRunPricesComponent],
    imports: [
        ActionsRoutingModule,
        SharedModule
        
    ], providers: [
        FIGRunPricesService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ActionsModule { }

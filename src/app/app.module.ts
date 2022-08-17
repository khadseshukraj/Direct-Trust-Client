import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { UserIdleModule } from 'angular-user-idle';
import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { LogoutComponent } from './core/components/logout/logout.component';
import { UnauthorizedComponent } from './core/components/unauthorized/unauthorized.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {  ConfigService } from './core/services/config';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LogoutComponent,
        UnauthorizedComponent
        
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        SharedModule,        
        UserIdleModule.forRoot({ idle: 1080, timeout: 120, ping: 0 }),
        PopoverModule.forRoot(),
        PaginationModule.forRoot(),
    ],
    providers: [ConfigService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

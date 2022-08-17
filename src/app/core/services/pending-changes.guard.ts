import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalStaticClass } from '../../modules/shared/components/modal/ModalStaticClass';
import { MatDialog } from '@angular/material';
import { map } from 'rxjs/operators';

export interface ComponentCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable()
export class PendingChangesGuard implements CanDeactivate<ComponentCanDeactivate> {

    constructor(private modalDialog: MatDialog) {

    }
    canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> {
        // if there are no pending changes, just allow deactivation; else confirm first
        return component.canDeactivate() ?
            true :
            // NOTE: this warning message will only be shown when navigating elsewhere within your angular app;
            // when navigating away from your angular app, the browser will show a generic warning message
            ModalStaticClass.show(this.modalDialog, "", "Warning", "Information you have might have entered on this page has not been saved and will be lost. Please save before navigating away from this page.", 1, false, 1, "400px").pipe(map(result => {
                return result;               
            }));
    }
}

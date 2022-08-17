import { MatDialog } from '@angular/material';
import { ModalComponent } from './modal.component';

export class ModalStaticClass {
  static show(dialog: MatDialog, message, title = "Alert", information = "", button = 0, allow_outside_click = false, style = 0, width = "200px", messageIcon = 2, panelClass?: "panel-container") {
    const dialogRef = dialog.open(ModalComponent, {
      data: {
        title: title || "Alert",
        message: message,
        information: information,
        button: button || 0,
        style: style || 0,
        allow_outside_click: allow_outside_click || false,
        messageIcon: messageIcon
      },
      width: width,
      panelClass: panelClass
    });
    return dialogRef.afterClosed();
  }
}

export enum MessageBoxButton {
  Ok = 0,
  OkCancel = 1,
  YesNo = 2,
  AcceptReject = 3
}

export enum MessageBoxStyle {
  Simple = 0,
  Full = 1
};

export enum MessageIcon {
  Success = 0,
  Error = 1,
  Info = 2,
  Confirmation = 3
}

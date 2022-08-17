import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IActionCard } from '../../interfaces/iaction-cards';
import { SidebarService } from 'src/app/layout/services/sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class ActionCardComponent implements OnInit {

  @Input('action-card') actionCard: IActionCard;
  bgColor: string = "";
  fontColor: string = "";

  constructor(private _sideBarService: SidebarService, private _router: Router) { }

  ngOnInit() {
      this._sideBarService.setActiveState("actions");
      this._sideBarService.editSidebarShowValue(true);
  }

  goToAction(route: string) {
    this._router.navigate([route]);
    //else if (route == "commodityImpact") {        
    //}
    //else if (route == "figmasterdatamaintenance") {
    //    this._router.navigate(['figmasterdatamaintenance']);
    //}
    //else if (route == "figmasterdatamaintenance") {
    //    this._router.navigate(['figmasterdatamaintenance']);
    //}
  }

  setHover(actionCard: IActionCard) {
    this.bgColor = actionCard.IconBgColor;
    this.fontColor = actionCard.IconBgColor;
    actionCard.IconBgColor = "#ffffff";
  }

  removeHover(actionCard: IActionCard) {
    this.bgColor = "";
    actionCard.IconBgColor = this.fontColor;
  }

}

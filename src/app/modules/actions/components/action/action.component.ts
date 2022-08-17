import { Component, OnInit } from '@angular/core';
import { IActionCard } from '../../interfaces/iaction-cards';
import { ApplicationHeaderService } from 'src/app/layout/services/application-header.service';
import { StorageHelper } from 'src/app/core/services/storage-helper.service';
import { SidebarService } from 'src/app/layout/services/sidebar.service';
import { IUserDetails } from '../../../../modules/shared/interfaces/icommon';
@Component({
    selector: 'app-action',
    templateUrl: './action.component.html',
    styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
    config: any;
    selectedRole: string = "";
    loggedInUserDetails: IUserDetails = {};
    constructor(private _headerService: ApplicationHeaderService, private _storageHelper: StorageHelper, private _sidebarService: SidebarService)
    {
      
    }

    ngOnInit() {
        this._storageHelper.setItem("currentState", "actions");
        this._sidebarService.setActiveState("actions");

        if (this._storageHelper.getItem("selectedRole") != null && this._storageHelper.getItem("selectedRole") != undefined && this._storageHelper.getItem("selectedRole") != "") {
            this.selectedRole = this._storageHelper.getItem("selectedRole");
        }
        if (this._storageHelper.getItem("loggedInUserDetails") != null) {
            this.loggedInUserDetails = this._storageHelper.getItem("loggedInUserDetails");
        }
        debugger;
        this.adminActionCardList = [
            {
                Title: "Incoming Messages", Description: "Incoming Messages to be Processed",
                IconClass: "mail-unread-outline", IconBgColor: "#1dd1a1", Route: "/referrer/incomingmessage", AllowedRoles: ["system administrator", "front desk"]
            },
            {
                Title: "Referrer Maintenance", Description: "Add/Modify/Delete DirectTrust Referrer Details",
                IconClass: "people-outline", IconBgColor: "#70a1ff", Route: "/referrer",
                AllowedRoles: ["system administrator"]
            },
            {
                Title: "Work in progress Messages", Description: "Work in progress Messages",
                IconClass: "icon-projects", IconBgColor: "#ff6b6b", Route: "/referrer/wipmessage",
                AllowedRoles: [""]
            },
            {
                Title: "Direct Trust POC Not Found Messages", Description: "Direct Trust POC Not Found Messages",
                IconClass: "icon-send-email", IconBgColor: "#FF5733", Route: "/referrer/dtpocnotfoundmessage",
                AllowedRoles: [""]
            },
            {
                Title: "Referral Processed", Description: "Direct Trust Processed Messages",
                IconClass: "mail-open-outline", IconBgColor: "#FF5733", Route: "/referrer/processedmessages",
                AllowedRoles: ["front desk"]
            },
            {
                Title: "Clinic Mapping", Description: "Clinic Mapping",
                IconClass: "medkit-outline", IconBgColor: "#FFCA33", Route: "/referrer/clinicmapping",
                AllowedRoles: ["system administrator"]
            },

             {
                Title: "POC's Sent For Approval", Description: "POC's Sent For Approval",
                 IconClass: "cloud-upload-outline", IconBgColor: "#4CFF33", Route: "/referrer/sentPocs",
                AllowedRoles: ["front desk"]
            },
            {
                Title: "POC's Processed", Description: "POC's Processed",
                IconClass: "checkmark-circle-outline", IconBgColor: "#3368FF", Route: "/referrer/ProcessedPocs",
                AllowedRoles: ["front desk"]
            },
        ];

        this.actionCardList = this.adminActionCardList;

        if (this.loggedInUserDetails.Roles.trim().toLowerCase() == "front desk") {
            this.actionCardList = this.adminActionCardList.filter(x => x.AllowedRoles.some(y => y.toLowerCase() == "front desk"));
        }
        else {
            this.actionCardList = this.adminActionCardList.filter(x => x.AllowedRoles.some(y => y.toLowerCase() == "system administrator"));;
        }
    }


    adminActionCardList: IActionCard[];
    actionCardList: IActionCard[];
    figActionCardList: IActionCard[];
    receptionistActionCardList: IActionCard[];

}

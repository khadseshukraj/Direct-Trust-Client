//import { string, number } from '@amcharts/amcharts4/core';
// import { iBasicFilter } from './ifilter';

export interface IDropdown {
    ID?: string,
    Value?: string,
    selected?: boolean,
    OrderByColumn1?: string,
    OrderByColumn2?: string
}

export interface IFiscalYear {
    ForecastValueToDisplay?: string,
    FiscalYear?: string,
    BuyerWindowEndDate?: string,
    BuyerWindowStartDate?: string,
    E2E_ForecastCycle?: string,
    ForecastingEnd?: string,
    ForecastingStart?: string,
    Lower_Value?: string,
    MultiyearProject_ForecastingEnd?: string,
    MultiyearProject_ForecastingStart?: string,
    Upper_Value?: string,
    ForecastCyleProjectType?: string
    AdjustmentWindowStartDate?: string,
    AdjustmentWindowEndDate?: string,
}

export interface IUserDetails {
    CommonName?: string,
    LoginName?: string,
    EmailId?: string,
    TNumber?: string,
    Roles?: string
    
}

export interface ApiResponse {
    Result: any[],
    Status: number;
    Message: string;
    NewId: string;
    ErrorData?: any;
}

export interface IChartData {
    Key?: string,
    Value?: number,
    SubRegionId?: string,
    BUId?: string,
    IsSelected?: boolean
}
export interface iExcelParams {
    FiscalYear?: string,
    ForecastCycle?: string,
    BackupBuyer?: string,
    SpendPoolHighID?: string,
    SpendPoolHighValue?: string,
    PurchasingGroupID?: string,
    PurchasingGroupValue?: string,
    selectedRole?: string,
    ProjectType?: string,
    TNumber?: string
}

export interface IUserRating {
    LoginName?: string,
    Rating?: number,
    Comments?: string
}

export interface iNotificationViewModel {
    ADJToREGNotifications?: iADJToREGNotificationViewModel[]
}

export interface iADJToREGNotificationViewModel {
    NotificationID?: number,
    ADJProjectID?: string,
    ADJProjectName?: string,
    REGProjectID?: string,
    REGProjectName?: string,
    ADJDescription?: string,
    CurrentValue?: number,
    AdjustedValue?: number,
    NewValue?: number,
    IsRead?: boolean,
    ReceivedOn?: Date,
   // BasicFilter?: iBasicFilter,
    CreatedBy?: string,
    Status?: string,
    Comment?: string
}

export interface iReadNotification {
    NotificationID?: number,
    TNumber?: string
}

export interface iApproveRejectADJToREGNotification {
    NotificationID?: number,
    TNumber?: string,
    ADJProjectID?: string,
    REGProjectID?: string,
    Status?: boolean,
    Comment?: string,
    selectedRole?: string
}

export interface IStringResponse {
    MessageType?: string,
    Message?: string
}

export interface IMultiSelectDropdown {
    display?: string,
    value?: string
}
export interface IUserAuthenticate {
    UserID?: string;
    Password?: string,
    Role?: string,
    FirstName?: string,
    LastName?: string,
    Email?:string
}
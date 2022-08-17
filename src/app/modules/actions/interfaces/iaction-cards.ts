import { IDropdown } from '../../shared/interfaces/icommon';
export interface IActionCard {
  Title?: string,
  Description?: string,
  IconClass?: string,
  IconBgColor?: string,
  Route?: string,
  AllowedRoles?: string[]
}
export interface IFIGRunPricesViewModel {
    FigCycle?: string,
    IsFigToFdd?: boolean
}

export interface IFIGRunPricesDropdowns {
    FigCycle?: IDropdown[];
}
export interface IFigCycleYear {
    FiscalYear?: string,
    FigCycle?: string
    BuyerWindowStartDate?: Date,
    BuyerWindowEndDate?: Date,
    SequenceNumber?: number,
    StdPriceLoadDate?: Date,
    Calendar?: string,
    ForecastingStart?: string,
    ForecastingEnd?: string,
    ShortDescription?: string,
    LowerFiscalYearToBeDisplayed?: string,
    UpperFiscalYearToBeDisplayed?: string
}
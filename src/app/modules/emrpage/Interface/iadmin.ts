import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }

  export interface IDirectTrustReferrer {
    RefID?: string;
    RefEmailID?: number;
    Institute_Name?: number;
    DT_Email_Address?: string;

  }
  export interface IDirectTrustReferrers {
    DirectTrustReferrers?: IDirectTrustReferrer[];
    TotalRecords?: number,
    TotalPages?: number,
    CurrentPage?: number,
    PageSize?: number,
    MaxPageSize?: number,
}
export interface IDirectTrustReferrerDelete {
    RefID?: string;
    RefEmailID?: number;
}

export interface IDTProcessedPOCSList {

    pocProcessed?: IDTProcessedMessage[];
    pocDeclined?: IDTProcessedMessage[];

}
export interface IsentPocs {

    sentPocs?: IsentPoc[];
    TotalRecords?: number,
    TotalPages?: number,
    CurrentPage?: number,
    PageSize?: number,
    MaxPageSize?: number,


}
export interface IsentPoc {

    ID: number,
    From: string,
    To: string,
    Subject: string,
    MessageBody: string,
    Patient_ID?: number,
    Note_ID?: number,
    Approval_Received_Timestamp?: Date,
    Sent_Timestamp?: Date
    InComingMessageID?: number
}

export interface IIncomingMessage {
    ID?: number;
    From?: string;
    To?: string;
    Subject?: string;
    MessageBody?: string;
    Received?: Date;
    MessageProcessed?: boolean;
    IsRead?: boolean;

}

export interface IIncomingMessageDetail {
    ID?: number;
    From?: string;
    To?: string;
    Subject?: string;
    MessageBody?: string;
    Received?: Date;
    MessageProcessed?: boolean;
    Operation?: string;
    Action?: string;
    XMLattachment?: IIncomingMessageXML[];
    XMLContent?: IIncomingMessageXMLContent[];
}
export interface IIncomingMessageXML {
    InComingMessageID?: number,
    FileName?: string,
    FileData?: string,
    Username?: string,
    IsSelected?: boolean,
    XMLContent?: IIncomingMessageXMLContent;
}
export interface IIncomingMessageXMLContent {
    firstName?: string;
    lastName?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    birthTime?: Date;
    streetAddressLine?: string;
    maritalStatus?: string;
    title?: string;
    phoneHP?: string;
    phoneWP?: string;
    phoneMC?: string;
    referrerClinic?: string;
    mrn?: string;
    doctorInfo?: string;
    npinumber?: string;
}
export interface IIncomingMessagePatientPage {
    IncomingMessagePatients?: IIncomingMessagePatient[];
    TotalRecords?: number,
    TotalPages?: number,
    CurrentPage?: number,
    PageSize?: number,
    MaxPageSize?: number,
}
export interface IIncomingMessagePOCPage {
    IncomingMessagePOCs?: IIncomingMessagePOC[];
    TotalRecords?: number,
    TotalPages?: number,
    CurrentPage?: number,
    PageSize?: number,
    MaxPageSize?: number,
}
export interface IIncomingMessagePatient {
    Prowid?: number,
    FirstName?: string,
    LastName?: string,
    Gender?: string,
    BirthDate?: Date,
    Address1?: string,
    City?: string,
    State?: string,
    ZipCode?: string,
    CellPh?: string,
    TherapistName?: string,
    Note?: string,
    MRNNumber?:string
}
export interface IIncomingMessagePOC {
    Docrowid?: number,
    PTrowid?: number,
    NoteType?: string,
    Signed?: boolean,
    SignedDate?: Date,
    PDFName?: string,
    createdby?: string,
    CreatedDate?: Date,
    DateOfService?: Date,
    ApprovalSent?: Date,
    TherapistName?: string,
    Attachment?: Blob
}
export interface IIncomingMessageOperation{
    Operation?: string,
    DT_Patients?: IIncomingMessagePatient[],
    DT_POCs?: IIncomingMessagePOC[];
}



export interface IactionsforXML {
    value: string;
    viewValue: string;
}
export interface IIncomingMessageProcessed {
    InComingMessageID?: number,
    AttachmentID?: number,
    FileName?: string,
    FileData?: string,
    Action?: string,
    Username?:string
}

export interface IIncomingMessageXMLcollection {
    XMLattachment?: IIncomingMessageXML[],
    TotalRecords?: number,
    TotalPages?: number,
    CurrentPage?: number,
    PageSize?: number,
    MaxPageSize?: number

}
export interface IIncomingMessages {
    IncomingMessages?: IIncomingMessage[];
    TotalRecords?: number,
    TotalPages?: number,
    CurrentPage?: number,
    PageSize?: number,
    MaxPageSize?: number,
}
export interface IWIPDTPatient {
    ID?: number;
    FirstName?: string;
    LastName?: string;
    City?: string;
    State?: string,
    DOB?: Date,
    MatchFound?: boolean,
    ReceptionistComments?: string
   
   
}
export interface IDTProcessedMessage {
   
    From?: string;
    To?: string;
    Subject?: string;
    MessageBody?: string,
    Received_TimeStamp?: boolean,
    Processed_TimeStamp?: string
    PatientID?: number,
    Institute_ID?: number,
    Status?: string,
    UserID?: string,
    ID?: string
    IncomingMessageID?:number

}
export interface IDTProcessedMessages {

    processeddtmessages?: IDTProcessedMessage[];
    TotalRecords?: number,
    TotalPages?: number,
    CurrentPage?: number,
    PageSize?: number,
    MaxPageSize?: number,


}

export interface IProcessedDTPatients {
    processeddtmessages?: IProcessedDTPatient[];
    TotalRecords?: number,
    TotalPages?: number,
    CurrentPage?: number,
    PageSize?: number,
    MaxPageSize?: number,
}
export interface IWIPDTPatients {
    wipdtmessages?: IWIPDTPatient[];
    TotalRecords?: number,
    TotalPages?: number,
    CurrentPage?: number,
    PageSize?: number,
    MaxPageSize?: number,
}
export interface IUserAuthenticate {
    UserID?: string;
    Password?: string,
    Role?: string,
    FirstName?: string,
    LastName?: string
}

export interface IDTPOCNotFoundMessage {
    ID?:number,
    Patient_ID?: number;
    Note_ID?: number;
    Institute_ID?: number;
    POC_Status?: string;
    
}
export interface IDTPOCNotFoundMessages {
    IdtpocnotfoundMessages?: IDTPOCNotFoundMessage[];
    TotalRecords?: number,
    TotalPages?: number,
    CurrentPage?: number,
    PageSize?: number,
    MaxPageSize?: number,
}
export interface IProcessedDTPatient {
    ID?: number;
    FirstName?: string;
    LastName?: string;
    City?: string;
    State?: string,
    DOB?: Date,
    MatchFound?: boolean,
    ReceptionistComments?: string


}
export interface IProcessedDTPatients {
    processeddtmessages?: IProcessedDTPatient[];
    TotalRecords?: number,
    TotalPages?: number,
    CurrentPage?: number,
    PageSize?: number,
    MaxPageSize?: number,
}
export interface IDT_ClinicMapping {
    ClinicNo?: string;
    ClinicName?: string;
    EmailId?: string;
    MappingExist?: boolean;
}
export interface IDT_ClinicMappings {
    clinicmappings?: IDT_ClinicMapping[];
    TotalRecords?: number,
    TotalPages?: number,
    CurrentPage?: number,
    PageSize?: number,
    MaxPageSize?: number,
}
export interface IDT_Clinics {
    ClinicName?: string;
    ClinicNo?: string;
  
}
export interface IAcceptPatient {
    InpatientID?: number;
    InincomingmessageID?: number;
    InUserID?: string;
    status?: string;
    AttachmentID?: number;
    ReferrerID?: number;
}
export interface IRejectPatient {
    InpatientID?: number;
    InincomingmessageID?: number;
    InUserID?: string;
    AttachmentID?: number;

}
export interface CheckedMessages {
    incomingmessageIds?: number[];
    operation?: string;
   

}
export interface IDTMessageSent {
    ID?: number,
    From?: string,
    To?: string,
    Cc?: string,
    Subject?: string,
    MessageBody?: string,
    Sent?: Date,
    Attachment?: ISentMessageAttachment[];
}
export interface ISentMessageAttachment {
    ID?: number,
    MessageSentID?: number,
    FileName?: string,
    FileData?: string,
}
export interface IDTMessageSentList {
    message?: IDTMessageSent[];
    TotalRecords?: number,
    TotalPages?: number,
    CurrentPage?: number,
    PageSize?: number,
    MaxPageSize?: number,
}
export interface IReferrer {
    FirstName?: string;
    LastName?: string;
    Email?: string;
    ReferrerID?: number;
    NPINumber?: string;
    Address?: string;
    Phone?: string;
}
export interface IReferrerList {
    rehabReferrers?: IReferrer[];
    TotalRecords?: number,
    TotalPages?: number,
    CurrentPage?: number,
    PageSize?: number,
    MaxPageSize?: number,
}

export interface IResponseEntity {
    Data?: string;
    ErrorCode?: string,
    ErrorMessage?: string
    
}
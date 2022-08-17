import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import {
    IDTProcessedPOCSList,IDirectTrustReferrer, IDirectTrustReferrers, IDirectTrustReferrerDelete, IIncomingMessage, IIncomingMessages,
    IWIPDTPatient, IWIPDTPatients, IDTPOCNotFoundMessages, IDTPOCNotFoundMessage, IProcessedDTPatients, IProcessedDTPatient,
    IIncomingMessageDetail, IIncomingMessageXML, IIncomingMessageProcessed, IIncomingMessageOperation, IIncomingMessagePOC,
    IIncomingMessagePatient, IIncomingMessagePOCPage, IIncomingMessagePatientPage, IDT_ClinicMappings, IDT_Clinics, IDT_ClinicMapping, IAcceptPatient, IRejectPatient,
    IDTProcessedMessage, CheckedMessages, IsentPoc, IDTMessageSent, IReferrerList, IReferrer
} from '../../emrpage/Interface/iadmin';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ReferralService {

    constructor(public _apiService: ApiService) { }
   
    getReferrerList(): Observable<IDirectTrustReferrers> {
        //return this._apiService.getDataWithParams("FIGMasterData/GetVersionDropdown", {
        //    tNumber: tNumber,
        //    userRole: userRole
        //});
        return this._apiService.getData("DirectTrustReferrerList");
    }
    saveReferrerDetails(referrerDetails: IDirectTrustReferrer[]): Observable<boolean> {
        return this._apiService.postData("CreateReferrer", referrerDetails);
    }
    processIncomingMesssage(processdata: IIncomingMessageProcessed): Observable<IIncomingMessageOperation> {
        return this._apiService.postData("ProcessIncomingMessage", processdata);
    }
    getPOCList(patientid: number, operation: string): Observable<IIncomingMessageOperation[]> {
        return this._apiService.getDataWithParams("PatientPOCs", {
            patientid: patientid,
            operation: operation
        });
    }
    ProcessPOC(patientid: number, operation: string, InComingMessageID: number, noteId: number, Filename: string, username: string, attachmentID: number): Observable<any> {
        return this._apiService.getDataWithParams("SavePOC", {
            patientId: patientid,
            operation: operation,
            InComingMessageID: InComingMessageID,
            noteId: noteId,
            Filename: Filename,
            username: username,
            attachmentID: attachmentID

        });
    }
    
    SaveClinicMapping(clinicmapping: IDT_ClinicMapping): Observable<boolean> {
        return this._apiService.postData("SaveDTClinicMapping", clinicmapping);
    }
    updateReferrerDetails(referrerDetails: IDirectTrustReferrer[]): Observable<boolean> {
        return this._apiService.postData("UpdateReferrer", referrerDetails);
    }
    getReferrerDetail(instituteId: number): Observable<IDirectTrustReferrer[]> {
        return this._apiService.getDataWithParams("DirectTrustReferrerDetail", {
            instituteId: instituteId
        });
    }
    getDirectTrustIncomingMessageByID(incomingmessgeid: number): Observable<any> {
        return this._apiService.getDataWithParams("DirectTrustIncomingMessageByID", {
            incomingmessageid: incomingmessgeid
        });
    }
    
    deleteReferrerDetails(referrerDetails: IDirectTrustReferrerDelete): Observable<boolean> {
        
        return this._apiService.getDataWithParams("DeleteReferrer", {
            refID: referrerDetails.RefID,
            refEmailID: referrerDetails.RefEmailID
        });
    }
    getIncomingMessageList(username: string, role: string): Observable<IIncomingMessages> {
       
        return this._apiService.getDataWithParams("DirectTrustIncomingMessages",{
            username: username,
            role:role
        });
    }
    getInProgressPatients(): Observable<IWIPDTPatients> {

        return this._apiService.getData("InProgressPatients");
    }
    getClinicMappings(): Observable<IDT_ClinicMappings> {

        return this._apiService.getData("DTClinicMapping");
    }
    getClinics(): Observable<IDT_Clinics> {

        return this._apiService.getData("DTClinics");
    }
    //CreatePatient(patientId: number): Observable<boolean> {

    //    return this._apiService.getDataWithParams("CreatePatient", {
    //        patientId: patientId
            
    //    });
    //}
    //RejectPatient(patientId: number): Observable<boolean> {

    //    return this._apiService.getDataWithParams("RejectPatient", {
    //        patientId: patientId

    //    });
    //}
    //ImportPatient(patientId: number): Observable<boolean> {

    //    return this._apiService.getDataWithParams("ImportPatient", {
    //        patientId: patientId

    //    });
    //}
    getDTPOCNotFoundMessageList(): Observable<IDTPOCNotFoundMessages> {

        return this._apiService.getData("DirectTrustPOCNotFoundMessages");
    }
    getDTProcessedPatientMessageList(): Observable<IProcessedDTPatients> {

        return this._apiService.getData("DTProcessedPatients");
    }
    getDTProcessedtMessageList(username: string): Observable<IDTProcessedMessage[]> {

        //return this._apiService.getData("ProcessedMesages");
        return this._apiService.getDataWithParams("ProcessedMesages", {
            username: username
           
        });
    }
    getSentPOCList(username: string): Observable<IsentPoc[]> {

        //return this._apiService.getData("POCSent");
        return this._apiService.getDataWithParams("POCSent", {
            username: username

        });
    }
    getPocs(username: string): Observable<IDTProcessedPOCSList> {

       // return this._apiService.getData("ProcessedPOC");
        return this._apiService.getDataWithParams("ProcessedPOC", {
            username: username

        });
    }
    AcceptPatient(acceptpatient: IAcceptPatient): Observable<boolean> {
      
        return this._apiService.getDataWithParams("CreatePatient", {
            incommingMsgID: acceptpatient.InincomingmessageID,
            userID: acceptpatient.InUserID,
            status: 'Accepted',
            attachmentID: acceptpatient.AttachmentID
        });
    }
    GetRehabReferrerList(acceptpatient: IAcceptPatient): Observable<IReferrer[]> {

        return this._apiService.getDataWithParams("CheckReferrerExist", {
            incommingMsgID: acceptpatient.InincomingmessageID,
            userID: acceptpatient.InUserID,
            status: 'Created',
            attachmentID: acceptpatient.AttachmentID
        });
    }
    CreatePatient(acceptpatient: IAcceptPatient): Observable<any> {

        return this._apiService.getDataWithParams("CreatePatient", {
            incommingMsgID: acceptpatient.InincomingmessageID,
            userID: acceptpatient.InUserID,
            status: 'Created',
            attachmentID: acceptpatient.AttachmentID,
            ReferrerID: acceptpatient.ReferrerID
        });
    }
    ImportPatient(acceptpatient: IAcceptPatient): Observable<any> {

        return this._apiService.getDataWithParams("ImportPatient", {
            patientID: acceptpatient.InpatientID,
            incommingMsgID: acceptpatient.InincomingmessageID,
            userID: acceptpatient.InUserID,
            status: 'Imported',
            attachmentID: acceptpatient.AttachmentID
        });
    }
    
    RejectPatient(rejectpatient: IRejectPatient): Observable<any> {
        return this._apiService.getDataWithParams("RejectPatient", {
            patientID: rejectpatient.InpatientID,
            incommingMsgID: rejectpatient.InincomingmessageID,
            userID: rejectpatient.InUserID,
            attachmentID: rejectpatient.AttachmentID
            
        });
    }
    RemoveMapping(clincno:string): Observable<boolean> {
        return this._apiService.getDataWithParams("DeleteDTClinicMapping", {
            ClinicNo: clincno
        });
    }
    DownloadPOCFile(Note_ID: number): Observable<any> {
        return this._apiService.getBlob("DownloadPOCFile", Note_ID);
    }
    UpdateMessageReadFlag(incomingMessageId: any): Observable<boolean> {
        return this._apiService.postData("UpdateMessageReadFlag", incomingMessageId);
    }

    UpdateReadUnReadMessage(checkedMessages: CheckedMessages): Observable<boolean> {
        return this._apiService.postData("UpdateMessageReadUnReadFlag", checkedMessages);
    }
    unprocessReferral(ID: string): Observable<any> {

        // return this._apiService.getData("ProcessedPOC");
        return this._apiService.getDataWithParams("UnProcessReferralMessage", {
            processedID: ID
        });
    }
    getUserEmails(): Observable<string[]> {

        return this._apiService.getData("DTUserEmails");
    }
    getUserEmailMessages(from:string): Observable<IDTMessageSent[]> {

        return this._apiService.
        getDataWithParams("DTUserEmailMessages", {
            fromId: from
        });
    }
    sendEmailMessage(message: IDTMessageSent): Observable<boolean> {
        return this._apiService.postData("SaveDTMessageSent", message);
    }
    getDirectTrustSentMessageByID(sentmessageid: number): Observable<IDTMessageSent> {
        return this._apiService.getDataWithParams("DirectTrustMessageSentByID", {
            sentmessageid: sentmessageid
        });
    }
    DownloadMailAttachmentFile(attachmentID: number): Observable<any> {
        return this._apiService.getBlob("DownloadMailAttachmentFile", attachmentID);
    }
    DeleteMessage(ID: string): Observable<boolean> {
        return this._apiService.getDataWithParams("DeleteMessage", {
            ID: ID
        });
    }
    UpdateMessageInactive(ID: string): Observable<boolean> {
        return this._apiService.getDataWithParams("UpdateMessageInActive", {
            ID: ID
        });
    }
    getDeletedIncomingMessageList(username: string, role: string): Observable<IIncomingMessages> {

        return this._apiService.getDataWithParams("DirectTrustDeletedIncomingMessages", {
            username: username,
            role: role
        });
    }
    getIncomingMessageOperation(refID: number, operation: string): Observable<any> {

        return this._apiService.getDataWithParams("DirectTrustIncomingMessageByOperation", {
            incomingmessageid: refID,
            operation: operation
        });
    }
}

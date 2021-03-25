import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:"http://20.198.84.242/pms-app/Pms_app";
  constructor(private httpClient: HttpClient) {}

  login(params:any): Observable<any>{
    let url = "http://20.198.84.242/pms-app/Pms_app/login"
    return this.httpClient.post(url,params).pipe(
        catchError(this.errorHandl)
      );
  }

  viewInitiate(params:any):Observable<any>{
    let url = "http://20.198.84.242/pms-app/Pms_app/draft_view";
    return this.httpClient.post(url,params).pipe(
      catchError(this.errorHandl)
    )
  }

  checkMobile(params:any):Observable<any>{
    let url = "http://20.198.84.242/pms-app/Pms_app/check_mobile";
    return this.httpClient.post(url,params).pipe(
      catchError(this.errorHandl)
    )
  }

  completedInitiate(params:any):Observable<any>{
    let url = "http://20.198.84.242/pms-app/Pms_app/initiate_completed_list";
    return this.httpClient.post(url,params).pipe(
      catchError(this.errorHandl)
    )
  }

  addEnquiry(params:any):Observable<any>{
    let url = "http://20.198.84.242/pms-app/pms_app/enquiry";
    return this.httpClient.post(url,params).pipe(
      catchError(this.errorHandl)
    )
  }

  checkInvoice(params:any):Observable<any>{
    let url = "http://20.198.84.242/pms-app/Pms_app/check_invoice";
    return this.httpClient.post(url,params).pipe(
      catchError(this.errorHandl)
    )
  }

  deleteInitiate(param:any):Observable<any>{
    let url = "http://20.198.84.242/pms-app/Pms_app/draft_delete";
    return this.httpClient.post(url,param).pipe(
      catchError(this.errorHandl)
    )
  }

  changePassword(param:any):Observable<any>{
    let url = "http://20.198.84.242/pms-app/Pms_app/change_password";
    return this.httpClient.post(url,param).pipe(
      catchError(this.errorHandl)
    )
  }

  getInvoice(params:any):Observable<any>{
    let url = "http://20.198.84.242/pms-app/Pms_app/userinvoice";
    return this.httpClient.post(url,params).pipe(
      catchError(this.errorHandl)
    )
  }

  deleteBegin(param:any):Observable<any>{
    let url = "http://20.198.84.242/pms-app/Pms_app/begin_delete";
    return this.httpClient.post(url,param).pipe(
      catchError(this.errorHandl)
    )
  }

  completedBegin(params:any):Observable<any>{
    let url = "http://20.198.84.242/pms-app/Pms_app/begin_completed_list";
    return this.httpClient.post(url,params).pipe(
      catchError(this.errorHandl)
    )
  }

  getTermsnConditions(id:any):Observable<any>{
      let url = "http://20.198.84.242/pms-app/Pms_app/get_serviceagreement";
      return this.httpClient.post(url,id).pipe(
          catchError(this.errorHandl)
      )
  }

  kdpSubmit(params:any):Observable<any>{
    let url = "http://20.198.84.242/pms-app/Pms_app/kdp_survey";
    return this.httpClient.post(url,params).pipe(
      catchError(this.errorHandl)
    )
  }

  checkTerms(params:any):Observable<any>{
    let url = "http://20.198.84.242/pms-app/Pms_app/terms_checking";
    return this.httpClient.post(url,params).pipe(
      catchError(this.errorHandl)
    )
  }

  postAgreement(params:any): Observable<any>{
    let url="http://20.198.84.242/pms-app/Pms_app/agreement";
    return this.httpClient.post(url,params).pipe(
      catchError(this.errorHandl)
    )
  }


  addBegin(params:any): Observable<any>{
    let url = "http://20.198.84.242/pms-app/Pms_app/add_begin";
    return this.httpClient.post(url,params).pipe(
      catchError(this.errorHandl)
    )
  }

  getBeginDetails(params:any):Observable<any>{
    let url ="http://20.198.84.242/pms-app/Pms_app/begin_view"
    return this.httpClient.post(url,params).pipe(
       
      ); 
  }

  getNotifications(params:any):Observable<any>{
    let url = "http://20.198.84.242/pms-app/Pms_app/invoice_cheeck_notification";
    return this.httpClient.post(url,params).pipe(
      
    )
  }

  addInitiate(params:any): Observable<any>{
    let url = "http://20.198.84.242/pms-app/Pms_app/add_initiate";
    return this.httpClient.post(url,params).pipe(
      catchError(this.errorHandl)
    )
  }

  getInitiateDraft(params:any):Observable<any>{
    let url = "http://20.198.84.242/pms-app/Pms_app/draft_list";
    return this.httpClient.post(url,params).pipe(
      catchError(this.errorHandl)
    )
  }

  getDraftBegin(params:any):Observable<any>{
    let url = "http://20.198.84.242/pms-app/Pms_app/draft_begin_list";
    return this.httpClient.post(url,params).pipe(
      catchError(this.errorHandl)
    )
  }


  
  forgetpassword(data:any){
    return this.httpClient.post("http://20.198.84.24/pms-app/Pms_app/forget_password", data)
     }

  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
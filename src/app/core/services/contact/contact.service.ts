import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIRequest, ApiService } from '../api.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly serviceEndpoint = environment.api.mts.endpoint;
  private readonly contactApiUrl = environment.api.mts.urls.contact;
  
  constructor(private apiService: ApiService, private httpClient: HttpClient) { }

  public getAllContacts() {
    let resource: string = 'all';
    return this.httpClient.get(this.serviceEndpoint + this.contactApiUrl + resource);
  }

  public getAllContactsViaApiService() {
    let resource: string = 'all';
    return this.apiService.get<any>(new APIRequest<any>(this.serviceEndpoint + this.contactApiUrl + resource));
  }
}

import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import {APIRequest, ApiService} from "../api.service";

@Injectable({
  providedIn: 'root'
})
export class DetectorService {

  private readonly serviceEndpoint = environment.api.nxt.endpoint;
  private readonly facedetectorApiUrl = environment.api.nxt.urls.facedetector;

  constructor(private apiService: ApiService, private httpClient: HttpClient) { }

  public uploadImage(data: FormData) {
    return this.apiService.post<any, any>(
      new APIRequest<any>(this.serviceEndpoint + this.facedetectorApiUrl + 'scanfaces', data)
    )
  }

  public dataURItoBlob(dataURI : any, fileName : string) : File {
    // convert base64/URLEncoded data component to a file
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);
    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new File([ia], fileName, {type:mimeString});
  }

}

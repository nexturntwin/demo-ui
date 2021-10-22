import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { DetectorService } from "../../core/services/facedetector/detector.service";

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  public showWebcam = false;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {};
  public errors: WebcamInitError[] = [];
  public webcamImage: any = null;
  public imageToProcess = new FormData();
  public faceCount: any = 0;
  public showFaceCount: boolean = false;
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();
  

  constructor(private detectorService: DetectorService) { }

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
        .then((mediaDevices: MediaDeviceInfo[]) => {
          this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean|string): void {
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    this.imageToProcess.append('file', this.detectorService.dataURItoBlob(this.webcamImage.imageAsDataUrl, "capture.jpeg"), "capture.jpeg");
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }

  public uploadImage() {
    this.showFaceCount = true;
    this.detectorService.uploadImage(this.imageToProcess).subscribe(res => { console.log(this.faceCount); this.faceCount = res; });
  }

}



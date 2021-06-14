import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertDangerComponent } from '../shared/alert-danger/alert-danger.component';

export enum alertTypes{
  DANGER = 'danger'
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private bsModalService: BsModalService) { }

  private alert(message:string, type:alertTypes){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertDangerComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

  }

  alertDanger(message:string){
    this.alert(message, alertTypes.DANGER)
 }
}

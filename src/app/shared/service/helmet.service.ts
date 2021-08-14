import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import HelmetsResponse from '../../_files/red_helmets.json'

@Injectable({
  providedIn: 'root'
})
export class HelmetService{

  protected helmetData: any = {};
  public HELMET_RESULT = 'result';
  constructor() { }
  // public helmetJson:{request,result} = HelmetsResponse; //from file.
  public helmetJson:{request,result};
  getResult(){
    if(!this.helmetJson){
      this.readFromFile();
    }
    let response = this.helmetJson;
    return response;
  }

  readFromFile(){
    this.helmetJson = HelmetsResponse;
  }

  getHelmets(){
    if (this.helmetData[this.HELMET_RESULT]) {
        return this.helmetData[this.HELMET_RESULT];
    }
    else {
        let response =  this.getResult();
        this.helmetData[this.HELMET_RESULT] = response.result.hits;
        return this.helmetData[this.HELMET_RESULT];
    }
  }


}

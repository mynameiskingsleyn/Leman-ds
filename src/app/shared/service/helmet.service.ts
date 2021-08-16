import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from './base.service';
import HelmetsResponse from '../../_files/red_helmets.json';

@Injectable({
  providedIn: 'root'
})
export class HelmetService{

  protected helmetData: any = {};
  public HELMET_RESULT = 'result';
  public helmetJson:{request,result};
  private maxPriceSource = new BehaviorSubject(500);
  private minPriceSource = new BehaviorSubject(0);
  currentMaxPrice = this.maxPriceSource.asObservable();
  currentMinPrice = this.minPriceSource.asObservable();

  constructor() { }

  changeMaxPrice(num){
    this.maxPriceSource.next(num);
  }

  changeMinPrice(num){
    this.minPriceSource.next(num);
  }

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

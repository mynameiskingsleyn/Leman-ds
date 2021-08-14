import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  private mesages = {
    'error_mesages':{
      'max_min_conflict': "Maximum should always be greater than minimum",
      'negative' : "Negatice numbers are not allowed",
      'type_error' : "input must always be a number",
      'required' : "All fields are required please enter appropriate values"
    }
  };
  constructor() { }

  getI18nMessages(type) {
    var value = this.mesages;
    for(var key in this.mesages){
      if(type === key){
        value = this.mesages[key];
      }
      value = this.mesages[key];
    }
    return value;
  }

}

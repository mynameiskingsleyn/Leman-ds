import { Component, OnInit } from '@angular/core';
import {HelmetService} from '../../shared/service/helmet.service';
import {I18nService} from '../../shared/service/i18n.service';

@Component({
  selector: 'app-helmet-list',
  templateUrl: './helmet-list.component.html',
  styleUrls: ['./helmet-list.component.css']
})
export class HelmetListComponent implements OnInit {

  public helmets;
  public helmetsFiltered;
  public errorMessage = "";
  public errorMessages:any;
  public max: any =  500;
  public min: any = 0;


  constructor(private helmetService: HelmetService,
    private i18nService: I18nService ) {  }
  runFilter(){
    var min = this.min;
    var max = this.max;
    this.errorMessage = "";
    if(min.length < 1  || max.length < 1){
      this.errorMessage = this.errorMessages['required'];
    }
    if(max < 0 || min < 0){
      this.errorMessage = this.errorMessages['negative'];
    }
    if(isNaN(max) || isNaN(min)){
      this.errorMessage = this.errorMessages['type_error'];
    }
    max = parseFloat(max);
    min = parseFloat(min);
    if(max < min ){
      this.errorMessage = this.errorMessages['max_min_conflict'];
    }

    if(this.errorMessage.length < 1){
      var searchHelmets = this.helmets.filter(function(helmet){
        var startPrice = helmet['partSummary']['priceRanges']['retail']['start'];
        var endPrice = helmet['partSummary']['priceRanges']['retail']['end'];
        return (startPrice >= min && endPrice<= max);
      });
      this.helmetsFiltered = searchHelmets;
    }
  }
  ngOnInit(): void {
    this.helmets = this.helmetService.getHelmets();
    this.runFilter();
    this.errorMessages = this.i18nService.getI18nMessages('error_mesages');

  }

  hasSearch(){
    var resultCount = this.helmetsFiltered.length;
    return resultCount > 0;
  }


}

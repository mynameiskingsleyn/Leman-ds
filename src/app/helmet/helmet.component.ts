import { Component, OnInit, OnDestroy } from '@angular/core';
import {HelmetService} from '../shared/service/helmet.service';
import {I18nService} from '../shared/service/i18n.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-helmet',
  templateUrl: './helmet.component.html',
  styleUrls: ['./helmet.component.css']
})
export class HelmetComponent implements OnInit, OnDestroy {

  public helmets;
  public helmetsFiltered;
  public errorMessage = "";
  public errorMessages:any;
  public max: any;
  public min: any;
  subscription: Subscription;
  constructor(private helmetService: HelmetService,
    private i18nService: I18nService ) { }

  receiveMaxPrice($event){
    this.max = $event;
    console.log("max price is "+this.max);
  }
  receiveMinPrice($event){
    this.min = $event;
  }
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
    this.subscription = this.helmetService.currentMaxPrice.subscribe(maxPrice => this.max = maxPrice);
    this.subscription = this.helmetService.currentMinPrice.subscribe(minPrice=> this.min =minPrice);
    this.helmets = this.helmetService.getHelmets();
    this.runFilter();
    this.errorMessages = this.i18nService.getI18nMessages('error_mesages');

    console.log("max is "+this.max);

  }

  ngOnDestroy(){
    this.subscription.unsubscribe;
  }




}

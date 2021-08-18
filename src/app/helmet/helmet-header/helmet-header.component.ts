import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import {HelmetService} from '../../shared/service/helmet.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-helmet-header',
  templateUrl: './helmet-header.component.html',
  styleUrls: ['./helmet-header.component.css']
})
export class HelmetHeaderComponent implements OnInit, OnDestroy {

  @Input() errorMessage;
  public max: any;
  public min: any;
  subscription: Subscription;

  @Output() filter: EventEmitter<any> = new EventEmitter();
  constructor(private helmetService: HelmetService) { }

  runFilter(){
    this.helmetService.changeMaxPrice(this.max);
    this.helmetService.changeMinPrice(this.min);
    this.filter.emit();
  }

  ngOnInit(): void {
    this.subscription = this.helmetService.currentMaxPrice.subscribe(maxPrice => this.max = maxPrice);
    this.subscription = this.helmetService.currentMinPrice.subscribe(maxPrice => this.min = maxPrice);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe;
  }

}

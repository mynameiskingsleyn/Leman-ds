import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import {HelmetService} from '../../shared/service/helmet.service';

@Component({
  selector: 'app-helmet-header',
  templateUrl: './helmet-header.component.html',
  styleUrls: ['./helmet-header.component.css']
})
export class HelmetHeaderComponent implements OnInit, OnDestroy {

  @Input() errorMessage;
  @Input() min;
  @Input() max;

  @Output() filter: EventEmitter<any> = new EventEmitter();
  constructor(private helmetService: HelmetService) { }

  runFilter(){
    this.helmetService.changeMaxPrice(this.max);
    this.helmetService.changeMinPrice(this.min);
    this.filter.emit();
  }

  ngOnInit(): void {

  }

  ngOnDestroy(){

  }

}

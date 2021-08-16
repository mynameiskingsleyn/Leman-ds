import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-helmet-header',
  templateUrl: './helmet-header.component.html',
  styleUrls: ['./helmet-header.component.css']
})
export class HelmetHeaderComponent implements OnInit {

  @Input() errorMessage;
  @Input() min;
  @Input() max;


  @Output() filter: EventEmitter<any> = new EventEmitter();
  @Output() sendMax = new EventEmitter<any>();
  @Output() sendMin = new EventEmitter<any>();
  constructor() { }

  runFilter(){
    this.sendMax.emit(this.max);
    this.sendMin.emit(this.min);
    this.filter.emit();
  }

  ngOnInit(): void {
  }

}

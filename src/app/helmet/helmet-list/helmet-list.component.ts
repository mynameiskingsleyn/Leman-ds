import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-helmet-list',
  templateUrl: './helmet-list.component.html',
  styleUrls: ['./helmet-list.component.css']
})
export class HelmetListComponent implements OnInit {


  @Input() helmetsFiltered;
  constructor() {  }

  hasSearch(){
    var resultCount = this.helmetsFiltered.length;
    return resultCount > 0;
  }

  ngOnInit(): void {
  }



}

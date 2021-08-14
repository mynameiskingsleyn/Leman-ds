import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-helmet-item',
  templateUrl: './helmet-item.component.html',
  styleUrls: ['./helmet-item.component.css']
})
export class HelmetItemComponent implements OnInit {

  @Input() helmet;
  @Input() index: number;

  constructor() {

  }
  getPrice(item){
    let prices = item;
    let start = prices['start'];
    let end = prices['end'];
    let display_price = '';
    if(start == end){
      display_price = "$"+start;
    }else{
      display_price = "$"+start+" - $"+end;
    }
    return display_price;
    //console.log(display_price);
  }

  getImagepath(item){
    let base_url = "https://asset.lemansnet.com";
    let media_url = item.url;
    let extension = item.file.extension;
    let queries = "?x=176&y=176&b=&t=image/png";
    //console.log(item);
    let tempUrl = base_url+"/"+media_url+"."+extension+queries;
    //console.log(tempUrl);
    //let tempUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0snUoPx_ZhoMv8mTvjWKmFa1rrTiPlFTrPXFWnufFNNjPW454&s';
    
    return tempUrl;
  }

  ngOnInit(): void {
  }

}

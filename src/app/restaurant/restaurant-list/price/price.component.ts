import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  @Output() emiter = new EventEmitter<any>();

  prices = {
  	"priceFrom": 1,
   	"priceTo": 5
  }

  constructor() { }

  ngOnInit() {
  }

  onChange(){
  	this.emiter.emit({"filter": this.prices});
  }

}

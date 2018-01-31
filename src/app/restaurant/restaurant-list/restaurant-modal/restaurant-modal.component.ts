import { Component, OnInit, Input } from '@angular/core';

import { Restaurant } from '../../model/restaurant';
import { RestaurantMenuList } from '../../model/restaurant-menu-list';
import { RestaurantMenu } from '../../model/restaurant-menu';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-modal',
  templateUrl: './restaurant-modal.component.html',
  styleUrls: ['./restaurant-modal.component.css']
})
export class RestaurantModalComponent implements OnInit {
@Input() restaurant:Restaurant;
menu: RestaurantMenu;

  constructor( private RestaurantService: RestaurantService) { } 

  ngOnInit() {  //get Menu
  	this.RestaurantService.getRestaurant(this.restaurant._id).subscribe((data:any)=>{
  		console.log(data);
  		this.menu = data.results[0];
  	});

  }



}

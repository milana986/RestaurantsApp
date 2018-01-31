import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantService } from '../services/restaurant.service';
import { RestaurantList } from '../model/restaurant-list';
import { Restaurant } from '../model/restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurantList: RestaurantList;

  params = {
  	"page": 1,
  	"pageSize": 12,
  	"sort": "rating",
  	"sortDirection": "desc",
  	"filter": {
  		"cuisine": '',
  		"priceFrom": 1,
  		"priceTo" : 5
  	}
  }

  constructor(private RestaurantService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
  	//this.getRestaurants();
  	this.route.params.subscribe((params)=>{
  		if(params['cuisine'] == "all"){
  			this.params.filter.cuisine = ""; 
  			this.getRestaurants();   // or this.getRestaurants({"filter": {"cuisine": ""}}) 
  		}else{
  			this.params.filter.cuisine = params['cuisine'];
  			this.getRestaurants();  // this.getRestaurants({"filter": {"cuisine": params['cuisine']}});
  		}
  	});
  }

  getRestaurants(params?: any){
  	if(params){
  		this.params.page = params.page || this.params.page;
		if(params.filter){
			this.params.filter.priceFrom = params.filter.priceFrom || this.params.filter.priceFrom;
			this.params.filter.priceTo = params.filter.priceTo || this.params.filter.priceTo;
		}
  	}
	this.RestaurantService.getAll(this.params).subscribe((data)=>{
  		console.log(data)
  		this.restaurantList = data;
  	});


  	}





}

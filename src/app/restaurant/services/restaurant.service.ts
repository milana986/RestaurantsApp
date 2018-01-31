import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Restaurant } from '../model/restaurant';
import { RestaurantList } from '../model/restaurant-list';
import { RestaurantMenuList } from '../model/restaurant-menu-list';

const url = "http://localhost:3000/api/restaurants";

@Injectable()
export class RestaurantService {

  constructor( private http: HttpClient) { }

  getAll(params?: any):Observable<RestaurantList>{

  	let querryParams = {}
	  if(params){
	    querryParams = { params:new HttpParams()
	    .set("pageSize", params.pageSize && params.pageSize.toString() || "")
	    .set("page", params.page && params.page.toString() || "")
	    .set("filter", params.filter && JSON.stringify(params.filter) || "")
	    .set("sort", params.sort && params.sort.toString() || "")
	    .set("sortDirection", params.sortDirection && params.sortDirection.toString() || "")
	    }
	  }
	 return this.http.get(url,querryParams).map((response)=>{
	 	return new RestaurantList(response);
	 })
  }

  getRestaurant(id:number):Observable<RestaurantMenuList>{
  	return this.http.get(url + '/' + id + '/menus').map((response)=>{
  		return new RestaurantMenuList(response);
  	})
  }


}

import { Restaurant } from './restaurant';

export class RestaurantList{
	count: number;
	results: number;

	constructor(obj?: any){
		this.count = obj && obj.count || null;
		this.results = obj && obj.results.map((elem)=>{
			return new Restaurant(elem);
		}) || [];
	}
}

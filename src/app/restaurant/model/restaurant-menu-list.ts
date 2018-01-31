import { RestaurantMenu } from './restaurant-menu'

export class RestaurantMenuList{
	count:number;
	results: string;

	constructor(obj?: any){
		this.count = obj && obj.count || null;
		this.results = obj && obj.results.map(elem => { return new RestaurantMenu(elem)});
	}
}
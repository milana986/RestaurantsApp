//{"_id":4,"restaurants":3,"items":[{"name":"bavette dans son jus","price":4.95},{}, {},{}...]

export class RestaurantMenu{
	_id: number;
	restaurants:number;
	items: any[];

	constructor(obj?: any){
		this._id = obj && obj._id || null;
		this.restaurants = obj && obj.restaurants || null;
		this.items =  obj && obj.items || [];
	}
}
import { Seller } from './seller';
import { SubCategory } from './sub-category';
import { Discount } from './discount';

export class Item {
   
    public itemName:string;
    public description:string;
    public stock:number;
    public marketPrice:number;
    public sellingPrice:number;
    public seller:Seller;
    public subcategory:SubCategory;
    public discount:Discount;
}

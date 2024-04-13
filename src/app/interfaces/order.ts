import { CartItem } from "./cart-item";

export interface Order {
  
  items: {
    product_id: number;
    quantity: number;
  }[];
}
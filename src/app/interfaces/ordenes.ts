import { CartItem } from "./cart-item";
import { ProductList } from "./product-list";
import { DetalleOrden } from "./detalle-orden";
export interface Ordenes {
  _id: string;
  id: number;
  customer_id: number;
  mesa_id: number;
  status: string;
  fecha?: string;
  hora?: string;
  total:number;
  ordenes:Ordenes[];
  detalles: DetalleOrden[];
  productos: ProductList[];
}

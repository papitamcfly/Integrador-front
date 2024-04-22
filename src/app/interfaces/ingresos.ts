import { Ordenes } from "./ordenes";
import { DetalleOrden } from "./detalle-orden";
export interface Ingresos {
  _id: {
    fecha: string;
    mes: string;
    semana: string;
  };
  totalIngresos: number;
}
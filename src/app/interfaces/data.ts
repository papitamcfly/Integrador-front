export interface Data {
    _id: string;
    ID: number;
    identificador: string;
    valor: number;
    descripcion: string;
    meseroID: number;
    horafecha: string; // Asumiendo que esta propiedad ya existe
    fecha: string; // Nueva propiedad para almacenar la fecha formateada
  }


  
interface DataObject {
    ID: number;
    identificador: string;
    valor: number;
    meseroID: number;
  }

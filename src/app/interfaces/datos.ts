export interface Datos {
    _id: string;
    data: {
      _id: {
        $oid: string;
      },
      ID: number;
      identificador: string;
      valor: number;
      meseroID: number;
    }
}

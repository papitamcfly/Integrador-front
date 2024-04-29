export interface ProductGroup {
    _id: string; // Assuming _id is the date in 'YYYY-MM-DD' format
    productos: Product[];
  }
  
  interface Product {
    producto: string;
    totalIngresos: number;
    totalQuantity: number;
  }
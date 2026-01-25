export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  uniqueBrand:string;
   rating: Rating;
}


export interface Rating {
    rate: number;
    count: number;
}

export interface CartItems extends Product {
    quantity: number
}

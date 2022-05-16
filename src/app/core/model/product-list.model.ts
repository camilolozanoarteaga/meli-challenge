import { Author } from "./product.model";

export interface ProductListModel {
  author: Author;
  categories: string[];
  items: Items[];
}

interface Items {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  freeShipping: boolean;
  address: string
}

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

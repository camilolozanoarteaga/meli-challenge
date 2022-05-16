interface Product {
  author: Author;
  item: Item;
}

interface Author {
  name: string;
  lastname: string
}

interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  freeShipping: boolean;
  soldQuantity: number;
  description: string;
}


interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export {
  Product,
  Author,
  Item,
  Price
}

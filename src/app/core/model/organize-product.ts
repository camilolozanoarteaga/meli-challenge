import { ProductListModel } from "./product-list.model";
import { Item, Product } from "./product.model";

export class OrganizeProduct {

  objectToOrganize: {
    product: any;
    description: any;
  };

  productList: any;

  constructor(objectProduct?: any, objectProductDescription?: any, objectProductList?: any) {
    this.objectToOrganize = {
      product: objectProduct,
      description: objectProductDescription
    };

    this.productList = objectProductList;
  }

  organize(): Product {
    return {
      author: {
        name: 'Camilo',
        lastname: 'Lozano'
      },
      item: {
        id: this.objectToOrganize.product.id,
        title: this.objectToOrganize.product.title,
        price: {
          currency: this.objectToOrganize.product.currency_id,
          amount: this.objectToOrganize.product.price,
          decimals: 123,
        },
        picture: 'N/A',
        condition: this.objectToOrganize.product.condition,
        freeShipping: this.objectToOrganize.product.shipping.free_shipping,
        soldQuantity: this.objectToOrganize.product.sold_quantity,
        description: this.objectToOrganize.description.plain_text
      }
    }
  }

  organizeList(): ProductListModel {
    const items = this.productList.results.map((result: any) => {
      return {
        id: result.id,
        title: result.title,
        price: {
          currency: result.currency_id,
          amount: result.price,
          decimals: 123,
        },
        picture: 'N/A',
        condition: result.condition,
        freeShipping: result.shipping.free_shipping,
        address: result.address.state_name
      }
    });

    return {
      author: {
        name: 'Camilo',
        lastname: 'Lozano'
      },
      categories: [],
      items: items,
    }
  }
}

import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private imageUrl =
    'https://images.macrumors.com/t/rVFMv95D6F0qtw436lHIuu0-p4I=/1600x/article-new/2020/10/iphone-13-models.jpg';

  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      imageUrl: this.imageUrl, // Use the same image URL for all products
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      imageUrl: this.imageUrl,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 7.99,
      imageUrl: this.imageUrl,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 15.49,
      imageUrl: this.imageUrl,
    },
    {
      id: 5,
      name: 'Product 5',
      price: 12.99,
      imageUrl: this.imageUrl,
    },
    {
      id: 6,
      name: 'Product 6',
      price: 8.99,
      imageUrl: this.imageUrl,
    },
    {
      id: 7,
      name: 'Product 7',
      price: 24.99,
      imageUrl: this.imageUrl,
    },
    {
      id: 8,
      name: 'Product 8',
      price: 18.99,
      imageUrl: this.imageUrl,
    },
    {
      id: 9,
      name: 'Product 9',
      price: 6.49,
      imageUrl: this.imageUrl,
    },
    {
      id: 10,
      name: 'Product 10',
      price: 14.99,
      imageUrl: this.imageUrl,
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }
}

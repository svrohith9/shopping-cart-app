import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 12;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  get displayedProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.products.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Pagination methods
  nextPage(): void {
    this.currentPage++;
  }

  previousPage(): void {
    this.currentPage--;
  }

  addToCart(product: Product): void {
    // Implement cart functionality here
  }
}

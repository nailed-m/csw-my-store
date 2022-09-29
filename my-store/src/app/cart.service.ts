import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './products';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient, private productsService: ProductsService) { }

  items!: Observable<Product[]>;

  itemsArray: Product[] = [];

  addToCart(product: Product) { this.itemsArray.push(product); }
  getItems() { return this.itemsArray; }
  clearCart() { this.itemsArray = []; return this.itemsArray; }
  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
  }
}

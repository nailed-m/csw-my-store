import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  products!: Observable<{ id: number, name: string, price: number, description: string }[]>;

  productsArray!: { id: number, name: string, price: number, description: string }[];

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.products.subscribe( (valor) => {
      this.productsArray = valor;
    })
  }

  share() {
    window.alert('The product has been shared!'); 
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

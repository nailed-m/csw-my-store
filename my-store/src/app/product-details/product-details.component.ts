import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { CartService } from '../cart.service';
import { Product } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cartService:CartService, private productsService: ProductsService) { }

  product: Product | undefined;

  products!: Observable<Product[]>;

  productsArray: Product[] = [];

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.products = this.productsService.getProducts();
    this.products.subscribe( (valor) => {
      this.productsArray = valor;
      this.product = this.productsArray.find(product => product.id === productIdFromRoute);
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}

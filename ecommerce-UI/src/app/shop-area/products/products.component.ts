import { ShopAreaService } from './../shop-area.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private shopAreaService: ShopAreaService) { }

  ngOnInit() {
    this.shopAreaService.getAllProducts().subscribe(x => {
      this.products = x;
      this.products.forEach(product => {
        product.imageURL = "data:image/jpg;base64," + product.imageFileList;
      });

    });
  }

  cardClicked() {
    console.log("Card Clicked");
  }

}

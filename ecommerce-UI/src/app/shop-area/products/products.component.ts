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

  addToCart(product){
    // let cart:Cart = new Cart();
    // cart.userId = 2;
    // cart.cartItemses[0].productId = product.productId;
    // cart.cartItemses[0].productPrice = product.productPrice;
    // cart.cartItemses[0].productQuantity = 1;
    // console.log(cart);
    let cart = {
      cartId: 2,
      users:{userId: 2},
      cartitemses:[{
        products:{productId:product.productId},
        cart:{cartId:2},
        price:product.productPrice,
        quantity:1
      }]
    };
    console.log(cart);
    this.shopAreaService.addToCart(cart).subscribe(x=>{
      console.log(x);
    })
    
  }

}

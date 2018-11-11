import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  cartItems = [];
  totalCartValue = 0;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getCartItemsList().subscribe(x => {
      this.cartItems = x;
      this.cartItems.forEach(cartItem => {
        this.totalCartValue += (cartItem.price * cartItem.quantity);
        cartItem.productsVO.imageURL = "data:image/jpg;base64," + cartItem.productsVO.imageFileList;
      });
    });

  }

}

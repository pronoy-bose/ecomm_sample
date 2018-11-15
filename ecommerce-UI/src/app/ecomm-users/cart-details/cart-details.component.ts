import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  displayedColumns: string[] = ['productImage', 'name', 'price', 'quantity', 'total', 'operations'];
  dataSource;
  cartItems;
  totalCartValue = 0;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getCartItemsList().subscribe(x => {
      this.cartItems = x;
      this.cartItems.forEach(cartItem => {
        this.totalCartValue += (cartItem.price * cartItem.quantity);
        cartItem.productsVO.imageURL = "data:image/jpg;base64," + cartItem.productsVO.imageFileList;
      });
      console.log(this.cartItems);

    });

  }

  modifyCount(data, modifyType) {
    if (modifyType == 'r' && data.quantity > 1) {
      data.quantity--;
    } else if (modifyType == 'i') {
      data.quantity++;
    }
  }

}

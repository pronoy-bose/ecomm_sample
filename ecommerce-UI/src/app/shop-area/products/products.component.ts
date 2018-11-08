import { ProductDetailsComponent } from './../product-details/product-details.component';
import { ShopAreaService } from './../shop-area.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatDialog, MatDialogConfig } from '@angular/material';
import { AlertSnackbarComponent } from './../../alert-snackbar/alert-snackbar.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private shopAreaService: ShopAreaService, public snackBar: MatSnackBar,
    private dialog: MatDialog) { }

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

  addToCart(product) {
    let cart = {
      cartitemses: [{
        products: { productId: product.productId },
        price: product.productPrice,
        quantity: 1
      }]
    };

    this.shopAreaService.addToCart(cart).subscribe(x => {
      this.shopAreaService.updatedCartCount(x);
      this.openSnackBar('Item Added to Cart', true);
    },
      error => {
        this.openSnackBar('Failed to add to cart. Try again later', false);
      })

  }

  openProductDetailDialog(product) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = product;
    this.dialog.open(ProductDetailsComponent, dialogConfig);

}

  openSnackBar(data, success) {
    let config = new MatSnackBarConfig();
    config.data = data;
    config.duration = 1000;
    config.verticalPosition = 'top';
    config.horizontalPosition = 'end';
    if (success) {
      config.panelClass = ['success-alert'];
      this.snackBar.openFromComponent(AlertSnackbarComponent, config);
    } else {
      config.panelClass = ['fail-alert'];
      this.snackBar.openFromComponent(AlertSnackbarComponent, config);
    }
  }

}

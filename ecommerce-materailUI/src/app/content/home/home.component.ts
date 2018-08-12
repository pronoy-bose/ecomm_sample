import { HomeService } from './../../services/home-service.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];
  constructor(private homeService: HomeService, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.homeService.getAllProducts().subscribe(x => {
      this.products = x;
      this.products.forEach(product => {
        product.imageURL = "data:image/jpg;base64," + product.imageFileList
      });

    });
  }

  cardClicked() {
    console.log("Card Clicked");
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  shopCategory() {
    this.router.navigate(['/order-page/shopCategory']);
  }

}

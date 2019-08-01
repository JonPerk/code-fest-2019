import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  gotoOrderDetail() {
    this.router.navigate(['/order-page/order-detail']);
  }

}

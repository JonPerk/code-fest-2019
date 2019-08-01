import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  orders = {};
  private _jsonURL = 'http://localhost:4200/assets/data/order.json';

  constructor( private router: Router, private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.orders = data;
      console.log(data);
    });
   }

  ngOnInit() {
  }

  gotoOrderDetail(id: number) {
    this.router.navigate(['/order-page/order-detail/' + id]);
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}

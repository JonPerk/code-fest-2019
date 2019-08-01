import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  dataUrl = '/data/data.json';
  products = {};
  private _jsonURL = 'http://localhost:4200/assets/data/product.json';

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }

  ngOnInit() {

  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }



}

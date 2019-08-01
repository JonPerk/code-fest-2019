import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  dataUrl = '/data/data.json';
  products = {};
  products1 = {};
  private _jsonURL = 'http://localhost:4200/assets/data/product205309.json';
  private _jsonURL1 = 'http://localhost:4200/assets/data/product201225.json';
  products2 = {};
  private _jsonURL2 = 'http://localhost:4200/assets/data/product612853.json';
  products3 = {};
  private _jsonURL3 = 'http://localhost:4200/assets/data/product218966.json';
  products4 = {};
  private _jsonURL4 = 'http://localhost:4200/assets/data/product.json';
  orderNumber:  string;
  firstOrder: boolean;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.getJSON().subscribe(data => {
      this.products = data;
      console.log(data);
    });
    this.getJSON1().subscribe(data => {
      this.products1 = data;
      console.log(data);
    });
    this.getJSON2().subscribe(data => {
      this.products2 = data;
      console.log(data);
    });
    this.getJSON3().subscribe(data => {
      this.products3 = data;
      console.log(data);
    });
    this.getJSON4().subscribe(data => {
      this.products4 = data;
      console.log(data);
    });
    this.route.params.subscribe( params => {console.log(params);
      this.orderNumber = params.id; });
  }

  ngOnInit() {
    console.log( this.orderNumber);
    if (this.orderNumber === '205309' || this.orderNumber === '201225' || this.orderNumber === '612853' || this.orderNumber === '218966' ) {
      this.firstOrder = false;
    } else {
      this.firstOrder = true;
    }
 }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  public getJSON1(): Observable<any> {
    return this.http.get(this._jsonURL1);
  }
  public getJSON2(): Observable<any> {
    return this.http.get(this._jsonURL2);
  }
  public getJSON3(): Observable<any> {
    return this.http.get(this._jsonURL3);
  }
  public getJSON4(): Observable<any> {
    return this.http.get(this._jsonURL4);
  }
}

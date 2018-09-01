import { Injectable } from '@angular/core';
import { Order } from '../_models/order';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl = environment.apiUrl;
  orders: any[] = [];

constructor(private http: HttpClient) { }

getOrderList(pageNumber: number, pageSize: number): Observable<any> {
console.log(pageNumber, 'pageNumber');
console.log(pageSize, 'pageSize');
  // return this.orderlist.slice();
  if (pageSize === undefined) {
    pageSize = 10;
  }
  return this.http.get<any>(this.baseUrl +
    'search/order?__inline=Order&ordertype_id=1&Orderstatus_id=39&__limit=' + pageSize + '&__page=' + pageNumber
    , { headers: { 'Authorization': localStorage.getItem('token'), 'client_id': '49'}})
  .pipe(
    map(response => {

      this.orders = response;
      return this.orders;
    })
  );
}

}

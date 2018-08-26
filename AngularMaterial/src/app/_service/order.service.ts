import { Injectable } from '@angular/core';
import { Order } from '../_models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
private orderlist: Order[] = [
  { orderid: 1, orderNo: 'C00000001', poNumber: 'PO1' },
  { orderid: 2, orderNo: 'C00000002', poNumber: 'PO2' },
  { orderid: 3, orderNo: 'C00000003', poNumber: 'PO3' },
  { orderid: 4, orderNo: 'C00000004', poNumber: 'PO4' },
  { orderid: 5, orderNo: 'C00000005', poNumber: 'PO5' }
];
constructor() { }

getOrderList() {

  return this.orderlist.slice();
}

}

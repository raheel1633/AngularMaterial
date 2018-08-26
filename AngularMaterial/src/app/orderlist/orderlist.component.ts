import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Order } from '../_models/order';
import { OrderService } from '../_service/order.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit, AfterViewInit {
displayedColumns = ['orderNo', 'poNumber'];
datasource = new MatTableDataSource<Order>();
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.datasource.data = this.orderService.getOrderList();
  }

  ngAfterViewInit() {
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }
  doFilter(filtervalue: string) {
   this.datasource.filter = filtervalue.trim().toLowerCase();

  }
}

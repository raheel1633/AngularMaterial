import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatSpinner } from '@angular/material';
import { Order } from '../_models/order';
import { OrderService } from '../_service/order.service';
import { tap } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit, AfterViewInit {
displayedColumns = ['order_no', 'po_number',  '_description', 'start_date', 'end_date'];
// datasource: Order[] = []; // new MatTableDataSource<Order>();
datasource = new MatTableDataSource<Order>();

resultsLength = 0;
isLoadingResults = true;

@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    console.log(this.datasource);
    this.getOrderList();
  }

  getOrderList() {
    this.isLoadingResults = true;
    this.orderService.getOrderList(this.paginator._pageIndex + 1, this.paginator.pageSize).subscribe(data => {
      console.log(data, 'response');
      this.resultsLength = data.LFSObject.DTO.Metafield[0].ObjectCount[0].total;

      this.datasource.data = data.LFSObject.DTO.LFSObject;
      this.isLoadingResults = false;
    }, error => {


    });
  }

  ngAfterViewInit() {
    // this.datasource.sort = this.sort;
  // this.datasource.paginator = this.paginator;
  this.paginator.page
        .pipe(
            tap(() => this.getOrderList())
        )
        .subscribe();

  }
  doFilter(filtervalue: string) {
   // this.datasource.filter = filtervalue.trim().toLowerCase();

  }
}

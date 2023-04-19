import { Component, OnInit } from '@angular/core';
import { IGridEditDoneEventArgs, IRowDataEventArgs } from '@infragistics/igniteui-angular';
import { NorthwindOpenAPIService } from '../services/northwind-open-api.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  public northwindOpenAPICustomerInputModel: any = null;

  constructor(
    private northwindOpenAPIService: NorthwindOpenAPIService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindOpenAPIService.getCustomerInputModel().subscribe(data => this.northwindOpenAPICustomerInputModel = data);
  }

  public customerRowAdded(args: IRowDataEventArgs) {
    this.northwindOpenAPIService.postCustomerInputModel(args.data).subscribe({
      next: (_e) => {
        this.northwindOpenAPIService.getCustomerInputModel().subscribe(data => this.northwindOpenAPICustomerInputModel = data);
      },
      error: (_err) => {
        // TODO: handle errors here.
      },
    });
  }

  public customerRowEditDone(args: IGridEditDoneEventArgs) {
    if(args.isAddRow == false) {
      this.northwindOpenAPIService.putCustomerInputModel(args.rowData).subscribe({
        next: (_e) => {
          this.northwindOpenAPIService.getCustomerInputModel().subscribe(data => this.northwindOpenAPICustomerInputModel = data);
        },
        error: (_err) => {
          // TODO: handle errors here.
        },
      });
    }
  }

  public customerRowDeleted(args: IRowDataEventArgs) {
    this.northwindOpenAPIService.deleteCustomerInputModel(args.data.customerId).subscribe({
      next: (_e) => {
        this.northwindOpenAPIService.getCustomerInputModel().subscribe(data => this.northwindOpenAPICustomerInputModel = data);
      },
      error: (_err) => {
        // TODO: handle errors here.
      },
    });
  }
}

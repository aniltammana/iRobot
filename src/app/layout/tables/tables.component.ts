import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CitizenService } from '../../shared/services/citizen.service';
import { Customer } from '../../shared/services/Document';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    customers:Customer[];

    constructor(private citizenService: CitizenService) {
      this.customers = this.citizenService.customers;
    }

    ngOnInit() {}
}

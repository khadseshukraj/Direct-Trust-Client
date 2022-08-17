import { Component, OnInit, Input, ViewChild, ViewEncapsulation, SimpleChanges, OnChanges } from '@angular/core';
import { IAngularGrid } from '../../interfaces/iangular-grid';
import { MatTable, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
    selector: 'app-angular-grid',
    templateUrl: './angular-grid.component.html',
    styleUrls: ['./angular-grid.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AngularGridComponent implements OnChanges {

    constructor() { }

    @Input()
    gridDataSource: MatTableDataSource<any[]>;

    @Input()
    columnDetails: IAngularGrid[];

    @Input()
    displayedColumns: string[];

    @ViewChild(MatSort, { static: false }) sort: MatSort;
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    @ViewChild("table", null) table: MatTable<any>;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.gridDataSource && changes.gridDataSource.currentValue) {
            this.gridDataSource = changes.gridDataSource.currentValue;
            this.SortPaginateGrid();
        }
    }

    ngOnInit() {
        
    }

    ngAfterViewInit() {
        this.SortPaginateGrid();
    }

    SortPaginateGrid() {
        if (this.gridDataSource && this.gridDataSource.data && this.gridDataSource.data.length > 0) {
            this.gridDataSource.sort = this.sort;
            this.gridDataSource.paginator = this.paginator;
        }
    }
}

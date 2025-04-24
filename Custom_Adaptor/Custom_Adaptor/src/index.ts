import { Grid, Page, Sort, Filter, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { CustomAdaptor } from './CustomAdaptor';

let data: DataManager = new DataManager({
    url: 'https://localhost:7048/odata/Orders',
    adaptor: new CustomAdaptor(),
    crossDomain: true,
});
Grid.Inject(Page, Sort, Filter, Edit, Toolbar);
let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowSorting: true,
    allowFiltering: true,
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'Search'],
    editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey: true, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'EmployeeID', headerText: 'Employee ID', width: 140 },
        { field: 'ShipCountry', headerText: 'ShipCountry', width: 140 }
    ]
});

grid.appendTo('#Grid');
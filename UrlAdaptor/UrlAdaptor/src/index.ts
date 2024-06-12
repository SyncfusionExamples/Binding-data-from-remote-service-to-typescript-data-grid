import { Grid, Edit, Toolbar, Filter, Sort, Page } from '@syncfusion/ej2-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

Grid.Inject(Edit, Toolbar, Filter, Sort, Page);

let data: DataManager = new DataManager({
    url: 'https://localhost:7233/api/Grid',
    insertUrl: 'https://localhost:7233/api/Grid/Insert',
    updateUrl: 'https://localhost:7233/api/Grid/Update',
    removeUrl: 'https://localhost:7233/api/Grid/Remove',
    adaptor: new UrlAdaptor()
});

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    allowPaging: true,
    allowSorting: true,
    allowFiltering: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey: true, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'ShipCity', headerText: 'ShipCity', width: 140 },
        { field: 'ShipCountry', headerText: 'ShipCountry', width: 140 }
    ]
});

grid.appendTo('#Grid');
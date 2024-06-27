import { Grid, Edit, Toolbar, Sort, Filter, Page } from '@syncfusion/ej2-grids';
import { DataManager, RemoteSaveAdaptor } from '@syncfusion/ej2-data';

Grid.Inject(Edit, Toolbar, Sort, Filter, Page);
let data: DataManager;

function load() {
    fetch('https://localhost:7259/api/Orders')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Unable to Fetch Data. Please check URL or network connectivity.`);
            }
            return response.json();
        })
        .then(jsonValue => {
            data = new DataManager({
                json: jsonValue,
                insertUrl: 'https://localhost:7259/api/Orders/Insert',
                updateUrl: 'https://localhost:7259/api/Orders/Update',
                removeUrl: 'https://localhost:7259/api/Orders/Remove',
                adaptor: new RemoteSaveAdaptor()
            });

            createGrid();
        });
}

function createGrid() {
    let grid: Grid = new Grid({
        dataSource: data,
        allowPaging: true,
        allowFiltering: true,
        allowSorting: true,
        toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel','Search'],
        editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey: true, type: 'number' },
            { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
            { field: 'ShipCity', headerText: 'ShipCity', width: 140 },
            { field: 'ShipCountry', headerText: 'ShipCountry', width: 140 }
        ]
    });
    grid.appendTo('#Grid');
}

load();

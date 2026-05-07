"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ej2_grids_1 = require("@syncfusion/ej2-grids");
const ej2_data_1 = require("@syncfusion/ej2-data");
ej2_grids_1.Grid.Inject(ej2_grids_1.Edit, ej2_grids_1.Toolbar, ej2_grids_1.Sort, ej2_grids_1.Filter, ej2_grids_1.Page);
let data;
function load() {
    fetch('https://localhost:7259/api/Orders')
        .then(response => {
        if (!response.ok) {
            throw new Error(`Unable to Fetch Data. Please check URL or network connectivity.`);
        }
        return response.json();
    })
        .then(jsonValue => {
        data = new ej2_data_1.DataManager({
            json: jsonValue,
            insertUrl: 'https://localhost:7259/api/Orders/Insert',
            updateUrl: 'https://localhost:7259/api/Orders/Update',
            removeUrl: 'https://localhost:7259/api/Orders/Remove',
            adaptor: new ej2_data_1.RemoteSaveAdaptor()
        });
        createGrid();
    });
}
function createGrid() {
    let grid = new ej2_grids_1.Grid({
        dataSource: data,
        allowPaging: true,
        allowFiltering: true,
        allowSorting: true,
        toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'Search'],
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
//# sourceMappingURL=index.js.map
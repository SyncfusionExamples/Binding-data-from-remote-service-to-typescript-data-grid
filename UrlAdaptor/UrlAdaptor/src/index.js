"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ej2_grids_1 = require("@syncfusion/ej2-grids");
var ej2_data_1 = require("@syncfusion/ej2-data");
ej2_grids_1.Grid.Inject(ej2_grids_1.Edit, ej2_grids_1.Toolbar, ej2_grids_1.Filter, ej2_grids_1.Sort, ej2_grids_1.Page);
var data = new ej2_data_1.DataManager({
    url: 'https://localhost:7233/api/Grid',
    insertUrl: 'https://localhost:7233/api/Grid/Insert',
    updateUrl: 'https://localhost:7233/api/Grid/Update',
    removeUrl: 'https://localhost:7233/api/Grid/Remove',
    adaptor: new ej2_data_1.UrlAdaptor()
});
var grid = new ej2_grids_1.Grid({
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
//# sourceMappingURL=index.js.map
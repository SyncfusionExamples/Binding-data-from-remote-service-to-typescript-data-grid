"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ej2_grids_1 = require("@syncfusion/ej2-grids");
var ej2_data_1 = require("@syncfusion/ej2-data");
var data = new ej2_data_1.DataManager({
    url: 'https://localhost:7199/odata/Orders',
    adaptor: new ej2_data_1.ODataV4Adaptor()
});
ej2_grids_1.Grid.Inject(ej2_grids_1.Page, ej2_grids_1.Sort, ej2_grids_1.Filter, ej2_grids_1.Edit, ej2_grids_1.Toolbar);
var grid = new ej2_grids_1.Grid({
    dataSource: data,
    allowPaging: true,
    allowSorting: true,
    allowFiltering: true,
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
//# sourceMappingURL=index.js.map
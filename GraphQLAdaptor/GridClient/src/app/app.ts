import { Grid, Group, Filter, Page, Sort, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { DataManager, GraphQLAdaptor } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    url: "http://localhost:4200", adaptor: new GraphQLAdaptor({
        response: {
            result: 'getOrders.result',
            count: 'getOrders.count'
        },
        query: `query getOrders($datamanager: DataManager) {
        getOrders(datamanager: $datamanager) {
         count,
         result{
          OrderID, CustomerID, ShipCity, ShipCountry}
         }
        }`,
        // mutation for performing CRUD
        getMutation: function (action: any): string {
            if (action === 'insert') {
                return `mutation CreateOrderMutation($value: OrderInput!){
           createOrder(value: $value){
            OrderID, CustomerID, ShipCity, ShipCountry
           }}`;
            }
            if (action === 'update') {
                return `mutation UpdateOrderMutation($key: Int!, $keyColumn: String,$value: OrderInput){
           updateOrder(key: $key, keyColumn: $keyColumn, value: $value) {
            OrderID, CustomerID, ShipCity, ShipCountry
           }
         }`;
            } else {
                return `mutation RemoveOrderMutation($key: Int!, $keyColumn: String, $value: OrderInput){
           deleteOrder(key: $key, keyColumn: $keyColumn, value: $value) {
            OrderID, CustomerID, ShipCity, ShipCountry
           }
          }`;
            }
        }
    }),
});

Grid.Inject(Group, Filter, Page, Sort, Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowSorting: true,
    allowFiltering: true,
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Search'],
    editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number', isPrimaryKey: true },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Right', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140 }
    ],

});

grid.appendTo('#Grid');

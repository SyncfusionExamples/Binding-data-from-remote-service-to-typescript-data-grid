import { ODataV4Adaptor } from '@syncfusion/ej2-data';
import { setValue } from '@syncfusion/ej2-base';
export class CustomAdaptor extends ODataV4Adaptor {
    public override processQuery(dm: any, query: any): Object {
        dm.dataSource.url = 'https://localhost:7048/odata/orders'; //Change the url.
        query.addParams('Syncfusion Grid', 'true'); // Add the additional parameter.
        return super.processQuery.apply(this, arguments as any);
    }
    public override beforeSend(dm: any, request: any, settings: any): void {
        request.headers.set('Authorization', `true`);
        super.beforeSend(dm, request, settings);
    }
    public override processResponse() {
        let i = 0;
        const original: any = super.processResponse.apply(this, arguments as any);
        // Adding serial number.
        if (original.result) {
            original.result.forEach((item: any) => setValue('SNo', ++i, item));
        }
        return original;
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAdaptor = void 0;
const ej2_data_1 = require("@syncfusion/ej2-data");
const ej2_base_1 = require("@syncfusion/ej2-base");
class CustomAdaptor extends ej2_data_1.ODataV4Adaptor {
    processQuery(dm, query) {
        dm.dataSource.url = 'https://localhost:7048/odata/orders'; //Change the url.
        query.addParams('Syncfusion Grid', 'true'); // Add the additional parameter.
        return super.processQuery.apply(this, arguments);
    }
    beforeSend(dm, request, settings) {
        request.headers.set('Authorization', `true`);
        super.beforeSend(dm, request, settings);
    }
    processResponse() {
        let i = 0;
        const original = super.processResponse.apply(this, arguments);
        // Adding serial number.
        if (original.result) {
            original.result.forEach((item) => (0, ej2_base_1.setValue)('SNo', ++i, item));
        }
        return original;
    }
}
exports.CustomAdaptor = CustomAdaptor;
//# sourceMappingURL=CustomAdaptor.js.map
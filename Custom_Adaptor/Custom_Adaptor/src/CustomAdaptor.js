"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAdaptor = void 0;
var ej2_data_1 = require("@syncfusion/ej2-data");
var ej2_base_1 = require("@syncfusion/ej2-base");
var CustomAdaptor = /** @class */ (function (_super) {
    __extends(CustomAdaptor, _super);
    function CustomAdaptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomAdaptor.prototype.processQuery = function (dm, query) {
        dm.dataSource.url = 'https://localhost:7048/odata/orders'; //Change the url.
        query.addParams('Syncfusion Grid', 'true'); // Add the additional parameter.
        return _super.prototype.processQuery.apply(this, arguments);
    };
    CustomAdaptor.prototype.beforeSend = function (dm, request, settings) {
        request.headers.set('Authorization', "true");
        _super.prototype.beforeSend.call(this, dm, request, settings);
    };
    CustomAdaptor.prototype.processResponse = function () {
        var i = 0;
        var original = _super.prototype.processResponse.apply(this, arguments);
        // Adding serial number.
        if (original.result) {
            original.result.forEach(function (item) { return (0, ej2_base_1.setValue)('SNo', ++i, item); });
        }
        return original;
    };
    return CustomAdaptor;
}(ej2_data_1.ODataV4Adaptor));
exports.CustomAdaptor = CustomAdaptor;
//# sourceMappingURL=CustomAdaptor.js.map
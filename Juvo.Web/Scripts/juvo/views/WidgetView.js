var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var WidgetView = (function (_super) {
    __extends(WidgetView, _super);
    function WidgetView(options) {
        if (!options)
            options = {};
        options.template = "#widget-template";
        options.tagName = "tr";
        options.className = "block";
        _super.call(this, options);
    }
    return WidgetView;
})(Marionette.ItemView);
//# sourceMappingURL=WidgetView.js.map
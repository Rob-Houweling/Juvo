var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Widget = (function (_super) {
    __extends(Widget, _super);
    function Widget(widget) {
        _super.call(this);
        for (var key in widget) {
            if (widget.hasOwnProperty(key)) {
                if (key) {
                    this[key] = widget[key];
                }
            }
        }
    }
    Object.defineProperty(Widget.prototype, "name", {
        get: function () {
            return this.get("name");
        },
        set: function (value) {
            this.set("name", value);
        },
        enumerable: true,
        configurable: true
    });
    return Widget;
})(Backbone.Model);
var WidgetCollection = (function (_super) {
    __extends(WidgetCollection, _super);
    function WidgetCollection(options) {
        if (!options)
            options = {};
        options.model = Widget;
        _super.call(this, options);
    }
    return WidgetCollection;
})(Backbone.Collection);
//# sourceMappingURL=BaseModels.js.map
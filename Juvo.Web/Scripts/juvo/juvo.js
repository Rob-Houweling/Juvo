var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Juvo = (function (_super) {
    __extends(Juvo, _super);
    function Juvo() {
        _super.call(this);
        this.on("start", this.onStarted);
        this.addRegions({ mainRegion: "#content" });
    }
    Juvo.prototype.onStarted = function () {
        var moduleData = new WidgetCollection([new Widget({ name: "test1" }), new Widget({ name: "test2" })]);
        var homeViewInstance = new HomeView({
            collection: moduleData
        });
        juvo.mainRegion.show(homeViewInstance);
    };
    return Juvo;
})(Marionette.Application);
var juvo = new Juvo();
juvo.start();
//# sourceMappingURL=Juvo.js.map
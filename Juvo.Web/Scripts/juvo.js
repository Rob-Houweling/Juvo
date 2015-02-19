/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../Scripts/typings/underscore/underscore.d.ts"/>
/// <reference path="../Scripts/typings/backbone/backbone.d.ts"/>
/// <reference path="../Scripts/typings/marionette/marionette.d.ts"/>
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
        var moduleData = new Blocks([new Block({ name: "test1" }), new Block({ name: "test2" })]);
        var homeViewInstance = new HomeView({
            collection: moduleData
        });
        juvo.mainRegion.show(homeViewInstance);
    };
    return Juvo;
})(Marionette.Application);
var BlockView = (function (_super) {
    __extends(BlockView, _super);
    function BlockView(options) {
        if (!options)
            options = {};
        options.template = "#block2-template";
        options.tagName = "tr";
        options.className = "block";
        _super.call(this, options);
    }
    return BlockView;
})(Marionette.ItemView);
var HomeView = (function (_super) {
    __extends(HomeView, _super);
    function HomeView(options) {
        if (!options)
            options = {};
        options.tagName = "table";
        options.id = "home";
        options.className = "table-striped table-bordered";
        options.template = "#home-template";
        options.childView = BlockView;
        options.itemViewContainer = "tbody";
        _super.call(this, options);
    }
    return HomeView;
})(Marionette.CompositeView);
var Block = (function (_super) {
    __extends(Block, _super);
    function Block(block) {
        _super.call(this);
        for (var key in block) {
            if (block.hasOwnProperty(key)) {
                if (key) {
                    this[key] = block[key];
                }
            }
        }
    }
    Object.defineProperty(Block.prototype, "name", {
        get: function () {
            return this.get("name");
        },
        set: function (value) {
            this.set("name", value);
        },
        enumerable: true,
        configurable: true
    });
    return Block;
})(Backbone.Model);
var Blocks = (function (_super) {
    __extends(Blocks, _super);
    function Blocks(options) {
        if (!options)
            options = {};
        options.model = Block;
        _super.call(this, options);
    }
    return Blocks;
})(Backbone.Collection);
var juvo = new Juvo();
juvo.start();
//# sourceMappingURL=juvo.js.map
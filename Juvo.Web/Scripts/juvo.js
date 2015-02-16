juvo = new Backbone.Marionette.Application();
juvo.addRegions({
    mainRegion: "#content"
});

BlockView = Backbone.Marionette.ItemView.extend({
    template: "#block2-template",
    tagName: 'tr',
    className: 'block',

    events: {
    },

    initialize: function () {
        
    },
});

HomeView = Backbone.Marionette.CompositeView.extend({
    tagName: "table",
    id: "home",
    className: "table-striped table-bordered",
    template: "#home-template",
    childView: BlockView,

    attachHtml: function (collectionView, childView, index) {
        console.log('collectionview.append');
        collectionView.$("tbody").append(childView.el);
    }
});

juvo.addInitializer(function (options) {
    var homeViewInstance = new HomeView({
        collection: options.blocks
    });
    juvo.mainRegion.show(homeViewInstance);
});

Block = Backbone.Model.extend();

Blocks = Backbone.Collection.extend({
    model: Block
});

$(document).ready(function () {
    var moduleData = new Blocks([new Block({ name: 'test1' }), new Block({ name: 'test2' })]);

    juvo.start({blocks: moduleData});
});
 class HomeView extends Marionette.CompositeView<Widget> {
    constructor(options?: any) {
        if (!options)
            options = {};
        options.tagName = "table";
        options.id = "home";
        options.className = "table-striped table-bordered";
        options.template = "#home-template";
        options.childView = WidgetView;
        options.itemViewContainer = "tbody";

        super(options);
    }
}
 
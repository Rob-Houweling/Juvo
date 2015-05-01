class WidgetView extends Marionette.ItemView<Widget> {
    constructor(options?: any) {
        if (!options)
            options = {};
        options.template = "#widget-template";
        options.tagName = "tr";
        options.className = "block";

        super(options);
    }
}

 
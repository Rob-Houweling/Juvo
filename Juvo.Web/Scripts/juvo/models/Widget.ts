interface IWidget {
    name?: string;
}

class Widget extends Backbone.Model implements IWidget {
    get name(): string { return this.get("name"); }
    set name(value: string) { this.set("name", value); }

    constructor(widget: IWidget) {
        super();

        for (var key in widget) {
            if (widget.hasOwnProperty(key)) {
                if (key) {
                    this[key] = widget[key];
                }
            }
        }
    }
}

class WidgetCollection extends Backbone.Collection<Widget> {
    constructor(options?: any) {
        if (!options)
            options = {};

        options.model = Widget;
        super(options);
    }
} 
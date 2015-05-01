class Juvo extends Marionette.Application {
    mainRegion: Marionette.Region;

    constructor() {
        super();
        this.on("start", this.onStarted);
        this.addRegions({ mainRegion: "#content" });
    }

    onStarted() {
        var moduleData = new WidgetCollection([new Widget({ name: "test1" }), new Widget({ name: "test2" })]);
        var homeViewInstance = new HomeView({
            collection: moduleData
        });

        juvo.mainRegion.show(homeViewInstance);
    }

}

var juvo = new Juvo();
juvo.start();
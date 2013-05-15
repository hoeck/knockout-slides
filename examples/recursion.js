var ItemModel = function(d) {
    this.name = ko.observable(d ? d.name : "");
    this.value = ko.observable(d ? d.value : "");
};

var ViewModel = function() {
    var self = this;

    // ein Array voller ItemModels
    self.list = ko.observableArray([
        new ItemModel({name:'a', value:1}),
        new ItemModel({name:'b', value:2}),
        new ItemModel({name:'c', value:3}),
    ]);

    self.add = function() {
        self.list.push(new ItemModel());
    };

    self.deleteAll = function() {
        self.list([]);
    };

    // summe aller werte
    self.sum = ko.computed(function() {
        return _.reduce(self.list(), function(a,b) {
            return a + parseInt(b.value());
        }, 0);
    });
};

ko.applyBindings(new ViewModel());

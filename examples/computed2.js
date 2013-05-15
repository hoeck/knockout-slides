var ViewModel = function() {
    var self = this;
    self.a = ko.observable(2);
    self.b = ko.observable(4);
    self.c = ko.computed(function() {
        return Math.pow(
            parseInt(self.a()),
            parseInt(self.b())
        );
    });
};

ko.applyBindings(new ViewModel());

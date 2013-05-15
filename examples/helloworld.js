var ViewModel = function() {
    this.name = ko.observable("Knockout");
};

ko.applyBindings(new ViewModel());

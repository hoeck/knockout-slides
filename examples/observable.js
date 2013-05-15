var ViewModel = function() {
    this.value = ko.observable("Knockout");
};

ko.applyBindings(new ViewModel());

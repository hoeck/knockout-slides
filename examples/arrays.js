// natürlich auch observable
var ViewModel = function() {
    var self = this;
    self.list = ko.observableArray(
        ['a', 'b', 'c']
    );
    
    self.add = function() {
        self.list.push('x');
    };
    
    self.deleteAll = function() {
        self.list([]);
    }
}

ko.applyBindings(new ViewModel());

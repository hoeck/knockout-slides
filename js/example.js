
var Example = function() {
    var self = this;

    var User = function(user) {
        var self = this;
        if (!user) {
            user = {name: "", groups: [], homedir: ""};
        }

        self.name = ko.observable(user.name);
        self.groups = ko.observable(user.groups);
        self.homedir = ko.observable(user.homedir);
    };

    var UserList = function(users) {
        var self = this;
        self.users = ko.observableArray(_.map(users, function(u) {
            return new User(u);
        }));
        
        self.add = function() {
            self.users.push(new User());
        };
    };

    $.getJSON("data.json", function(data) {
        self.userlist = new UserList(data.users);
        ko.applyBindings(self.userlist);
    });
};

$(function() {
    example = new Example();
});

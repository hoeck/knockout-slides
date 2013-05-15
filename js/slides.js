var Slides = function() {
    var self = this;
    
    var slides = $("script[type=template]").map(function() { return this.id });;
    self.slides = slides;

    var ViewModel = function() {
        var self = this;

        self.currentSlideIndex = ko.observable(0);
        self.currentSlideName = ko.computed(function() {
            return slides[self.currentSlideIndex()];
        }, self);

        self.navigate = function(d) {
            var nextslide = self.currentSlideIndex()+d;
            if (nextslide < slides.length && nextslide >= 0) {
                self.currentSlideIndex(nextslide);
            }
        };

        self.setslide = function(i) {
            if (i >= 0 && i < slides.length) {
                self.currentSlideIndex(i);
            }
        };

        self.next = function() { self.navigate(1) };
        self.prev = function() { self.navigate(-1) };

        self.prevSlideName = ko.computed(function() {
            if (self.currentSlideIndex() == 0) {
                return "-";
            } else {
                return slides[self.currentSlideIndex()-1];
            }
        });
        self.nextSlideName = ko.computed(function() {
            if (self.currentSlideIndex()+1 == slides.length) {
                return "-";
            } else {
                return slides[self.currentSlideIndex()+1];
            }
        });

    };

    self.viewmodel = new ViewModel;
    ko.applyBindings(self.viewmodel);
};

$(function() {
    slides = new Slides();
    $(window).on("hashchange", function() {
        slides.viewmodel.setslide(window.location.hash.substring(1));
    });
    slides.viewmodel.setslide(parseInt(window.location.hash.substring(1)));
});

app.views.TestView = Backbone.View.extend({

    // initialize: function () {
    //     // this.searchResults = new app.models.EmployeeCollection();
    //     // this.searchresultsView = new app.views.EmployeeListView({model: this.searchResults});
    //     //inicializar dados
    // },

    render: function () {
        this.$el.html(this.template()); //há quem tenhas cenas como this.model.attributes. Os model based
        // quando tirei esta linha começu a trabalhar
        // $(".content", this.el).html(new app.views.TestView().render().el); 
        return this;
    },

    events: {
        "click .button-prev": "back"
    },

    back: function() {
        window.history.back();
        return false;
    }

});
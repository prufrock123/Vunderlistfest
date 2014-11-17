;(function(window, undefined){

    window.app = window.app || {};

    var TodosView = Backbone.View.extend({
        tagName: "div",
        className: "todos",
        html: "<form><div><input type='text'></div><button>add</button></form>",
        render: function(collection){
            // overwrites the inner html to the html above
            this.el.innerHTML = html;

            // for each item in the collection
            var self = this;
            collection.forEach(function(m){
                // ... append a new TodoView()
                var subview = new app.TodoView({model: m});
                self.$el.append(subview.el);
            })
        }
    });

    app.TodosView = TodosView;

})(window, undefined);
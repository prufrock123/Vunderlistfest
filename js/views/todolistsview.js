;(function(window, undefined){

    window.app = window.app || {};

    var TodoListsView = Backbone.View.extend({
        tagName: "div",
        className: "todolists grid grid-2-400 grid-4-600 squarify-grid",
        html: "<form><div><input type='text'></div><button>add</button></form>\n",
        render: function(){
            this.el.innerHTML = this.html
            // 1. empty out the container element (html is "")
            // this.el.innerHTML = "";
            // 2. for each model in the collection
            var self = this;
            this.collection.forEach(function(m){
                var subview = new app.TodoListView({model: m});
                self.$el.append(subview.el);
                self.$el.append("\n");
            })
            // 3. ... append a TodoListView(model)
        },
        events: {
            "submit form": "addTodoList"
        },
        addTodoList: function(event){
            event.preventDefault();
            var newTodoList = { name: this.el.querySelector("input").value };
            this.collection.add(newTodoList);
            this.render(this.collection);
        },
        initialize: function(){
            var self = this;
            $.subscribe("todoList_deleted", function(error, model){
                self.collection.remove(model)
                self.render(self.collection);
            })
        }
    });

    app.TodoListsView = TodoListsView;

})(window, undefined);
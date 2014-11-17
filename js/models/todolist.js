;(function(window, undefined){

    window.app = window.app || {};

    var TodoList = Backbone.Model.extend({
        validate: function(attrs){
            if(!attrs.name){
                return "TodoLists must have a name."
            }
            if(!(attrs.todos instanceof app.Todos)){
                return "todos must be an instance of the Todos Collection."
            }
        },
        initialize: function(){},
        defaults: {
            todos: new app.Todos()
        }
    })

    app.TodoList = TodoList;

})(window, undefined);
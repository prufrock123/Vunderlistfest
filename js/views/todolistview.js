;(function(window, undefined){

    window.app = window.app || {};

    var TodoListView = Backbone.View.extend({
        tagName: "a",
        template: "<span>{name}</span> <span class='delete'>delete</span>",
        initialize: function(){
            this.render();
        },
        render: function(){
            this.el.setAttribute('href', "#lists/"+this.model.cid);
            this.el.innerHTML = _.template(this.template, this.model.attributes);
            // console.dir(this)
        },
        events: {
            "click .delete": "removeMeList"
        },
        removeMeList: function(event){
            $.publish("todoList_deleted", this.model);
        }
    });

    app.TodoListView = TodoListView;

})(window, undefined);
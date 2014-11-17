;(function(window, undefined){

    window.app = window.app || {};

    var TodoView = Backbone.View.extend({
        tagName: "div",
        className: "todos",
        template: "<span>{title}</span>",
    });

    app.TodoView = TodoView;

})(window, undefined);
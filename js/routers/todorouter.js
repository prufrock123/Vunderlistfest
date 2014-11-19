;(function(window, undefined){

    window.app = window.app || {};

    var TodoRouter = Backbone.Router.extend({
        routes: {
            "lists/:id": "page2",
            "*default": "page1"
        },
        page1: function(){
            this.todolistsview.render();

            console.dir(this.todolistsview);
            this.todolistsview.el.classList.add('active');
            // this.todolistsview.el.querySelector('.todolists').classList.add('active')

            this.todosview.el.classList.remove('active');
        },
        page2: function(id){
            // console.dir(this);
            var todolistmodel = this.todolists.filter(function(model){
                return model.cid === id;
            });

            if(!todolistmodel.length){
                window.location.hash = "#";
                return;
            }

            todolistmodel = todolistmodel[0];

            this.todosview.render(
                todolistmodel.get('todos')
            );

            this.todolistsview.el.classList.remove('active');
            // this.todolistsview.el.querySelector('.todolists').classList.remove('active')
            this.todosview.el.classList.add('active');
        },
        initialize: function(){
            // app view
            this.appview = new app.AppView();

            // data
            this.todolists = new app.TodoLists([
                { name: "todolist No.1" },
                { name: "todolist No.2" },
                { name: "todolist No.3" },
                { name: "todolist No.4" },
                { name: "todolist No.5" },
                { name: "todolist No.6" },
                { name: "todolist No.7" },
                { name: "todolist No.8" }
            ]);

            this.todolists.forEach(function(listModel){
                // debugger;
                for(var i = 0; i < 6; i++){
                    listModel.get('todos').add({ title: "todo #"+i });
                }
            });

  
            // append a TodoListsView only ONCE
            this.todolistsview = new app.TodoListsView({
                collection: this.todolists
            });
            this.appview.$el.append( this.todolistsview.el );

            // append a TodosView only ONCE
            this.todosview = new app.TodosView();
            this.appview.$el.append( this.todosview.el );

            Backbone.history.start();
        }
    });

    app.TodoRouter = TodoRouter;

})(window, undefined);
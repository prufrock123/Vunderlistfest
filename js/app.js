
    window.onload = app;

    // runs when the DOM is loaded
    function app(){

        // load some scripts (uses promises :D)
        loader.load(
            {url: "./bower_components/jquery/dist/jquery.min.js"},
            {url: "./bower_components/lodash/dist/lodash.min.js"},
            {url: "./bower_components/backbone/backbone.js"},
            {url: "./dist/style.css"},

            // todos
            {url: "./js/models/todo.js"},
            {url: "./js/collections/todos.js"},

            // todolists
            {url: "./js/models/todolist.js"},
            {url: "./js/collections/todolists.js"},

            // views
            {url: "./js/views/appview.js"},
            {url: "./js/views/todolistsview.js"},
            {url: "./js/views/todolistview.js"},
            {url: "./js/views/todosview.js"}

        ).then(function(){
            _.templateSettings.interpolate = /{([\s\S]+?)}/g;

            // app level view
            // - make document.body the container for appview
            window.appview = new app.AppView();

            // TodoLists Collection
            var todolists = new app.TodoLists([
                { name: "todolist #1" },
                { name: "todolist #2" },
                { name: "todolist #3" },
                { name: "todolist #4" },
                { name: "todolist #5" },
                { name: "todolist #6" }
            ])

            // attached the TodoLists colelction to the TodoLists view
            // - inside here, this will append a TodoList view for each model in the collection
            var todolistsview = new app.TodoListsView({
                collection: todolists
            });

            appview.$el.append( todolistsview.el );

            var todosview = new app.TodosView();

            appview.$el.append( todosview.el );

            // start app?
        })

    }


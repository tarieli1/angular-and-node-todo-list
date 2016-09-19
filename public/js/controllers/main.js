(function(){
    'use strict';

    angular
        .module('todoController', ['todoService'])
        .controller('todoController', todoController);

    function todoController(todoService) {

        var vm = this;
        vm.createTodo = createTodo;
        vm.deleteTodo = deleteTodo;
        vm.getAllTodos = getAllTodos;
        vm.formData = {};

        vm.getAllTodos();

        // when landing on the page, get all todos and show them
        function getAllTodos(){
        todoService.getAllTodos()
            .then(function(data){
                vm.todos = data;
                console.log(data);
            }, function(error){
                console.log('Error: ' + error);
            });
        }

        // when submitting the add form, send the text to the node API
        function createTodo() {
            if(vm.formData !== null && vm.formData !== ''){
            todoService.createTodo(vm.formData)
                .then(function(data){
                    vm.formData = {}; // clear the form so our user is ready to enter another
                    vm.todos = data;
                    console.log(data);
                }, function(error){
                    console.log('Error: ' + error);
                });
            }
        };

        // delete a todo after checking it
        function deleteTodo(id) {
            todoService.deleteTodo(id)
                .then(function(data){
                    vm.todos = data;
                    console.log(data);
                }, function(error){
                    console.log('Error: ' + error);
                });
        };
    }

})();

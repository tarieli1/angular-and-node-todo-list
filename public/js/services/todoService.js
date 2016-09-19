(function(){
    'use strict';

    angular
        .module('todoService', [])
        .factory('todoService', todoService);

    function todoService($http){

        var service = {
            getAllTodos: getAllTodos,
            createTodo: createTodo,
            deleteTodo: deleteTodo
        };
        return service;
        
        function getAllTodos(){
            return $http.get('/api/todos')
                .then(success, fail);

            function success(response){
                return response.data;
            }

            function fail(error){
                throw error;
            }
        }

        function createTodo(todoData){
            return $http.post('/api/todos', todoData)
                 .then(success, fail);

            function success(response){
                return response.data;
            }

            function fail(error){
                throw error;
            }
        }

        function deleteTodo(id){
            return $http.delete('/api/todos/' + id)
                 .then(success, fail);

            function success(response){
                return response.data;
            }

            function fail(error){
                throw error;
            }
        }
    }

})();
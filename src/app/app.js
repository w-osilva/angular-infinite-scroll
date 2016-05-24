/**
 * Created by washington on 23/05/16.
 */
angular.module("App", ['infinite-scroll'])

    .service('urlHelper', function(){
        this.getQueryString = function(){
            return window.location.search;
        };

        this.parseQueryString = function(qstr){
            if(!qstr){
                qstr = this.getQueryString();
            }
            var query = {};
            var a = qstr.substr(1).split('&');
            for (var i = 0; i < a.length; i++) {
                var b = a[i].split('=');
                query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
            }
            delete query[""];
            return query;
        };

        this.getRandomInt = function(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        };

        this.getRandomParam = function() {
            return 'r=' + (this.getRandomInt(1, 999999)).toString();
        };
    })

    .factory('Person', function(urlHelper, $http){
        var Person = function() {
            this.items = [];
            this.busy = false;
            this.after = '';
            this.page = 1
        };

        Person.prototype.nextPage = function() {
            if (this.busy) return;
            this.busy = true;

            var url = "http://127.0.0.1:3000/people.json?page=" + this.page;
            $http({
                url: url
            }).success(function(response) {
                var items = response;
                for (var i = 0; i < items.length; i++) {
                    this.items.push(items[i]);
                }
                this.after = "t3_" + this.items[this.items.length - 1];
                this.page += 1;
                this.busy = false;
            }.bind(this));
        };

        return Person;
    })

    .controller('paginationCtrl', function($scope, Person){
        $scope.person = new Person();
    });
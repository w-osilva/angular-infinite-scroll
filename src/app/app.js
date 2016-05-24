/**
 * Created by washington on 23/05/16.
 */
angular.module("App", ['infinite-scroll'])

    .factory('Person', function(){
        var Person = function() {
            this.items = [];
            this.busy = false;
            this.after = '';
        };

        Person.prototype.nextPage = function() {
            if (this.busy) return;
            this.busy = true;

            for(var i=0; i<=10; i++) {
                this.items.push({
                    name: faker.name.findName(),
                    email: faker.internet.email(),
                    address: faker.address.streetAddress(),
                    bio: faker.lorem.sentence(),
                    image: faker.image.avatar()
                });
            }

            this.after = "t3_" + this.items[this.items.length - 1];
            this.busy = false;
        };

        return Person;
    })

    .controller('paginationCtrl', function($scope, Person){
        $scope.person = new Person();
    });
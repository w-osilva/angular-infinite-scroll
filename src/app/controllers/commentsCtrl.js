App.controller('commentsCtrl', function($scope, api){
    $scope.paginator = new Comment(api);
});
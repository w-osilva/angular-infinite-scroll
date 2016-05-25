App.directive('comment', function(){
    var directive = {};
    directive.restrict = "E";
    directive.templateUrl = "/src/app/directives/templates/comment.html";
    directive.replace = true;
    directive.scope = {
        comment: "="
    };
    directive.link = function(scope, element, attrs) {
        scope.comment = (attrs.comment) ? attrs.comment : null;
        if(!scope.comment){
            console.log("OOOPS... Comment is not defined.");
            return;
        }
    };
    return directive;
});
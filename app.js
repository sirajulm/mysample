app = angular.module('myApp', ['ui.router']);

app
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('page', {
            url: '/page?postID',
            templateUrl: 'partials/post.html',
            controller: 'postController'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });    

});
/* Directive for identify scoll and adjust the percentage marker for the post */
app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
      
        angular.element($window).bind("scroll", function() {
            var box = element[0].getBoundingClientRect();
            scope.box = box;
            var element_id = attrs.id;
            var nav_item = angular.element(document.querySelector('#nav-'+element_id));
            if((box.height + box.top) >0 && box.top < 0){

            	var percent = ((box.height + box.top)/box.height)*100;
            	
            	nav_item.children(0).css('height', percent+"%");
         	} else {
         		nav_item.children(0).css('height', "0%");
         	}
            scope.$apply();
        });
    };
})
/* Directive to load html template into the ng-repeat elements */
.directive("loadTemplate", function() {
  return {
    restrict: 'A',
    replace: true,
    scope: { snippet: '@'},
    template: '<div ng-include="snippet"></div>'
  };
});
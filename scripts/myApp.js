var app = angular.module('searchApp', []);

app.directive("searchStatus", function(){
	return{
		template: "<h3>Search results for {{search}}</h3>"
	}
});
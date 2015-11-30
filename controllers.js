app
.controller('appController', function($scope, postService){
	$scope.posts = postService.getPosts();
})

.controller('postController', function($scope, $stateParams, postService){
	
	$scope.postID = $stateParams.postID;
	$scope.posts = [];
	var current_post = postService.getPost($scope.postID);
	var all_posts = postService.getPosts();
	all_posts.splice($scope.postID,1);
	all_posts.unshift(current_post);
	$scope.posts = all_posts; 
	console.log($scope.posts);
	//console.log(postService.getPosts());
});

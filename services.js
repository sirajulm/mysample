app
.factory("postService", function () {
	var factory = {};
	var posts = [{
		name: "This is first post",
		path: "partials/post1.html"
		},
		{
		name: "This is second post",
		path: "partials/post2.html"
		},
	]; // add more if needed like using ngInfiniteScroll

	factory.getPosts = function(){
		var all_posts = posts.slice();
		return all_posts;
	};

	factory.getPost = function(id){

		return posts[id];
	};


	return factory;
});
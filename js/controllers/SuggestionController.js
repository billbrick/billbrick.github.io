app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
    
    $scope.post = suggestions.posts[$routeParams.id];
    
    $scope.addComment = function() {
        
        // if comment empty, don't submit
        if($scope.post.comments === "") {
            return;
        }
        
        // push comment into a suggestion post
        $scope.post.comments.push({
            body: $scope.body,
            upvotes: 0
        })
        
        $scope.body = '';
        
    }
    
    $scope.upVote = function(comment) {
        comment.upvotes += 1;
    }
    
}])
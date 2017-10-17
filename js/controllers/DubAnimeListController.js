app.controller('DubListController', ['$scope', function($scope) {
	
	$scope.pageTitle = '~ Dubbed Anime Selection ~';
	
	$scope.anime = [
		{
			name: 'Kaze no Stigma (Dub)',
			pageUrl: 'dub_anime/kazenostigmadub/kazenostigmadub.html'
		},
		{
			name: 'Miss Kobayashi\'s Dragon Maid (Dub)',
			pageUrl: 'dub_anime/kobayashichinomaidosamadub/kobayashisandub.html'
		}
	];
	
}]);
app.controller('SubListController', ['$scope', function($scope) {
	
	$scope.pageTitle = '~ Subbed Anime Selection ~';
	
	$scope.anime = [
		{
			name: 'Acchi Kocchi (Sub)',
			pageUrl: 'sub_anime/acchikocchisub/acchi_kocchi_sub.html'
		},
		{
			name: 'Irregular at Magic High School (Sub)',
			pageUrl: 'sub_anime/irrigular_at_magic_high_school/irregular_at_magic_high_school_sub.html'
		},
		{
			name: 'Miss Kobayashi\'s Dragon Maid (Sub)',
			pageUrl: 'sub_anime/kobayashichinomaidosamasub/kobayashisansub.html'
		}
	];
	
}]);
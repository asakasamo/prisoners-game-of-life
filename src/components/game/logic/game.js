export default {};

/**
 * Advances the board to the next generation
 */
$scope.advance = function() {
   $scope.scores = $scope.doBattle($scope.board);
   $scope.board = $scope.getNextGeneration($scope.board, $scope.scores);
};


function HomeController ($scope, URL, $http) {
    
  $scope.name = 'Tim Whitacre';
  
  $scope.addPet = function (petObj) {
    console.log(petObj);
  }
    
}

HomeController.$inject = ['$scope', 'URL', '$http'];
export { HomeController };

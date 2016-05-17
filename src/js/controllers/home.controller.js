
function HomeController ($scope, URL, $http) {
    
  $scope.name = 'Tim Whitacre';
  
  $scope.addPet = function (petObj) {
    
    $http.post(URL, petObj).then(function(res) {
      console.log(res);
      
      $scope.pet = {};
    });
    
    
  }
    
}

HomeController.$inject = ['$scope', 'URL', '$http'];
export { HomeController };

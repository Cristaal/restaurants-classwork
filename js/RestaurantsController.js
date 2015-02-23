goodRestaurant.controller('RestaurantsCtrl', function StudentsCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    var newRestaurant = {
                          name: $scope.restaurant.restaurantName,
                          description: $scope.restaurant.restaurantDescription,
                          location: $scope.restaurant.restaurantLocation
                        }
  $scope.restaurants.push( newRestaurant );
  $scope.restaurant.restaurantName = null;
  $scope.restaurant.restaurantDescription = null;
  $scope.restaurant.restaurantLocation = null;
  };

});

var cougar_inn_app = angular.module('cougar_inn', ['ui.bootstrap']);

function app_route_config($routeProvider) {
	$routeProvider.
	when('/', {
		controller: HomeController,
		templateUrl: 'home.html'
	}).
	when('/about_us', {
		controller: AboutUsController,
		templateUrl: 'about_us.html'
	}).
	when('/columbia_college', {
		controller: ColumbiaCollegeController,
		templateUrl: 'columbia_college.html'
	}).
	when('/around_columbia', {
		controller: AroundColumbia,
		templateUrl: 'around_columnbia.html'
	}).
	when('/reservation', {
		controller: NewReservationController,
		templateUrl: 'new_reservation.html'
	}).
	when('/reservation/:id', {
		controller: ReservationController,
		templateUrl: 'reservation.html'
	}).
	when('/reservations', {
		controller: ReservationsController,
		templateUrl: 'reservations.html'
	}).
	when('/feedback', {
		controller: FeedbackController,
		templateUrl: 'feedback.html'
	}).
	when('/directions', {
		controller: DirectionsController,
		templateUrl: 'directions.html'
	}).
	when('contact_us', {
		controller: ContactUsController,
		templateUrl: 'contact_us.html'
	}).
	otherwise({
		redirectTo: '/'
	});
}

cougar_inn_app.config(app_route_config);

function ReservationController($scope) {
	$scope.reserve_room = funciton () {
		$.ajax({
			data: 	'name=' + $scope.reservation.name +
					'&contact=' + $scope.reservation.contact +
					'&checkin=' + $scope.reservation.checkin +
					'&checkout=' + $scope.reservation.checkout +
					'&roomtype=' + $scope.reservation.roomtype,
			url: 	'process_reservation.php',
			method: 'POST',
			success: function(confirmation) {
				$scope.reservation.confirmation = confirmation;
				alert("Confirmation number is " + confirmation);
			}
		});
	}
}
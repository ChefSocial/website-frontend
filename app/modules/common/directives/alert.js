(function (angular){
	'use strict';

	angular.module('chefSocial')
		.directive('alertsDirective', function(){
			return{
				templateUrl: '/modules/common/directives/alert.html',
				controller: ['$scope', '$rootScope', function ($scope, $rootScope){

					this.init = function (){
						$scope.showAlert = false;
						$scope.status='';
					}
					this.init();

					$rootScope.$on('showAlert',function(event, data){
						$scope.alertMessage = data.message;
						$scope.status = data.status
						$scope.showAlert = true;
						$('.csAlertWrapper').show();
						setTimeout(function(){
							$('.csAlertWrapper').fadeOut(1500);
						}, 4000);
					});

				}]
			};
		});
})(window.angular);
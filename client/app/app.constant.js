(function(angular, undefined) {
  angular.module("administracionRemotaApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);
angular.module('notif')
.factory('MemberService', ['$http', '$q', 'API_ENDPOINT', function($http, $q, API_ENDPOINT){
  var members = [];
  return {
    getMembers: function() {
      var deffered = $q.defer();
      $http.get(API_ENDPOINT + '/members').success(function(members) {
        console.log(members)
        return deffered.resolve(members);
      }).error(function(err){
        return deffered.reject(err)
      })
      return deffered.promise;
    }
  }
}])
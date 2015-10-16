angular.module('notif')
.controller('NotifyCtrl', ['MemberService', '$scope', function(MemberService, $scope){
  notifyCtrl = this;
  MemberService.getMembers().then(function(members){
    $scope.members = members;
  })
}])
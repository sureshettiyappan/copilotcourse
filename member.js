function skillsMember() {
  return {
    restrcit: 'E',
    templaplateUrl: 'member.html',
    controller: 'MemberController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
        menubar: '='
    }  
  };
}
'use strict';

module.exports = [function(){
  return {
    template: require('./item.html'),
    restrict: 'E',
    scope: {
      dj: '='
    },
    controller: ['TeamStore', function(TeamStore){
      var vm = this;

      vm.addToTeam = function(dj){
        TeamStore.addMember(dj);
      }

    }],
    controllerAs: 'vm',
    bindToController: true
  }
}];

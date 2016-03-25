import tmpl from './dj-list.html';

export default {
    template: tmpl,
    bindings: {},
    controller: ['TeamStore', function(TeamStore){
      var $ctrl = this;
      $ctrl.team = TeamStore.get();

      $ctrl.removeMember = function(id){
        TeamStore.removeMember(id);
      };
    }]
  };

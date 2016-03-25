import tmpl from './dj-item.html';

export default {
    template: tmpl,
    bindings: {
      dj: '='
    },
    controller: ['TeamStore', function(TeamStore){
      var $ctrl = this;

      $ctrl.removeMember = function(id){
        TeamStore.removeMember(id);
      };
    }]
  };

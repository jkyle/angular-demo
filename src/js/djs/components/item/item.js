import tmpl from './item.html';

export default {
    template: tmpl,
    bindings: {
      dj: '=' // = two-way, @ one-way "String", & one-way <-s
    },
    controller: ['TeamStore', function(TeamStore){
      const $ctrl = this;

      $ctrl.buttonName = 'Add to Team';

      $ctrl.addToTeam = function(dj){
        TeamStore.addMember(dj);
      };

    }]
  };

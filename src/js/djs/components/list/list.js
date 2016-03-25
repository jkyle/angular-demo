import tmpl from './list.html';

export default {
    template: tmpl,
    bindings: {},
    controller: ['DJStore', function(DJStore){
      const $ctrl = this;
      $ctrl.djs = DJStore.all();

      $ctrl.addNew = function(){
        DJStore.add();
      };
    }]
  };

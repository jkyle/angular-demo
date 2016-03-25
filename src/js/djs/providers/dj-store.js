'use strict';

const djData = []; // GET /api/djs

export default ['RandomData', function(RandomData){

  _.times(3, function(){
    djData.push(RandomData.dj());
  })

  return {
    one: function(id){
      return _.find(djData, {'id': id});
    },
    add: function(){
      djData.push(RandomData.dj());
    },
    all: function(){
      return djData;
    }
  }
}];

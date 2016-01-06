'use strict';

var dummyData = [];

module.exports = ['RandomData', function(RandomData){

  _.times(3, function(){
    dummyData.push(RandomData.dj());
  })

  return {
    one: function(id){

    },
    add: function(){
      dummyData.push(RandomData.dj());
    },
    all: function(){
      return dummyData;
    }
  }
}];

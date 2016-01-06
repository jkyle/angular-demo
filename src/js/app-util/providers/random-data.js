'use strict';

module.exports = [function(){

  var adjective = ['Cool', 'Dope', 'Deadly', 'Funky', 'Slammin\''],
      noun = ['Beats', 'Alpaca', 'U-Turn', 'Roundabout', 'Pinocchio', 'Angular', 'Space Monkey', 'Space 9'],
      style = ['Hip Hop', 'Disco', 'House', 'Trance', 'Wedding', 'Karaoke', 'Trip Hop', 'Dubstep'];

  function makeName(){
    return 'DJ ' + _.sample(adjective) + ' ' + _.sample(noun);
  }

  function newDj(){
    var data = {
      id: _.uniqueId(),
      name: makeName(),
      style: _.sample(style),
      level: _.random(1,8)
    }

    data.jamPower = data.level + _.random(1, 6)

    return data;
  }

  return {
    dj: newDj
  }

}];

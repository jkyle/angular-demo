export default [function(){

  var adjective = ['Cool', 'Dope', 'Deadly', 'Funky', 'Slammin\'', 'Supersonic', 'Ultra'],
      noun = ['Dis B John', 'Beats', 'Alpaca', 'U-Turn', 'Roundabout', 'Pinocchio', 'Angular', 'Space Monkey', 'Space 9', 'Tomcat', 'Sound Machine'],
      style = ['Hip Hop', 'Disco', 'House', 'Trance', 'Wedding', 'Karaoke', 'Trip Hop', 'Dubstep', 'Glitch', 'Gabber', 'Drumb \'n\' Bass'];

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

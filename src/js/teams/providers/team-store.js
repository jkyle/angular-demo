'use strict';

var team = [];

module.exports = [function(){

  return {
    get: function(){
      return team;
    },
    addMember: function(member){
      if(!_.find(team, {'id': member.id})){
        team.push(member);
      }
    },
    removeMember: function(id){
      var member = _.find(team, {'id': id});
      var idx = _.indexOf(team, member);
      if(idx >= 0){
        team.splice(idx, 1);
      }
    }
  }

}];

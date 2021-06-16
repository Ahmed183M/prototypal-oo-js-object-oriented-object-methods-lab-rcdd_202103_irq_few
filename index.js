function BoardMember(name, homeState, training){
  return(
      this.name = name,
      this.homeState = homeState,
      this.training = training
    )
    
    BoardMember.prototype.veto = function(){
      return "No, I must disagree";
    }
}
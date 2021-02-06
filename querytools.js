var qt = {
  ask:function(query) {
    prompt(query)
  }
  modify : function(id,part,to) {
    document.getElementById(id).part = to
  }
}

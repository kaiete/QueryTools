var qt = {
  modify : function(id,part,to) {
    document.getElementById(id).part = to
  },
  ask : function(query) {
    let askresponse = prompt(query)
    return askresponse
  },
  say : function(msg) {
    alert(msg)
  }
}

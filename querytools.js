var qt = {
  mod : function(id,to) {
    document.getElementById(id).innerHTML = to
  },
  ask : function(query) {
    let askresponse = prompt(query)
    return askresponse
  },
  say : function(msg) {
    alert(msg)
  },
  log : function(msg) {
    console.log(msg)
  }
}

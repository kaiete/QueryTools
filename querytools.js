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
    return "undefined"
  },
  link : function(site) {
    window.location.href=site
  },
  redir : function(site) {
    window.location.replace(site)
  },
  params : function() {
    let parameters = new URLSearchParams(location.search)
    let editedparams = decodeURIComponent(parameters)
    delete parameters
    let params = editedparams
    return params
  },
  if : function(statementToCheck,toRunIfTruthy,toRunIfFalsy) {
    if (statementToCheck) {
      return true
      eval(toRunIfTruthy)
    } else if (statementToCheck == false) {
      return false
      eval(toRunIfFalsy)
    } else {
      return "QT-Error: returned neither true nor false"
      alert("Please press Ctrl+shift+I (Cmd+shift+I), then tap Console")
      console.log("QueryTools ran into an error, and this site might not work correctly. We recommend contacting the developer and telling them that QueryTools found an invalid qt.if statement.")
    }
  },
  clone : function() {
    this.clone = "hmmmmmmmm that didn't work"
  }
}

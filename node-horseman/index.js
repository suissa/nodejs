var Horseman = require('node-horseman')
var horseman = new Horseman()


var finalData = []

function getdata() {
  return horseman.evaluate(function(){
    var descNode = document.querySelectorAll('.descr a')
    var desc = Array.prototype.map.call(descNode, function (t) { return t.textContent })

    var valueNode = document.querySelectorAll('.price a')
    var value = Array.prototype.map.call(valueNode, function (t) { return t.textContent })
    
    var finalData = []

    for (var i=0 ; i < desc.length; i ++) {
      var item = {}
      item['desc'] = desc[i]
      item['value'] = value[i]
      finalData.push(item)
    }

    console.log(JSON.stringify(finalData))

    return finalData

  })
}

function hasNextPage(){
	return horseman.exists('.lnkPagNext')
}

function scrape(){
  return new Promise( function(resolve, reject){
    return getdata()
    .then(function(){
      return hasNextPage()
      .then(function(hasNext){
        if (hasNext){
          return horseman
            .click('.lnkPagNext')
            .wait(3000)
            .then(scrape)
        }
      })
    })
    .then(resolve)
    .catch(function(err){
      console.log(err)
    })
  })
}


horseman
  .on('consoleMessage', function(msg){
    console.log(msg)
  })
  .open('http://www.angeloni.com.br/super/index')
  .then(scrape)
  .finally(function(finalData) {
    console.log(finalData)
  })
  .close()
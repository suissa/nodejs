const Horseman = require('node-horseman')
const horseman = new Horseman()
const fs = require('fs')

var finalData = []

function getdata() {
  return horseman.evaluate(function(){
    const descNode = document.querySelectorAll('.descr a')
    const desc = Array.prototype.map.call(descNode, function (t) { return t.textContent })

    const valueNode = document.querySelectorAll('.price a')
    const value = Array.prototype.map.call(valueNode, function (t) { return t.textContent })
    
    const finalData = []

    for (var i=0 ; i < desc.length; i ++) {
      var item = {}
      item['desc'] = desc[i]
      item['value'] = value[i]
      finalData.push(item)
    }

    return finalData

  })
}

function hasNextPage(){
	return horseman.exists('.lnkPagNext')
}

function scrape(){
  return new Promise( function(resolve, reject){
    return getdata()
    .then(function(newData){
      finalData = finalData.concat(newData)
      console.log(`Got ${finalData.length} items from ${finalData.length/12} pages`)
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
  })
}


horseman
  .on('consoleMessage', function(msg){
    console.log(msg)
  })
  .open('http://www.angeloni.com.br/super/index')
  .then(scrape)
  .finally(function() {
    fs.writeFile('angeloniData.json', JSON.stringify(finalData), (err) => {
      if (err) throw err
      console.log('The file has been saved!')
      horseman.close()
    })
  })

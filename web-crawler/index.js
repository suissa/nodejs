const Crawler = require("crawler")

const c = new Crawler({
  maxConnections : 10,
  // This will be called for each crawled page
  callback : function (error, res, done) {
    if(error){
      console.log(error)
    }else{
      const $ = res.$;
      // $ is Cheerio by default a lean implementation of core jQuery designed specifically for the server
      $('#content').each(function(){
				let desc  = $(this).text().trim()
        console.log(desc)
			})
    }
    done()
  }
})

c.queue('http://www.angeloni.com.br/super/index')
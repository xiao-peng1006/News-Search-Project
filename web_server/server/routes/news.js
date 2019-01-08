var express = require('express');
var router = express.Router();

// GET news list
router.get('/', function(req, res, next) {
  news = [
    {
      "source": "business-inside",
      "author": "Matthew Debord",
      "title": "Elon Musk has no problem selling Tesla cars - but strong demand could become a problem",
      "description": "The temptation is to lump all of Tesla's problems together into one big problem bucket, mainly because the Model 3's delays have been so extreme.",
      "url": "https://www.businessinsider.in/elon-musk-has-no-problem-selling-tesla-cars-but-strong-demand-could-become-a-problem/articleshow/63058533.cms",
      "urlToImage": "https://static-ssl.businessinsider.com/image/57d6d009077dcc1c008b5151-2120/tesla%20model%20s%20new%20.png",
      "publishedAt": "2018-02-24T13:57:14Z",
      "digest": "3RjuEomJo2asf60adyZbU70HA==\n",
      "reason": "Today"
    },
    {
      "source": "fortune",
      "title": "Here's How Much Bitcoin Elon Musk Owns",
      "description": "Tesla CEO Elon Musk isn’t exactly active in cryptocurrency. Musk revealed this week on Twitter how much Bitcoin he owns—and it’s not much.",
      "url": "http://fortune.com/2018/02/23/bitcoin-elon-musk-value/",
      "urlToImage": "https://fortunedotcom.files.wordpress.com/2018/01/elon-musk-tesla-silicon-valley-sex-party.jpg?w=1024",
      "publishedAt": "2018-02-23T23:26:30Z",
      "digest": "3RjuEomJo260adyZbU70HA==\n",
      "reason": "Recommend"
    }
  ]

  res.json(news);
});

module.exports = router;

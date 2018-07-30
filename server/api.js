const cp = require('child_process')

module.exports = {
  gsNews(req, res, next) {
    cp.exec('python get_gsNews.py ', (err, stdout, stderr) => {
      // if (err) console.log('stderr', err);
      // if (stdout) console.log('stdout', stdout);

      res.json(stdout); //stdout 为标准输出
    });
    /*res.json({
    	title: "这是一条新闻",
    	link: "www.gamersky.com"
    });*/
  },
  vgNews(req, res, next) {
    cp.exec('python get_vgNews.py ', (err, stdout, stderr) => {
      // if (err) console.log('stderr', err);
      // if (stdout) console.log('stdout', stdout);

      res.json(stdout); //stdout 为标准输出
    });
  }
}

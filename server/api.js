const cp = require('child_process')

module.exports = {
  gsNews(req, res, next) {
    cp.exec('python get_gsNews.py ', (err, stdout, stderr) => {
      // if (err) console.log('stderr', err);
      // if (stdout) console.log('stdout', stdout);
      // res.json(stdout); //stdout 为标准输出
      this._sliceJson(stdout, req, res);
    });
  },
  vgNews(req, res, next) {
    cp.exec('python get_vgNews.py ', (err, stdout, stderr) => {
      // if (err) console.log('stderr', err);
      // if (stdout) console.log('stdout', stdout);
      // res.json(stdout); //stdout 为标准输出
      this._sliceJson(stdout, req, res);
    });
  },
  _sliceJson(stdout, req, res) {
    let i = 0;
    let sum = 0;
    let newsinfo = {};
    let jsonInfo = JSON.parse(stdout);
    let latestUpdate = jsonInfo['latestUpdate'];
    for (x in jsonInfo) {
      delete jsonInfo['latestUpdate']; //删除json中的指定项
      if (i < req.params.page * 12) {
        //将json切割
        newsinfo[x] = jsonInfo[x];
        i++;
      }
      sum++; //统计json中除去latestUpdate项的长度,也就是news的条数
    }
    res.json({
      news: newsinfo,
      details: {
        sum: sum,
        latestUpdate: latestUpdate,
        loaded: i
      }
    });
  }
}

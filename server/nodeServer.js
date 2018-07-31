const fs = require('fs');
const path = require('path');
const express = require('express');
const cp=require('child_process')
const app = express();

// api接口
var apiRoutes = express.Router();
apiRoutes.get('/gsNews/:page', function(req, res) {
	cp.exec('python ./get_gsNews.py ', (err, stdout, stderr) => {
		_sliceJson(stdout, req, res);
	});
});

apiRoutes.get('/vgNews/:page', function(req, res) {
	cp.exec('python ./get_vgNews.py ', (err, stdout, stderr) => {
		_sliceJson(stdout, req, res);
	});
});

app.use('/api', apiRoutes);
app.use(express.static(path.resolve(__dirname, '../dist')))
app.get('*', function(req, res) {
	const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
	res.send(html)
})
app.listen(8081);
console.log('success listen at port:8081......');

function _sliceJson(stdout, req, res) {
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
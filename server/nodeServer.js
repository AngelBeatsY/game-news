const fs = require('fs');
const path = require('path');
const express = require('express');
const cp=require('child_process')
const app = express();

// api接口
var apiRoutes = express.Router();
apiRoutes.get('/gsNews', function(req, res) {
	cp.exec('python ./get_gsNews.py ', (err, stdout, stderr) => {
		res.json(stdout); //stdout 为标准输出
	});
});

apiRoutes.get('/vgNews', function(req, res) {
	cp.exec('python ./get_vgNews.py ', (err, stdout, stderr) => {
		res.json(stdout); //stdout 为标准输出
	});
});

app.use('/api', apiRoutes);
app.use(express.static(path.resolve(__dirname, '../dist')))
app.get('*', function(req, res) {
	const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
	res.send(html)
})
app.listen(8082);
console.log('success listen at port:8082......');
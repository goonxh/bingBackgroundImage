const request = require('request');
const fs = require('fs');
const path = require('path');
const schedule = require('node-schedule');

var rule1 = new schedule.RecurrenceRule();  
var times1 = [0,12];  
rule1.hour = times1; rule1.minute = 0; 
schedule.scheduleJob(rule1, function(){  
  getBingPic();  
});
function getBingPic(){
	request.get('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=-1&n=1&mkt=zh-CN', (error, response, body) => {   
    const img = JSON.parse(body).images[0];
    request('https://cn.bing.com'+img.url).pipe(fs.createWriteStream(path.join('../dist/static/img', "bingPic.39e6d6a.jpg")));
    console.log(`ok!`);
});
}

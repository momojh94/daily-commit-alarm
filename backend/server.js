const express = require('express');
const app = express();
//const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3002;
const route = require('./routes/index');
const db_config = require(__dirname + '/database.js');
const connection = db_config.init();
db_config.connect(connection);
app.use(bodyParser.json());
app.use('/api', route);
//var schedule = require('node-schedule');

/*
var scheduler = schedule.scheduleJob("5,10,15,20,25,30 * * * * *", function() {
    console.log('schedule test1');
});
var scheduler2 = schedule.scheduleJob("5,10,15,20,25,30 * * * * *", function() {
    console.log('schedule test2');
});
var scheduler3 = schedule.scheduleJob("5,10,15,20,25,30 * * * * *", function() {
    console.log('schedule test3');
});
*/

//app.use(cors());

app.get('/db-test', function(req, res) {
    var sql = 'SELECT * FROM test_table';
    connection.query(sql, function(err, rows){
        console.log(rows);
        res.json(rows);
    })
    console.log(sql);
})

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
});
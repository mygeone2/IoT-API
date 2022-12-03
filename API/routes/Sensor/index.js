const { json } = require('express');
var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('/home/mygeo/app/db_iot');

var verifyToken = function(req, res, next) {
    const sensor_api_key = req.body.api_key

    
    db.get('select * from Sensor where sensor_api_key  = ?',
        [sensor_api_key],
        (err, row) => {
            if(row == undefined){
                res.sendStatus(400)
            }else{
                console.log('authorized');
               next()
            }
        }
    )
};

router.post('/', verifyToken, function(req,res,next){

    const sensor_data = req.body.json_data
    const api_key = req.body.api_key

    sensor_data.forEach(data => {
        db.run(`insert into Sensor_data values (?,?,?,?, strftime('%s', 'now'),(select sensor_id from Sensor where sensor_api_key = ? ) )`,
        
        [data.value1,data.value2,data.value3,api_key,api_key],
        
        (err) => {
            if (err != null){
                res.sendStatus(400)
            }
        }
        )
    });
    res.sendStatus(201)

})

router.get('/:company_api_key/:from/:to/:array_sensors', function(req,res,next){


    const company_api_key = req.params.company_api_key
    const from = parseInt(req.params.from)
    const to = parseInt(req.params.to)
    const array_sensors_raw = JSON.parse(req.params.array_sensors)

    const placeholders = array_sensors_raw.map((item) => item).join(",");

    let query = ` select sd.value1,sd.value2,sd.value3,sd.time_epoch,sd.sensor_id from Sensor_data as sd inner join Sensor as s  on s.sensor_id  = sd.sensor_id  inner join Location as l on s.location_id = l.id  inner join Company as c on c.id = l.company_id  where c.company_api_key = '${company_api_key}' and s.sensor_id in (${placeholders})  and time_epoch >= ${from} and time_epoch <= ${to}`

    console.log(query);
    
    db.all(query,
    
        (err,rows) => { 
            res.send(rows);
        }
    )

});

    
    

module.exports = router;

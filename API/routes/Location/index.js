const { json } = require('express');
var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('/home/mygeo/app/db_iot');


function generate_key(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

var verifyToken = function(req, res, next) {
    console.log(req.params)
    const company_api_key = req.params.company_api_key
    const company_id = parseInt(req.params.company_id)
    
    db.get('select company_api_key from Company where id = ?',
        [company_id],
        (err, row) => {
            if(row == undefined){
                res.sendStatus(400)
            }else{
                if(row.company_api_key == company_api_key){
                    next()
                }else{
                    res.status(400)
                    res.json('wrong api key')
                }
            }
        }
    )
};

router.get('/:company_api_key/getAll/:company_id',verifyToken, function(req, res, next) {

    const company_id = req.params.company_id
  
    db.all("select * from Location where company_id = ?",
        [company_id],

        (err, rows ) => {  

           
            res.status(200)
            res.json(rows)
        
        }
    );
                
});

router.get('/:company_api_key/get/:company_id',verifyToken, function(req, res, next) {
    const company_id = parseInt(req.params.company_id)
    const company_api_key = req.params.company_api_key

    db.get("select * from Location where company_id  = $1",
        {
            $1: company_id
        },

        (err, row) => {
            if (row != undefined){
                res.status(200)
                res.json(row)
            }else{
                res.sendStatus(404)
            }
        }
    );
               
});
  
router.put('/:company_api_key/modify/:company_id',verifyToken, function(req, res, next) {
    const company_id = parseInt(req.params.company_id)
    const name = req.body.location_name
    const country = req.body.location_country
    const city = req.body.location_city
    const meta = req.body.location_meta

    const result = db.run("UPDATE Location set location_name = ?, location_country = ?, location_city = ?, location_meta = ? where company_id = ?",
        [name,country,city,meta,company_id],

        (err, result) => {
            console.log(result)
            if(err == null){
                res.status(200)
                res.json('modified')
            }else{
                res.status(404)
                res.send(err)
            }
        }
    );
  
});

router.delete('/:company_api_key/delete/:company_id',verifyToken,function(req, res, next) {
    
    const company_id = parseInt(req.params.company_id)

    db.run("DELETE from Location where company_id = ? ",
        [company_id],

        (err, row) => {
            res.sendStatus(200)
        }
    );

  
});


module.exports = router;

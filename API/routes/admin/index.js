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


/* GET home page. */
router.post('/admin/createCompany', function(req, res, next) {

    console.log(req.body.company_name)

    const company_name = req.body.company_name
    const token = generate_key(10)

  
    db.run("INSERT into Company (company_name,company_api_key) VALUES ($1,$2)",
        {
            $1: company_name,
            $2: token
        },
        (param) => {console.log(param)})

    

  res.status(201)
  res.send()
  
});

module.exports = router;

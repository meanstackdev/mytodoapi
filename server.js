/**
 * Created by Office on 10/15/2016.
 */

var express = require('express');
var bodyparser =  require('body-parser');
var PORT = process.env.PORT || 3000;
var app = express();
app.use(bodyparser.json());
// Create Employee Data
var employee=[];
var empid=1;
// Create Sever frist request

app.use(express.static(__dirname +'/public'));

// GET Employee Data 

app.get('/Empdata',function (req,res) {
    res.json(employee);
});

// GET data from id
app.get('/empdata/:id',function (req,res) {

    var empid = parseInt(req.params.id);
    var matchid;
    employee.forEach(function (emp_id) {
        if(empid === emp_id.id)
        {
            matchid = emp_id;
        }
    });
    if(matchid)
    {
        res.json(matchid);
    }else
    {
        res.status(404).send('No data found this id : '+ empid);
    }
});
//POST Request
 app.post('/empdata',function (req,res) {

     var body = req.body;
     body.id = empid ++ ;
     // Push data into  employee array
     employee.push(body);
     res.json(employee);
     
 });

// app listen local port 
app.listen(PORT,function () {
    console.log('Server Running at local port :' + PORT);
});

/**
 * Created by Office on 10/15/2016.
 */

var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
// Create Employee Data
var employee = [

    {
        id :1,
        name : 'Vijay Kumar Reddy',
        jobroll: ' Node Js Developer',
        salary:25000

    },
    {
        id :2,
        name : 'Rahul Guptha',
        jobroll: ' Webdeveloper',
        salary:2000

    },
    {
        id :3,
        name : 'MadhuSudhan',
        jobroll: ' Hr Manager',
        salary:15000

    }
];

// Create Sever frist request

app.get('/',function (req,res) {
    res.send('Welcome to node and express js website');
});

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

// app listen local port 
app.listen(PORT,function () {
    console.log('Server Running at local port :' + PORT);
});

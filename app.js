const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
// app.use(express.static(__dirname)); // take files out of "public" folder or add "public/" where css and images paths are assigned in html file

app.get("/", function(req, res){
    res.sendFile(__dirname+"/public/frontend/signup.html");
});

app.post("/", function(req, res){
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    
    const data = {
        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fname,
                    LNAME: lname
                }
            }
        ]
    };

    const url = "https://us8.api.mailchimp.com/3.0/lists/"+process.env.ID;
    const options = {
        method: "POST",
        auth: "pratham52:"+process.env.API_KEY
    }
    
    const jsonData = JSON.stringify(data);
    const request = https.request(url, options, function(response){
        
        response.on("data", function(data){
            jdata = JSON.parse(data);
            if (response.statusCode === 200){
                if(jdata.error_count === 0){
                    res.sendFile(__dirname+"/public/frontend/success.html");
                }
                else if (jdata.error_count > 0 && jdata.errors[0].error_code === 'ERROR_CONTACT_EXISTS'){
                    res.sendFile(__dirname+"/public/frontend/alreadyExists.html");
                }
                else{
                    res.sendFile(__dirname+"/public/frontend/failure.html");
                }
            }
            else{
                res.sendFile(__dirname+"/public/frontend/failure.html");
            }
            console.log(jdata);
        });
    });

    request.write(jsonData);
    request.end();

});


app.use((req, res, next) => {
    res.status(404).sendFile(__dirname+"/public/frontend/404.html");
});

app.post("/failure", function(req, res){
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Sever started on port 3000");
});
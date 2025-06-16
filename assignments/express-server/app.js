const express = require('express')
const app = express()
const port = 3000

let name = "hrutvik";
let password = 1234;

app.get('/', (req, res) => res.send('This is the log in page'))

app.use(logInMiddleware)

app.get('/profilePage', (req,res)=>{
    res.send("Profile page")
})

app.get('/feedbackPage', (req,res)=>{
    res.send("Feedback page")
})


function logInMiddleware(req,res, next){
    // console.log("Log in middleware");
    if(name == 'hrutvik' && password == 1234){
        next();
    }
    else{
        res.send("Can't authenticate user")
    }
}

app.listen(port, () => console.log(`App listening on port ${port}!`))
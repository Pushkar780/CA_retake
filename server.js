const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); 

let users = [
    { email: "dummy@gmail.com", password: "dummy123",username:"Bob",Dob:20012006

     },
    { email: "dummy1@gmail.com", password: "dummy1234" ,username:"Bob", Dob:20012006
    },
   
    { email: "dummy5@gmail.com", password: "dummy1238",username:"Bob",Dob:20012006
     }
];


app.get("/", (req,res)=>{
    res.send("backendca2");
})

app.post('/signup' , (req, res) => {
        const {email,password,username,Dob} = req.body;
        if (!email) {
            return res.status(400).json({message : "email cannot be empty"});
        }
        else if(!username){
            return res.status(400).json({message : "username cannot be empty"});
        }
        else if (!password) {
            return res.status(400).json({message : "password cannot be empty & password length should be greater than 8 and less than 16"});
        }
        else if(!Dob){
            return res.status(400).json({message : "Dob cannot be empty"});
        }
        else {
            return res.status(200).json({message : "successful"})
        }
    })




app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
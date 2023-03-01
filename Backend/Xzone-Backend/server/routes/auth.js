const nodemailer = (require('../config/nodemailer.config.js'));
const router = require("express").Router();
const jwt = require('jsonwebtoken');
const MYSQL_CONNECTOR = (require('../db/connectDB.js'));
const bcrypt = require("bcrypt");
const verify= (require('../services/auth.js'));

//REGISTER FOR ADMIN
router.post("/register/admin",async (req,res)=>{
    console.log(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashedpass  = await bcrypt.hash(req.body.password,salt);
    const hashhandle = await bcrypt.hash(req.body.email,salt);
   
    try{
        //checking if email already exists
            let __query = `SELECT Password FROM xzone.Users WHERE Email='${req.body.email}'`;
            let result;
            try {
                [result] = await MYSQL_CONNECTOR.connection.query(__query);
                 
                // If  email exsist, throw an error
                if ([result[0]][0] !== undefined){ 
                  console.log("already exists");
                  throw new Error(' email already exists.');}
                  else{ //else register

                    try {
                      req.body.handle=hashhandle;
                      const JWT_SECRET="MY_JWT_KEY";
                      const token = jwt.sign({ hashhandle }, `${JWT_SECRET}`, { expiresIn: '3d' });
                      console.log(token);
                      let sql = `INSERT INTO Users(Handle,Name,Email, Password,JWT,isAdmin) VALUES ('${hashhandle}','${req.body.Name}','${req.body.email}','${hashedpass}','${token}',true)`;
                      let  [result] = await MYSQL_CONNECTOR.connection.query(sql);
                      let sql2 = `Select * from Users where Email='${req.body.email}'`;
                      let  [result2] = await MYSQL_CONNECTOR.connection.query(sql2);
                      let sql3 = `INSERT INTO shoppingmall(Name,Email,Owner) VALUES ('${req.body.mallname}','${req.body.email}',${result2[0].id})`;
                      let  [result3] = await MYSQL_CONNECTOR.connection.query(sql3);
                      console.log('Registered Successfully Please Check Your Email');
          
          
                      let __query2 = `SELECT * FROM xzone.Users WHERE Email='${req.body.email}'`;
                      
                      let [user]= await MYSQL_CONNECTOR.connection.query(__query2);
                      
                     
                      res.status(200).json(user);
                    } catch (error) {
                      console.log(`Error occured --> ${error.message}`);

                    }
                  }
            } catch (error) {
                console.log(`Error occured --> ${error.message}`);
                res.status(500).json({err:error.message});
            }
        
        
        

    }catch(err){
        res.status(500).json(err);
    }
});



//REGISTER FOR MOBILE USER
router.post("/register/user",async (req,res)=>{
    console.log(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashedpass  = await bcrypt.hash(req.body.password,salt);
    const hashhandle = await bcrypt.hash(req.body.email,salt);
   
    try{
        //checking if email already exists
            let __query = `SELECT Password FROM xzone.Users WHERE Email='${req.body.email}'`;
            let result;
            try {
                [result] = await MYSQL_CONNECTOR.connection.query(__query);
                 
                // If  email exsist, throw an error
                if ([result[0]][0] !== undefined){ 
                  console.log("already exists");

                  throw new Error(' email already exists.');}
                  else{ //else register

                    try {
                      req.body.handle=hashhandle;
                      const JWT_SECRET="MY_JWT_KEY";
                      const token = jwt.sign({ hashhandle }, `${JWT_SECRET}`, { expiresIn: '3d' });
                      console.log(token);
                      let sql = `INSERT INTO Users(Handle,Name,Email, Password,JWT) VALUES ('${hashhandle}','${req.body.username}','${req.body.email}','${hashedpass}','${token}')`;
                      let  [result] = await MYSQL_CONNECTOR.connection.query(sql);
                      console.log('Registered Successfully Please Check Your Email');
          
          
                      let __query2 = `SELECT * FROM xzone.Users WHERE Email='${req.body.email}'`;
                      
                      let [user]= await MYSQL_CONNECTOR.connection.query(__query2);
                      
                     
                      res.status(200).json(user);
                    } catch (error) {
                      console.log(`Error occured --> ${error.message}`);
                      res.error(error.message);
                    }
                  }
            } catch (error) {
                console.log(`Error occured --> ${error.message}`);
                res.error(error.message);
            }
        
        
        

    }catch(err){
        res.status(500).json(err);
    }
});

//LOGIN AS ADMIN
router.post("/login/admin", async (req, res) => {
 
    try {
        const { token, handle } = await verify.generateAccessToken(req.body);
        if (token) {
          
          }else{
          res.status(500).error("Wrong Credentials");
          }
      // response ma sara data jaiga
      let __query2 = `SELECT * FROM xzone.Users WHERE Email='${req.body.email}'`;          
      let [user]= await MYSQL_CONNECTOR.connection.query(__query2);
      
      
        res.status(200).json({...user,...{token:token}});
      
         
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  //UPDATING JWT
  router.get("/confirm/:confirmationCode", async (req,res) => {

    const confirmationcode = req.params.confirmationCode;
    console.log(confirmationcode);
     verify.Updatestatus(confirmationcode);
     res.status(200).send({message:"Now u can login!"});
    
  })
module.exports=router;


//LOGIN AS USER
router.post("/login/user", async (req, res) => {
 
    try {
        
        const { status, handle } = await verify.verifyUserCredentials(req.body);
        if (status) {
          
          }else{
          res.status(500).error("Wrong Credentials");
          }
      // response ma sara data jaiga
      let __query2 = `SELECT * FROM xzone.Users WHERE Email='${req.body.email}'`;          
      let [user]= await MYSQL_CONNECTOR.connection.query(__query2);
      console.log(user[0].Status);
      res.status(200).json(user);
         
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  //UPDATING JWT
  router.get("/confirm/:confirmationCode", async (req,res) => {

    const confirmationcode = req.params.confirmationCode;
    console.log(confirmationcode);
     verify.Updatestatus(confirmationcode);
     res.status(200).send({message:"Now u can login!"});
    
  })
module.exports=router;

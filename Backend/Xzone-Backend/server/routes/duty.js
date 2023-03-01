const MYSQL_CONNECTOR = (require('../db/connectDB.js'));
const router = require("express").Router();


//Add Shop
router.post("/", async (req, res) => {
 
  
    let sql = `INSERT INTO duty(mall_id,startTime,EndTime,instructions,location) Values (${req.body.mall_id},'${req.body.startTime}','${req.body.EndTime}',${req.body.instructions},'${req.body.location}'`;              
    try {
      const result = await MYSQL_CONNECTOR.connection.query(sql);   
      res.status(200).json({message:"duty Added Sucessfully"});
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //get by id
  
router.get("/:id", async (req, res) => {
    try {
      let query=`Select * from xzone.duty Where id=${req.params.id}`;
      let [result]=await MYSQL_CONNECTOR.connection.query(query);
      
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //GET all
  router.get("/", async (req, res) => {
    try {
      console.log(req.headers['token'])
      let {handle}=verifyAccessToken(req.headers['token']);
      console.log(handle)
      let query=`Select * from xzone.duty `;
      let [result]=await MYSQL_CONNECTOR.connection.query(query);
      
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });




module.exports = router;

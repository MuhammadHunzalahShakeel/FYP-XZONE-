const MYSQL_CONNECTOR = (require('../db/connectDB.js'));
const router = require("express").Router();
const { verifyAccessToken } = require('../services/auth.js');


//Add Shop
router.post("/", async (req, res) => {
 
  try {
      console.log(req.headers['token'])
      let {handle}=verifyAccessToken(req.headers['token']);
      console.log(handle)
      let sql = `INSERT INTO parking(mall_id,carNumber,fees,status) Values ((select id from xzone.shoppingmall where owner=${handle}),'${req.body.carNumber}','${req.body.fees}','${req.body.status}')`;              
      const result = await MYSQL_CONNECTOR.connection.query(sql);   
      res.status(200).json({message:"parking Added Sucessfully"});
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //get by id
  
router.get("/:id", async (req, res) => {
    try {
      let query=`Select * from xzone.parking Where id=${req.params.id}`;
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
      let query=`Select * from xzone.parking where mall_id=(select id from xzone.shoppingmall where owner=${handle})`;
      let [result]=await MYSQL_CONNECTOR.connection.query(query);
      
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });



//delete row from parking admin
router.post("/delete", async (req, res) => {
  try {
    console.log(req.headers['token'])
    let {handle}=verifyAccessToken(req.headers['token']);
    console.log(handle)
    let query=`delete from xzone.parking where id = ${req.body.id}`;
    let [result]=await MYSQL_CONNECTOR.connection.query(query);
    
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }});

//edit row from Parking admin
router.post("/edit", async (req, res) => {
  try {
    console.log(req.headers['token'])
    let {handle}=verifyAccessToken(req.headers['token']);
    console.log(handle)
    let query=`update xzone.parking SET carNumber= ' ${req.body.carNumber}',fees= ' ${req.body.fees}',status= ' ${req.body.status}' where id = ${req.body.id}`;
    let [result]=await MYSQL_CONNECTOR.connection.query(query);
    
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }});

module.exports = router;

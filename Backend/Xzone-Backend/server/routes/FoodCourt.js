const MYSQL_CONNECTOR = (require('../db/connectDB.js'));
const router = require("express").Router();
const { verifyAccessToken } = require('../services/auth.js');


//Add Shop
router.post("/", async (req, res) => {
 
  try {
      console.log(req.headers['token'])
      let {handle}=verifyAccessToken(req.headers['token']);
      console.log(handle)
      let sql = `INSERT INTO FoodCourt(mall_id,Name,Email,Category,Description,Website) Values ((select id from xzone.shoppingmall where owner=${handle}),'${req.body.Name}','${req.body.Email}','${req.body.Category}','${req.body.Description}','${req.body.Website}')`;              
      const result = await MYSQL_CONNECTOR.connection.query(sql);   
      res.status(200).json({message:"FoodCourt Added Sucessfully"});
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //get by id
  
router.get("/:id", async (req, res) => {
    try {
      let query=`Select * from xzone.FoodCourt Where id=${req.params.id}`;
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
      let query=`Select * from xzone.FoodCourt where mall_id=(select id from xzone.shoppingmall where owner=${handle})`;
      let [result]=await MYSQL_CONNECTOR.connection.query(query);
      
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET all
  router.get("/owner/mobile", async (req, res) => {
    try {
      console.log(req.headers['token'])
      let {handle}=verifyAccessToken(req.headers['token']);
      console.log(handle)
      let query=`Select * from xzone.FoodCourt where mall_id=1`;
      let [result]=await MYSQL_CONNECTOR.connection.query(query);
      
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//delete row from foodcourt admin
router.post("/delete", async (req, res) => {
  try {
    console.log(req.headers['token'])
    let {handle}=verifyAccessToken(req.headers['token']);
    console.log(handle)
    let query=`delete from xzone.FoodCourt where id = ${req.body.id}`;
    let [result]=await MYSQL_CONNECTOR.connection.query(query);
    
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }});

//edit row from FoodCourt admin
router.post("/edit", async (req, res) => {
  try {
    console.log(req.headers['token'])
    let {handle}=verifyAccessToken(req.headers['token']);
    console.log(handle)
    let query=`update xzone.FoodCourt SET Name= ' ${req.body.Name}',Email= ' ${req.body.Email}',Category= ' ${req.body.Category}',Description= '${req.body.Description}',Website= '${req.body.Website}' where id = ${req.body.id}`;
    let [result]=await MYSQL_CONNECTOR.connection.query(query);
    
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }});

module.exports = router;

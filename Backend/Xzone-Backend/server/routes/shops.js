const MYSQL_CONNECTOR = (require('../db/connectDB.js'));
const router = require("express").Router();
const { verifyAccessToken } = require('../services/auth.js');

//Add Shop
router.post("/", async (req, res) => {
 
    console.log(req.headers['token'])
    let {handle}=verifyAccessToken(req.headers['token']);
    console.log(handle)
    let sql = `INSERT INTO shops(mall_id,shopName,owner,purpose,demand,floor,Area,status) Values ((select id from xzone.shoppingmall where owner=${handle}),'${req.body.shopName}','${req.body.owner}','${req.body.purpose}',${req.body.demand},'${req.body.floor}','${req.body.Area}','${req.body.status}')`;              
    try {
      const result = await MYSQL_CONNECTOR.connection.query(sql);   
      res.status(200).json({message:"Shops Added Sucessfully"});
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //get by id
  
router.get("/:id", async (req, res) => {
    try {
      let query=`Select * from xzone.shops Where id=${req.params.id}`;
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
      let query=`Select * from xzone.shops where mall_id=(select id from xzone.shoppingmall where owner=${handle}) `;
      let [result]=await MYSQL_CONNECTOR.connection.query(query);
      
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//delete row from shops admin
router.post("/delete", async (req, res) => {
  try {
    console.log(req.headers['token'])
    let {handle}=verifyAccessToken(req.headers['token']);
    console.log(handle)
    let query=`delete from xzone.shops where id = ${req.body.id}`;
    let [result]=await MYSQL_CONNECTOR.connection.query(query);
    
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }});

//edit row from shop admin
router.post("/edit", async (req, res) => {
  try {
    console.log(req.headers['token'])
    let {handle}=verifyAccessToken(req.headers['token']);
    console.log(handle)
    let query=`update xzone.shops SET shopName= ' ${req.body.shopName}',owner= ' ${req.body.owner}',purpose= '${req.body. purpose}',demand= '${req.body.demand}',floor= '${req.body.floor}',Area= '${req.body.Area}',status= '${req.body.status}' where id = ${req.body.id}`;
    let [result]=await MYSQL_CONNECTOR.connection.query(query);
    
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }});


module.exports = router;

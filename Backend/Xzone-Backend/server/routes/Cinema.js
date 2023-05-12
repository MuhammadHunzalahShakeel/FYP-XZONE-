const MYSQL_CONNECTOR = (require('../db/connectDB.js'));
const router = require("express").Router();
const { verifyAccessToken } = require('../services/auth.js');


//Add Shop
router.post("/", async (req, res) => {
 
  try {
      console.log(req.headers['token'])
      let {handle}=verifyAccessToken(req.headers['token']);
      console.log(handle)
      let sql = `INSERT INTO Cinema(mall_id,Name,Email,Description,Website) Values ((select id from xzone.shoppingmall where owner=${handle}),'${req.body.Name}','${req.body.Email}','${req.body.Description}','${req.body.Website}')`;              
      const result = await MYSQL_CONNECTOR.connection.query(sql);   
      res.status(200).json({message:"Cinema Added Sucessfully"});
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //get by id
  
router.get("/:id", async (req, res) => {
    try {
      let query=`Select * from xzone.Cinema Where id=${req.params.id}`;
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
      let query=`Select * from xzone.Cinema where mall_id=(select id from xzone.shoppingmall where owner=${handle}) `;
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
      let query=`Select * from xzone.Cinema where mall_id=1`;
      let [result]=await MYSQL_CONNECTOR.connection.query(query);
      
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//delete row from cinema admin
router.post("/delete", async (req, res) => {
    try {
      console.log(req.headers['token'])
      let {handle}=verifyAccessToken(req.headers['token']);
      console.log(handle)
      let query=`delete from xzone.cinema where id = ${req.body.id}`;
      let [result]=await MYSQL_CONNECTOR.connection.query(query);
      
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }});

//edit row from Cinema admin
router.post("/edit", async (req, res) => {
  try {
    console.log(req.headers['token'])
    let {handle}=verifyAccessToken(req.headers['token']);
    console.log(handle)
    let query=`update xzone.cinema SET Name= ' ${req.body.Name}',Email= ' ${req.body.Email}',Description= '${req.body.Description}',Website= '${req.body.Website}' where id = ${req.body.id}`;
    let [result]=await MYSQL_CONNECTOR.connection.query(query);
    
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }});


module.exports = router;

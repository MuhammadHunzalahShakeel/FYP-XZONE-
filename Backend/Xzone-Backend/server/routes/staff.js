const MYSQL_CONNECTOR = (require('../db/connectDB.js'));
const router = require("express").Router();
const { verifyAccessToken } = require('../services/auth.js');


//Add Shop
router.post("/", async (req, res) => {
 
  try {
      console.log(req.headers['token'])
      let {handle}=verifyAccessToken(req.headers['token']);
      console.log(handle)
      let sql = `INSERT INTO staff(mall_id,fullName,Email,gender,age,salary,designation) Values ((select id from xzone.shoppingmall where owner=${handle}),'${req.body.fullName}','${req.body.Email}','${req.body.gender}',${req.body.age},'${req.body.salary}','${req.body.designation}')`;              
      const result = await MYSQL_CONNECTOR.connection.query(sql);   
      res.status(200).json({message:"staff Added Sucessfully"});
    } catch (err) {
      res.status(500).json(err.message);
    }
  });

  //get by id
  
router.get("/:id", async (req, res) => {
    try {
      let query=`Select * from xzone.staff Where id=${req.params.id}`;
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
      let query=`Select * from xzone.staff where mall_id=(select id from xzone.shoppingmall where owner=${handle})`;
      let [result]=await MYSQL_CONNECTOR.connection.query(query);
      
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//delete row from staff admin
router.post("/delete", async (req, res) => {
  try {
    console.log(req.headers['token'])
    let {handle}=verifyAccessToken(req.headers['token']);
    console.log(handle)
    let query=`delete from xzone.staff where id = ${req.body.id} `;
    let [result]=await MYSQL_CONNECTOR.connection.query(query);
    
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }});

//edit row from Staff admin
router.post("/edit", async (req, res) => {
  try {
    console.log(req.headers['token'])
    let {handle}=verifyAccessToken(req.headers['token']);
    console.log(handle)
    let query=`update xzone.staff SET fullName= ' ${req.body.fullName}',Email= ' ${req.body.Email}',gender= ' ${req.body.gender}',age= '${req.body.age}',salary= '${req.body.salary}',designation= '${req.body.designation}' where id = ${req.body.id}`;
    let [result]=await MYSQL_CONNECTOR.connection.query(query);
    
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }});

module.exports = router;

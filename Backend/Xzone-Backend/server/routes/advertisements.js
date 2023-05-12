const { verifyAccessToken } = require('../services/auth.js');

const MYSQL_CONNECTOR = (require('../db/connectDB.js'));
const router = require("express").Router();


//Add Shop for application
router.post("/app", async (req, res) => {
  
    let sql = `INSERT INTO advertisements(mall_id,advertisedBy,cattegory,instructions,link) Values ((select id from xzone.shoppingmall where owner=${req.body.advertisedBy}),${req.body.advertisedBy},'${req.body.cattegory}','${req.body.instructions}','${req.body.link}')`;              
    try {
      const result = await MYSQL_CONNECTOR.connection.query(sql);   
      res.status(200).json({message:"advertisements Added Sucessfully"});
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Add Shop for admin
router.post("/admin", async (req, res) => {
 
  try {
    console.log(req.headers['token'])
    let {handle}=verifyAccessToken(req.headers['token']);
    console.log(handle)
    let sql = `INSERT INTO advertisements(mall_id,advertisedBy,category,instructions,link) Values ((select id from xzone.shoppingmall where owner=${handle}),(select id from xzone.shops where shopName='${req.body.shopname}'),'${req.body.cattegory}','${req.body.instructions}','${req.body.link}')`;              
    const result = await MYSQL_CONNECTOR.connection.query(sql);   
    res.status(200).json({message:"advertisements Added Sucessfully"});
  } catch (err) {
    res.status(500).json(err.message);
  }
});


  //get by id
  
router.get("/byid/:id", async (req, res) => {
    try {
      let query=`Select * from xzone.advertisements Where id=${req.params.id}`;
      let [result]=await MYSQL_CONNECTOR.connection.query(query);
      
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET all admin
  router.get("/admin", async (req, res) => {
    try {
      console.log(req.headers['token'])
      let {handle}=verifyAccessToken(req.headers['token']);
      console.log(handle)
      let query=`Select ad.id as id , sh.shopName as advertisedBy , ad.category as cattegory, ad.instructions as instructions , ad.link as link from xzone.advertisements as ad , xzone.shops as sh , xzone.shoppingmall as sp where ad.advertisedBy = sh.id and sp.owner = ${handle} and sh.mall_id = sp.id`;
      let [result]=await MYSQL_CONNECTOR.connection.query(query);
      
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });

    //GET all shop owner
    router.get("/owner", async (req, res) => {
      try {
        console.log(req.headers['token'])
        let {handle}=verifyAccessToken(req.headers['token']);
        console.log(handle)
        let query=`Select ad.id as id , sh.shopName as advertisedBy , ad.category as cattegory, ad.instructions as instructions , ad.link as link from xzone.advertisements as ad , xzone.shops as sh where ad.advertisedBy = sh.id and sh.owner = ${handle}`;
        let [result]=await MYSQL_CONNECTOR.connection.query(query);
        
        res.status(200).json(result);
      } catch (err) {
        res.status(500).json(err);
      }
    });

    //delete row from advertsiment admin
    router.post("/delete", async (req, res) => {
      try {
        console.log(req.headers['token'])
        let {handle}=verifyAccessToken(req.headers['token']);
        console.log(handle)
        let query=`delete from xzone.advertisements where id = ${req.body.id}`;
        let [result]=await MYSQL_CONNECTOR.connection.query(query);
        
        res.status(200).json(result);
      } catch (err) {
        res.status(500).json(err);
      }});

    //edit row from advertsiment admin
    router.post("/edit", async (req, res) => {
      try {
        console.log(req.headers['token'])
        let {handle}=verifyAccessToken(req.headers['token']);
        console.log(handle)
        let query=`update xzone.advertisements SET advertisedBy= (select id from xzone.shops where shopName='${req.body.advertisedBy}'),category= ' ${req.body.cattegory}',instructions= '${req.body. instructions}',link= '${req.body.link}' where id = ${req.body.id}`;
        let [result]=await MYSQL_CONNECTOR.connection.query(query);
        
        res.status(200).json(result);
      } catch (err) {
        res.status(500).json(err);
      }});
  




module.exports = router;

const { verifyAccessToken } = require('../services/auth.js');

const MYSQL_CONNECTOR = (require('../db/connectDB.js'));
const router = require("express").Router();


 //GET admin profile
 router.get("/", async (req, res) => {
    try {
      console.log(req.headers['token'])
      let {handle}=verifyAccessToken(req.headers['token']);
      console.log(handle)
      let query=`Select * from xzone.users where id=${handle})`;
      let [result]=await MYSQL_CONNECTOR.connection.query(query);
      
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//edit row from Profile admin
router.post("/edit", async (req, res) => {
  try {
    console.log(req.headers['token'])
    let {handle}=verifyAccessToken(req.headers['token']);
    console.log(handle)
    let query=`update xzone.user SET Name= ' ${req.body.Name}',Email= ' ${req.body.Email}',Password= ' ${req.body.Password}' where id = ${req.body.id}`;
    let [result]=await MYSQL_CONNECTOR.connection.query(query);
    
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }});

module.exports = router;

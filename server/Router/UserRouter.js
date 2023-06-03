const express = require("express");
const router = express.Router();
const UserBl = require("../Bl/UserBl")
const jwt = require("jsonwebtoken");

const accessTokenSecret = "somerandomaccesstoken";

const authenticateJWT = (req, res, next) => {
  const autoHeaders = req.headers.authorization;
  if (autoHeaders) {
    const token = autoHeaders.split(' ')[1];
    jwt.verify(autoHeaders, accessTokenSecret, (err, users) => {
      if (err) {
        consol.log(err)
        return res.sendStstus(403)
      }
      req.user = user;
      next();
    })
  }
  else {
    res.sendStatus(401)
  }
}

router.route('/')
  .get(function (req, res) {
    UserBl.getAllUsers().then(data => { return res.json(data) })
  })

router.route('/:id')
  .get(function (req, res) {
    let id = req.params.id;
    console.log("step 1 -router")
    return UserBl.getUserByID(id).then(data => { return res.json(data) })
  })

router.route('/')
  .post(function (req, resp) {
    let obj = req.body;
    UserBl.createUser(obj).then(data => { return resp.json(data) }).catch(err => resp.status(400).send())
  });

router.route('/updateUser/:userId')
  .put(function (req, res) {
    let id = req.params.userId;
    let obj = req.body;
    UserBl.updateUser(id, obj).then(data => { return res.json(data) })
  })

router.route('/:id')
  .delete(function (req, res) {
    let id = req.params.id;
    UserBl.deleteUser(id).then(data => { return res.json(data) })
  })

router.route('/getUserByEmailAndPassword')
  .post(function (req, res) {
    let { email, password } = req.body;
    UserBl.getUserByEmailAndPassword(email, password)
      .then(data => {
        return res.json(data);
      })
  })


router.route("/login")
  .post(async function (req, resp) {
    const { email, password } = req.body;
    UserBl.login(email, password).then(data => { return resp.json(data) }).catch(err => resp.status(404))
  });
module.exports = router
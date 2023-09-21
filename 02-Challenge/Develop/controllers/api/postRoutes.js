const router = require('express').Router();
const { Post } = require('../../models');

router.post('/post', async (req, res) => {
  try {
    

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(UserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
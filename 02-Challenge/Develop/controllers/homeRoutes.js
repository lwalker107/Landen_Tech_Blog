const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });
    console.log(userData);

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      // users,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
  
});

router.get('/login', (req, res) => {
  console.log(req.session);
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get('/dashboard', withAuth, (req, res) => {
  try {

    res.render('dashboard', {
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;

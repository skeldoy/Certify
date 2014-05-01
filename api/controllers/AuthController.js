var passport = require("passport");
module.exports = {

  login: function(req,res){
    res.view(); 
  },

  process: function(req,res){
    console.log("Processing authentication:");
    console.log(req.session);
    passport.authenticate('local', function(err, user, info){
      if ((err) || (!user)) {
        res.redirect('/auth/login');
        return;
      }
      req.logIn(user, function(err){
        if (err) res.redirect('/auth/login');
        return res.redirect('/');
      });
    })(req, res);
  },

  logout: function (req,res){
    req.logout();
    res.send('logout successful');
  },

  _config: {}
};

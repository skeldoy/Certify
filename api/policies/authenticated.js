module.exports = function(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }else{
    return res.redirect('/auth/login'); //res.send(403, { message: 'Not Authorized' });
  }
}


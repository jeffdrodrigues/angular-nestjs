app.use (express.static ('./ dist / angular-nestjs '));
app.get ('/ *', função (req, res) { 
  res.sendFile ('index.html', {root: 'dist / angular-nestjs /'} 
); 
});
app.listen ( processo .env.PORT || 8080);

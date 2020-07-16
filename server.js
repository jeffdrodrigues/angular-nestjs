app.use (express.static ('./ dist / <nome do pacote.json> '));
app.get ('/ *', função (req, res) { 
  res.sendFile ('index.html', {root: 'dist / <nome do pacote.json> /'} 
); 
});
app.listen ( processo .env.PORT || 8080);

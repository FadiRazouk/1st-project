const express = require('express')
const app = express()
const port = 3000

app.get('/',function(req, res){
  	
	res.render("FADI.html")

} );
 

 app.listen(8080);

const express=require('express');

const path=require('path');
let app=express();

app.use(express.static(__dirname+'/dist/shopping-cart'));

app.get('/*',(req,resp)=>{
  resp.sendFile(path.join+(__dirname+'/dist/shopping-cart/index.html'));
});

app.listen(process.env.PORT ||8080);

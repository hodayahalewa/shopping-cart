let express=require('express');

let app=express();

app.use(express.static(__dirname+'/dist/shopping-cart'));

app.get('*',(req,resp)=>{
  resp.sendFile(__dirname+'/dist/shopping-cart/index.html')
});

app.listen(process.env.PORT ||8080);

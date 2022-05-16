//express:bir kütüphanedir.node.jsi oluşturduğumuz web programları daha kolay oluşturmamızı sağlar 
//middleware:routing ile beraber expressin ana bileşenlerinden biridir.
//yaptığımız fonksiyon işlemleri genel olarak middleware olarak düşünülebilir
//middleware 3 parametre alır next eklenir
//html sayfasındaki çerezleri render edilmeden ulaşmak isteyebiliriz yadacss html sayfaları gibi dinamik sayfalara ulaşmak isteyebiliriz
//daha faazla link veya daha fazla sayfa açmak istediğimizde tekrara düşmemek için yani tekrar tekrar 
//tekrar tekrar kodu yazmak zorunda kalmamak için, template engine static html sayfalarında daja kolay dğeğişiklik yapmamızı sağlar
//npm de express-handlebar kullanırız
//template engine bizim html sayfalarımızı daha kolay bir sekilde olusturmamızı sağlamaktadır.





const path=require('path')
const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000
const hostname='127.0.0.1'
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");
const mongoose = require('mongoose');

app.use(express.static('public'))//static dosyalar public dosyasının içinde


app.get('/',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'site/index.html'))
})

app.get('/about',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'site/about.html'))
})

app.get('/blog',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'site/blog.html'))
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));


app.post('/posts/store', (req, res) => {
  console.log(req.body)
  res.redirect('/')
});

mongoose.connect('mongodb://localhost:27017/node-blog', { useNewUrlParser: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err))


app.listen(3000, () => {
  console.log(`server çalısıyor, http://${hostname}:${port}`)
})


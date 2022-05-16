//layouts:sayfalar arasında geçişler yaparken her sayfada olmazsa olmaz sablonumuz sabıt kalsın isteriz bunu da layouts ile yaparız
//sabitlediğimiz yerleri bir daha tekrar tekrar yazmamak için yaparız
//mesela bir web sayfasında içerik kısmı 
//Ana düzen, uygulamanın farklı görünümleri için yeniden kullanılabilen HTML sayfa sarmalayıcıdır.
// {{{body}}}ana içeriğin oluşturulacağı yer için bir yer tutucu olarak kullanılır.

const express=require("express")
const mongoose=require("mongoose")
const exhbs=require("espress-handlebars")
const res = require("express/lib/response")
const { use } = require("./routes/todo")
// const= require('./routes/todo')
// const =  todoRoutes

const app= express()
const PORT=3000
const hbs=exhbs.create({
    defaultlayout:"main",
    extname:"hbs"
})

app.engine("hbs",hbs.engine)
app.set("view engine","hbs")//("key", "value ") seklinde yazılmıstır parantez içi 
app.set("views","viewa")


app.use(express.urlencoded({extended:true}))//eger böyle yazmassak 
app.use(express.static('public'))
app.use(todoRoutes)

app.get("/",(req,res)=>{
    res.render()
})





const conn="mongodb+srv://mrvgkc4:mrvgkc44@cluster0.iprkq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

async function start() {//asenkron bir start metodu olusturduk
    try {
        await mongoose.connect(conn,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
    } catch (error) {
        console.log(error)
    }
    
}

app.listen(PORT,()=>console.log("server has been started"))  
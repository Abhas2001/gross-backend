
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Grocery = require('./models/Grocery');

app.use(express.json());  
app.use(cors());

mongoose.connect('mongodb+srv://abhassinha98:IglZuzywqxsN9jEl@grocerrydata.wucabo2.mongodb.net/grocerydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));



app.post('/save',async(req,res)=>{

    const{itemName,Quantity,ExpiryDate} = req.body;
    const grocerrydata = new Grocery(req.body);
    await grocerrydata.save()
   
     console.log(req.body); 
    res.send({
        message: `Item ${itemName} with quantity ${Quantity} and expiry date ${ExpiryDate} saved successfully!`
    });
})
app.get('/getdata',async(req,res)=>{
    const keyword = req.query.search || ''

    const items = await Grocery.find();
    console.log(keyword, "items");
    const arr = items.filter((x)=>x.itemName.includes(keyword))
 
    res.send(arr);
})

app.delete('/delete',async(req,res)=>{

    const id = req.query.id;
console.log("id",id);

    const deleteditem = await Grocery.findByIdAndDelete(id);

    res.send({id, message: "Item deleted successfully!"});
})

app.listen(5002, () => {
  console.log('Server is running on port 5002');
});
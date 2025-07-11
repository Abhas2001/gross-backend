
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


let arr =[]
app.post('/save',async(req,res)=>{

    const{itemName,Quantity,ExpiryDate} = req.body;
    const grocerrydata = new Grocery(req.body);
    await grocerrydata.save()
     arr.push(req.body);
     console.log(req.body); 
    res.send({
        message: `Item ${itemName} with quantity ${Quantity} and expiry date ${ExpiryDate} saved successfully!`
    });
})
app.get('/getdata',async(req,res)=>{

    const items = await Grocery.find();
    res.send(items);
})

app.listen(5002, () => {
  console.log('Server is running on port 5002');
});

const express = require('express');
const app = express();
const cors = require('cors');


app.get('/',(req,res)=>{
    res.send('Hello from the server');
})

app.listen(5002, () => {
  console.log('Server is running on port 5000');
});
/*const express = require("express");
const app = express();
const port = 3000;
const Razorpay = require('razorpay')
app.use(express.json())

app.get("/",(req,res) => {
    res.send("hello world");
})

app.post("/payment", async (req,res)=>{
let {amount} = req.body;

var instance = new Razorpay ({ 
    key_id: 'rzp_test_x46fVoqcDSz6if',
    key_secret: 'FxOAPKA1OeqxObQlS3RjvV3H'
 })

    instance.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt#1",
    })
    res.status(201).json({
        success:true,
        order,
        amount,
    });
});

app.listen(port, () => {
    console.log(`server is running on 3000 port ${port}`);
}); */
const express = require("express");
const app = express();
const port = 5000;
const Razorpay = require('razorpay');
const cors = require('cors');   

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello world");
});

app.post("/payment", async (req, res) => {
    let { amount } = req.body;

    var instance = new Razorpay({
        key_id: 'rzp_test_Oh2Ep6mslZ3Kdj', // Replace this with your actual test API key
        key_secret: 'MllXzhvlD6TtSX5HW445SmYQ' // Replace this with your actual test API secret
    });

    try {
        const options = {
            amount: amount * 100,
            currency: "INR",
            receipt: "receipt#1"
        };

        const order = await instance.orders.create(options);
        
        res.status(201).json({
            success: true,
            order,
            amount
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: "Payment creation failed"
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 
// rzp_test_Oh2Ep6mslZ3Kdj
// MllXzhvlD6TtSX5HW445SmYQ

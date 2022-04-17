const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
const stripe=require("stripe")('sk_test_51KpFnSSJovszuz4bbx2CZtW7wgurf7A05bGah0jDQSxEu1Lz4tGDHUKSJkj3vDHjUss5XcUYbSxFeMbBGbSTZo7b00pwJIlzh0');

// API
// - App config
const app = express();
     
//- Middlewares
app.use(cors({origin: true }));
app.use(express.json());
// - API routes
app.get('/', (req, res) => {
    res.status(201).send('hello world');
});
    
app.post('/payment/create', async (req, res) => {
    const total = req.query.total;
    const paymentIntent=await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    })
    res.status(201).send({
        clientSecret:paymentIntent.client_secret
    })
})
// - Listen command

exports.api=functions.https.onRequest(app);


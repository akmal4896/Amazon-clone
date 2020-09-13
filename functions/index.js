const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HQE0iCasN92C5qo6E4vwrneMvIw0nxyTeF4TwugBwcwBXvJ6oqcBzcqS9en4yFK2yD3c4f7fTBLQUT4ripbz3o800OxOe0De6')

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());


// - API routes
app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('payment Request Received skidadkakak!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: 'usd',
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoints
// http://localhost:5001/clone-6c27d/us-central1/api

















// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

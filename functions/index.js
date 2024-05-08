//This is our Backend (using Cloud FUnctions)
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

//secret key
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

//API

//- App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
    })

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });

});



// - Listen command
exports.api = functions.https.onRequest(app);


//run this command to get api endpoint >>
// firebase emulators:start


//Example Endpoint
// http://localhost:5001/clone-d092f/us-central1/api

//Deploy command cd functions
// firebase deploy --only functions
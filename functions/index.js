const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config()
const stripe = require("stripe")(process.env.SECRET_KEY)

// API

// - App config
const app = express()

// - middleware
app.use(cors({ origin: true }))
app.use(express.json())

// - API route
app.get("/", (req, res) => {
    res.status(200).send("Hello world")
})

app.get("/qazi", (req, res) => {
    res.status(200).send("WHATS UP QAZI!!")
})

app.post("/payments/create", async (req, res) => {
    const total = req.query.total

    console.log(`Payment Request recieved BOOM!!! for this amount ${total}`)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })

    // OK - Created
    res.status(200).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoints
// http://127.0.0.1:5001/clone-c6080/us-central1/api
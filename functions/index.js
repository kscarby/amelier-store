const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(cors({origin: true}));
app.use(express.json());

// GET /produtos
app.get("/produtos", async (req, res) => {
  const snapshot = await db.collection("produtos").get();
  const produtos = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
  res.status(200).json(produtos);
});

// POST /produtos
app.post

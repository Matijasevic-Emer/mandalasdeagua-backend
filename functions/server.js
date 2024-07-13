import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import { getCertificates } from "./MOCK-CERTIFICATES.js";
import getListings from "./MOCK-LISTINGS.js";

var app = express();
app.use(cors());

var port = process.env.PORT || 5000;
const router = express.Router();

router.get("/certs", function (req, res) {
  res.json(getCertificates());
});

router.get("/listngs", function (req, res) {
  res.json(getListings());
});

// Iniciar servidor
app.use('/.netlify/functions/server', router);
export const handler = serverless(app);

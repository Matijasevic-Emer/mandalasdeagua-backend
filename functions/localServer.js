// server.js
import express from "express";
import cors from "cors";
import { getCertificates } from "./MOCK-CERTIFICATES.js";
import { getListings, getListingById } from "./MOCK-LISTINGS.js";

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;
const router = express.Router();

router.get("/certs", (req, res) => {
    res.json(getCertificates());
});

router.get("/listings", (req, res) => {
    const listings = getListings();
    const { id } = req.query;

    // Verificar si hay un ID en los query params
    if (id) {
        const listing = getListingById(Number(id));
        if (listing) {
            res.json(listing);
        } else {
            res.status(404).json({ message: "Listing not found" });
        }
    } else {
        // Si no hay ID, devolver todos los listings
        res.json(listings);
    }
});

// Iniciar servidor localmente
app.use("/api", router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

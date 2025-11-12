import express from 'express';

const app = express();

app.use(express.static("public")); //middleware der sikrer at statiske filer fra public bliver tilgængelige direkte

app.get("/test", (req, res) => {
    res.send({data: "Der er hul igennem til test"});
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
    //TODO; indsæt if hvis ikke server starter korrekt
});
import express from "express";

const app =express();

app.get('/', (req, res) => {
    res.send("endpoint is ok");
});

app.listen(3000, () => {
    console.log("application listening on port 3000");
})

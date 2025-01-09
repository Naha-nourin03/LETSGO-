const express = require("express");
const cors = require("cors");
require("./connect");
const Addmodel = require("./models/add");

const app = express();

app.use(express.json());
app.use(cors());
// POST route to add new data

app.post('/madd1', async(req, res) => {
    try {
        await Addmodel(req.body).save()
        res.send({message:"data added"})
    } catch (error) {
        console.log(error)
    }
})

app.post('/a', async (req, res) => {
    try {
        console.log("Received Data:", req.body);  // Log the received data
        const newLocation = new Addmodel(req.body);  // Create a new document from the request data
        await newLocation.save();  // Save it to MongoDB
        res.send({ message: "Data added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error adding data" });
    }
});

app.get("/v", async (req, res) => {
  try {
    const places = await Addmodel.find();
    res.send(places);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send({ message: "Error fetching data" });
  }
});

app.put("/accept/:id", async (req, res) => {
  try {
    const updatedPlace = await Addmodel.findByIdAndUpdate(req.params.id, { status: "accepted" }, { new: true });
    if (!updatedPlace) return res.status(404).send({ message: "Place not found" });
    res.send({ message: "Place accepted successfully", place: updatedPlace });
  } catch (error) {
    console.error("Error accepting place:", error);
    res.status(500).send({ message: "Error accepting place" });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    await Addmodel.findByIdAndDelete(req.params.id);
    res.send({ message: "Place rejected successfully" });
  } catch (error) {
    console.error("Error deleting place:", error);
    res.status(500).send({ message: "Error deleting place" });
  }
});

app.listen(4008, () => {
  console.log("Server is running on port 4008");
});

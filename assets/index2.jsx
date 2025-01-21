const express = require("express");
const cors = require("cors");
const upload = require("./multerConfig");
require("./connect");
const Addmodel = require("./models/add");

const app = express();
app.use(express.json());
app.use(cors());

// Image Upload Endpoint
app.post("/uploadImage", upload.single("Image"), (req, res) => {
    try {
      const { file } = req;
  
      if (!file) {
        return res.status(400).send({ message: "No file uploaded" });
      }
  
      // Respond with the Cloudinary URL of the uploaded file
      res.status(200).send({
        message: "Image uploaded successfully",
        data: { Image: file.path },
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      res.status(500).send({ message: "Error uploading image" });
    }
  });
  

// Add Place Endpoint
app.post("/addPlace", async (req, res) => {
  try {
    const newPlace = new Addmodel(req.body);
    await newPlace.save();
    res.status(201).send({ message: "Place added successfully", data: newPlace });
  } catch (error) {
    console.error("Error adding place:", error);
    res.status(500).send({ message: "Error adding place" });
  }
});

// Get All Places
app.get("/v", async (req, res) => {
  try {
    const places = await Addmodel.find();
    res.status(200).send(places);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send({ message: "Error fetching places data" });
  }
});

// Accept Place
app.put("/accept/:id", async (req, res) => {
  try {
    const updatedPlace = await Addmodel.findByIdAndUpdate(
      req.params.id,
      { status: "accepted" },
      { new: true }
    );
    if (!updatedPlace) {
      return res.status(404).send({ message: "Place not found" });
    }
    res.status(200).send({ message: "Place accepted successfully", place: updatedPlace });
  } catch (error) {
    console.error("Error accepting place:", error);
    res.status(500).send({ message: "Error accepting the place" });
  }
});

// Delete Place
app.delete("/delete/:id", async (req, res) => {
  try {
    const deletedPlace = await Addmodel.findByIdAndDelete(req.params.id);
    if (!deletedPlace) {
      return res.status(404).send({ message: "Place not found" });
    }
    res.status(200).send({ message: "Place rejected successfully" });
  } catch (error) {
    console.error("Error deleting place:", error);
    res.status(500).send({ message: "Error deleting place" });
  }
});

// Start the server
app.listen(4008, () => {
  console.log("Server is running on port 4008");
});

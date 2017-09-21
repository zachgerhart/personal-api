const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")

const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

var main_ctrl = require('./controllers/main_ctrl.js');

app.get("/api/name", main_ctrl.getName);

app.get("/api/location", main_ctrl.getLocation);

app.get("/api/occupations", main_ctrl.getOccupations);

app.get("/api/occupations/latest", main_ctrl.getOneOccupation);

app.get("/api/hobbies", main_ctrl.getHobbies);

app.get("/api/hobbies/:type", main_ctrl.getHobbiesType);

app.get("/api/family", main_ctrl.getFamily);

app.get("/api/family/:gender", main_ctrl.getFamilyGender);

app.get("/api/restaurants/:name", main_ctrl.getRestaurantName);

app.put("/api/name/:id", main_ctrl.updateName);

app.put("/api/location/:id", main_ctrl.updateLocation);

app.post("/api/hobbies/", main_ctrl.addHobby);

app.post("/api/occupations", main_ctrl.addOccupation);

app.post("/api/family", main_ctrl.addFamily);

app.post("/api/restaurants", main_ctrl.addRestaurant);

app.get("/api/skills", main_ctrl.getSkills);

app.post("/api/skills", main_ctrl.addSkill);







app.listen(port, () => {
  console.log(`listening on port: ${port}`);
})

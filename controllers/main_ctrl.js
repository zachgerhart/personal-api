var user = require('../user.js');
var skills = require('../skills.js');

const getName = (req, res, next) => {
  res.json({name: user.name })
}

const getLocation = (req, res, next) => {
  res.json({location: user.location})
}

const getOccupations = (req, res, next) => {
  res.json({occupations: user.occupations})
}

const getOneOccupation = (req, res, next) => {
  return res.json(user.occupations.slice(2))
}

const getHobbies = (req, res, next) => {
  res.json({hobbies: user.hobbies})
}

const getHobbiesType = (req, res, next) => {
  if(req.params.type) {
    res.json(user.hobbies.filter(hobby => hobby.type === req.params.type));
  } else {
    res.json(user.hobbies);
  }
}

const getFamily = (req, res, next) => {
  res.json({family: user.family})
}

const getFamilyGender = (req, res, next) => {
  if(req.params.gender){
    res.json(user.family.filter(family => family.gender === req.params.gender))
  } else {
    res.json(user.family);
  }
}

const getRestaurants = (req, res, next) => {
  res.json({restaurants: user.restaurants})
}

const getRestaurantName = (req, res, next) => {
  if(req.params.name){
    res.json(user.restaurants.filter(restaurant => restaurant.name === req.params.name))
  } else {
    res.json(user.restaurants);
  }
}

const updateName = (req, res, next) => {
      res.json({name: user.name = req.params.id })
}

const updateLocation = (req, res, next) => {
  res.json({location: user.location = req.params.id})
}

const addHobby = (req, res, next) => {
user.hobbies.push(req.body);
res.json(user.hobbies);
};

const addOccupation = (req, res, next) => {
user.occupations.push(req.body);
res.json(user.occupations);
};

const addFamily = (req, res, next) => {
user.family.push(req.body);
res.json(user.family);
};

const addRestaurant = (req, res, next) => {
user.restaurants.push(req.body);
res.json(user.restaurants);
};

const getSkills = (req, res, next) => {
  if (req.query.experience){
      res.json({skills: skills.filter(skills => skills.experience === req.query.experience)});
  }
  res.json({skills: skills})
}

const addSkill = (req, res, next) => {
skills.push(req.body);
res.json(skills);
};







module.exports = {
  getName,
  getLocation,
  getOccupations,
  getOneOccupation,
  getHobbies,
  getHobbiesType,
  getFamily,
  getFamilyGender,
  getRestaurants,
  getRestaurantName,
  updateName,
  updateLocation,
  addHobby,
  addOccupation,
  addFamily,
  addRestaurant,
  getSkills,
  addSkill

}

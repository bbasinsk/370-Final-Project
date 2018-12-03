import server from './SERVER';

const moreData = {
	"accommodates": 5,
	"bathrooms": 5,
	"bedrooms": 3,
	"beds": 4.5,
	"guests_included": 5,
	"extra_people": 20, 
	"minimum_nights": 1, 
	"maximum_nights": 1, 
	"Heat lamps": true,
  "Sound system": false, 
  "Shared gym": false, 
  "Pack n Play/travel crib": false,
  "Balcony": false, 
  "Waterfront": false, 
  "Fire pit": false, 
  "Wine cooler": false,
  "Shared hot tub": false, 
  "Doorman": false, 
  "Printer": true, 
  "Shared pool": true,
  "Ski-in/Ski-out": false, 
  "Private gym": false, 
  "Heated towel rack": false,
  "Mountain view": false, 
  "Formal dining area": false, 
  "Bidet": false, 
  "Standing valet": false,
  "Sun loungers": false,
	"neighborhood": "Belltown",
	"zipcode": "98105",
	"property_type": "House",
	"room_type": "Entire home/apt",
	"bed_type": "Real Bed"
}

const predictIncome = async data => {
  const response = await fetch(`${server}/predict`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json, text/html, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const res = await response.json();

  return res.prediction
};

export default predictIncome;


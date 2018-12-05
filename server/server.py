from flask import Flask, request, jsonify
import json
from model import get_model
from columns import get_column_names
import pandas as pd
from flask_cors import CORS, cross_origin

classifier = get_model()

# ===========================================================================================
#   START THE SERVER
# ===========================================================================================

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def hello_world():
    return "Hello!"


@app.route('/predict', methods=['POST'])
def make_prediction():
    if not request.get_json():
        code = 400
        msg = 'Bad request'
        return msg, code
    
    request_data = request.get_json()
    print(request_data.get("property_type"))
    df = pd.DataFrame(columns=get_column_names())
    
    # set all dummy columns to 0
    df.loc[0, 28:] = 0

    # for each dummy value, set to 1
    df.loc[0, 'neighbourhood_' + request_data.get("neighborhood")] = 1
    df.loc[0, 'zipcode_' + request_data.get("zipcode")] = 1
    df.loc[0, 'property_type_' + request_data.get("property_type")] = 1
    df.loc[0, "room_type_" + request_data.get("room_type")] = 1
    df.loc[0, "bed_type_" + request_data.get("bed_type")] = 1

    # for each of the numeric variables
    df.loc[0, 'accommodates'] = request_data.get("accommodates")
    df.loc[0, 'bathrooms'] = request_data.get("bathrooms")
    df.loc[0, 'bedrooms'] = request_data.get("bedrooms")
    df.loc[0, 'beds'] = request_data.get("beds")
    df.loc[0, 'guests_included'] = request_data.get("guests_included")
    df.loc[0, 'extra_people'] = request_data.get("extra_people")
    df.loc[0, 'minimum_nights'] = request_data.get("minimum_nights")
    df.loc[0, 'maximum_nights'] = request_data.get("maximum_nights")

    # for each of the amenities
    df.loc[0, "Heat lamps"] = request_data.get("Heat lamps")
    df.loc[0, "Sound system"] = request_data.get("Sound system")
    df.loc[0, "Shared gym"] = request_data.get("Shared gym")
    df.loc[0, "Pack n Play/travel crib"] = request_data.get("Pack n Play/travel crib")
    df.loc[0, "Balcony"] = request_data.get("Balcony")
    df.loc[0, "Waterfront"] = request_data.get("Waterfront")
    df.loc[0, "Fire pit"] = request_data.get("Fire pit")
    df.loc[0, "Wine cooler"] = request_data.get("Wine cooler")
    df.loc[0, "Shared hot tub"] = request_data.get("Shared hot tub")
    df.loc[0, "Doorman"] = request_data.get("Doorman")
    df.loc[0, "Printer"] = request_data.get("Printer")
    df.loc[0, "Shared pool"] = request_data.get("Shared pool")
    df.loc[0, "Ski-in/Ski-out"] = request_data.get("Ski-in/Ski-out")
    df.loc[0, "Private gym"] = request_data.get("Private gym")
    df.loc[0, "Heated towel rack"] = request_data.get("Heated towel rack")
    df.loc[0, "Mountain view"] = request_data.get("Mountain view")
    df.loc[0, "Formal dining area"] = request_data.get("Formal dining area")
    df.loc[0, "Bidet"] = request_data.get("Bidet")
    df.loc[0, "Standing valet"] = request_data.get("Standing valet")
    df.loc[0, "Sun loungers"] = request_data.get("Sun loungers")
    
    result = classifier.predict(df)

    response = jsonify({'prediction': result[0]})
    return response

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

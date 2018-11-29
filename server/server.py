from flask import Flask, request
import json
import numpy as np  
import pandas as pd  
from sklearn.model_selection import train_test_split  
from sklearn.preprocessing import StandardScaler  
from sklearn.neighbors import KNeighborsClassifier  

url = "https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data"

# Assign colum names to the dataset
names = ['sepal-length', 'sepal-width', 'petal-length', 'petal-width', 'Class']

# Read dataset to pandas dataframe
dataset = pd.read_csv(url, names=names)  

# Set features (x) and labels (y)
X = dataset.iloc[:, :-1].values  
y = dataset.iloc[:, 4].values  

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20)  

scaler = StandardScaler()
scaler.fit(X_train)

X_train = scaler.transform(X_train)
X_test = scaler.transform(X_test)

classifier = KNeighborsClassifier(n_neighbors=10)  
classifier.fit(X_train, y_train)  

# ===========================================================================================
#   START THE SERVER
# ===========================================================================================

app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hello World!"

@app.route('/predict')
def make_prediction():
    if not request.get_json():
        abort(400)
    request_data = request.get_json()

    s_l = float(request_data.get("sepal_length"))
    s_w = float(request_data.get("sepal_width"))
    p_l = float(request_data.get("petal_length"))
    p_w = float(request_data.get("petal_width"))

    x = [[s_l, s_w, p_l, p_w]]
    x_transformed = scaler.transform(x)
    result = classifier.predict(x_transformed)
    return str(result[0])

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')

# Versicolor
# {
# 	"sepal_length": 6,
# 	"sepal_width": 2.8,
# 	"petal_length": 4,
# 	"petal_width": 1.3
# }
# Verginica
# {
# 	"sepal_length": 7,
# 	"sepal_width": 3,
# 	"petal_length": 6,
# 	"petal_width": 2
# }
# Setosa
# {
# 	"sepal_length": 5,
# 	"sepal_width": 4,
# 	"petal_length": 1,
# 	"petal_width": 0.3
# }

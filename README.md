# Project Proposal: How House Features Impact Monthly Income through AirBnb

INFO 370 Introduction to Data Science

Ben Basinski, Joseph Tsai, Jacob Lu, & Kerstin Huang

November 17, 2018

---

## Project Description

### Purpose of Research

The purpose of this research is to better understand if features of a home impact the amount of income a home will make when listed on Airbnb. This is a relevant topic to research because over the years, Airbnb has gained a lot of attraction and people have the option to place their home listing on Airbnb over renting it out or even put up a listing for short periods of time when their home is not occupied.

By having a better understanding of how features of a home impact income, we will be able to better assist current and future AirBnb hosts. This is because we will be able to educate them on how to increase their home income as well as give them an accurate prediction of what to expect based on their listing. This research also gives customers reasonable renting prices based on housing features which will keep them satisfied.

### How it Relates to a Problem

Airbnb takes part in a shared economy, that is to say, Airbnb primarily operates in a peer-to-peer market (Georgios Zervas). Airbnb provides services that long-established companies have dominated in the past, such as hotels, and some would say that it is in this sector that Airbnb is causing the most disruption (Daniel Guttentag).

It is the combination of the shared economy and disruption in the formerly established market that our team believes fits the scope of this project into a larger problem domain: the shift of the housing industry to a peer to peer market. In the view of the long-established hotels, this could be an issue as Airbnb is taking what would be potential revenue and drawing it into the peer-to-peer market.

Airbnb has grown in the past few years, affecting the hospitality industry significantly. A study from Zervas showed that for every 10 percent increase in Airbnb listings, there is a 0.35 percent decrease in monthly hotel revenue in Austin, Texas (Oskam . Given 1.5 million Airbnb listings in 2015, there is an impact on hotel businesses, and knowing the income from Airbnb hosts could help clarify or quantify the degree of such impact.

For Airbnb, the problem could be that long-established housing companies are trying to fight back against this shift. The goal of this project is to explore this impact through analyzing the income of Airbnb hosts, which may potentially allow our team to draw conclusions about the impact of Airbnb on the long-established practices within the hospitality sector.

### Hypotheses

- **H0**: There is no relationship between home features and AirBnb monthly income in Seattle
- **H1**: There is a relationship between home features and AirBnb monthly income in Seattle

Can you predict certain features of houses that influence income in Seattle?

### Datasets

The dataset that our team will be working with can be found here: http://insideairbnb.com/get-the-data.html

Specifically, our team will be working with the data related to the Airbnb homes within Seattle. The data contains information about the Airbnb homes’ characteristics, reviews about the given Airbnb home, as well as the listing information for the home.

In terms of home characteristics, the listings dataset contains information such as the number of rooms, the number of bathrooms, a description of the neighborhood, nearby transit options, etc. This data will allow us to relate the features to the income for the specific house, as well as measure how impactful certain features are over others. The data is essentially the key features one would consider when deciding whether or not to stay at a certain Airbnb, as well as determine the price for a given house.

In relation to the reviews for a given Airbnb home, the listings dataset also contains information such as the number of reviews for a given listing, as well as the total review score for the given home. This could also be added to the features we test to see if there is also a relationship between the given reviews and the monthly income. This data is similar to that of a hotel’s rating, where once a customer has stayed at a certain location, they are allowed to present a review about their stay. Quantity of reviews as well as total average of reviews could contribute to the predicted income of Airbnb hosts.

For listing information, the calendar dataset contains dates, as well as if a home is booked on that date. For customers, this is a way to book open houses, as it shows the availability of the homes. For our team, this could be used to potentially analyze if the features of a home could impact its availability and ultimately, show how much income is derived from a given home. The percentage of days an Airbnb is booked which shows popularity of the listing could also play a role in income for hosts.

### Methods

Our team will start with feature engineering and selection. We will start by exploring the distributions of features and the relationships between them by creating data visualizations. These visualizations, along with our research, should give us a good idea of what features to include and which to remove. Our dependent variable (monthly income) will also be a computed column based off of bookings per month and price per night.

Our team will then test various machine learning methods to predict monthly income based on house features. We will create a pipeline that will fill in missing values, normalize the data, and perform a polynomial transformation on the data. We will tune the hyperparameters of this pipeline by using cross-validation with a grid search.

The problem of predicting income is a regression problem, so the models that we test will reflect that. Our team will start with a linear regression, but we will also test models such as K-Nearest-Neighbors regression, decision tree regression, and support vector regression.

The accuracy of our model will be determined by the mean absolute error. This metric gives us the average difference in the actual income per month vs the predicted income per month. For example, if the resulting mean absolute error is 200, our predictions of income are, on average, \$200 off of the real monthly income.

### Audience

Our main audiences are current Airbnb hosts and homeowners who are interested in becoming Airbnb hosts. We want to be able to better inform our audience of potential income they can make based on features of their home and give them a realistic prediction of what they can expect to make on Airbnb.

From our resource, current Airbnb hosts can better predict how much income they will make from their home in a given year. Also, those who are interested in becoming a host can better assess whether Airbnb is a good option for them based on the predicted income of similar homes. Below are some questions we hope to help our audience answer:

- How much income will my home make in a given year?
- What features in a home tend to make more income (if any)?
- Why is my home not making a lot of income?
- How can I make more income from my home?
- What type of homes make the most income?

## Technical Description

### Format of Final Resource

The final web resource will be a one-page semi-interactive React web application. The page will scroll and contain paragraphs describing our approach and results. The page could also contain a form where a user could input the feature of their house, and we could predict their monthly income. This functionality may require a python service that takes the feature data and passes it into our model to get a result.

Data visualizations will potentially use tools such as D3, Nivo, React-Vis, and/or Victory. Graphs may include various controls such as sliders, dropdowns, and checkboxes that will allow users to toggle and move data around.

### Challenges

#### Data Collection Challenges

Finding data related to income could potentially be challenging for our team. Income could include a variety of different factors because profit and expenses both play a role in determining income. A larger house may have a higher listing price but is typically associated with greater maintenance, rental, and utilities cost which could convolute how income is determined. Additional expenses may exist that aren’t included in our dataset such as state taxes and Airbnb commission fees. Either assumptions need to be made about profit and expenses, or more data needs to be found to include different factors. Finding extra datasets related to expenses and joining them to our current dataset to more accurately predict income might be needed.

#### General Challenges

Some general challenges we anticipate are finding an optimal absolute error. Further research on statistical analysis would need to be done to figure out the range in which a good absolute error would be appropriate. Furthermore, dealing with NaN and null values in our dataset could be an obstacle. There are multiple ways to approach this: our team could statistically model predictions for NaN and null values based on variables in the dataset, or we could find the average or median of each column and replace unknown values. Our team could also remove all NaN and null values if there are enough rows in the data to make an accurate prediction.

### Technical Skills

Our team will most likely need to pick up new machine learning models to present more comprehensive analytics of our data. New models such as Support Vector Regressors might be used for predictions. Some of its advantages are that it is versatile using different kernel functions, memory efficient, and effective when multiple dimensions are involved. However, some disadvantages are that they do not provide probability estimates and can lead to overfitting if too many features are used.

Our team also plans on learning React libraries for graphs and map visualizations such as Nivo and Victory which uses data converted to JSON in Python. Nivo and Victory visualizations are flexible to implement and provide interactivity which allows users to gain insights for themselves by playing around with the graphs. Interactive features such as dropdowns, checkboxes, and input fields could be implemented into the interactive visualizations.

## Works Cited

Daniel Guttentag (2015) Airbnb: disruptive innovation and the rise of an informal tourism accommodation sector, Current Issues in Tourism, 18:12, 1192-1217, DOI: 10.1080/13683500.2013.827159

Georgios Zervas, Davide Proserpio, and John W. Byers (2017) The Rise of the Sharing Economy: Estimating the Impact of Airbnb on the Hotel Industry. Journal of Marketing Research: October 2017, Vol. 54, No. 5, pp. 687-705.

Jeroen Oskam, Albert Boswijk, (2016) "Airbnb: the future of networked hospitality businesses", Journal of Tourism Futures, Vol. 2 Issue: 1, pp.22-42, https://doi.org/10.1108/JTF-11-2015-0048

import numpy as np  
import pandas as pd  
from sklearn.feature_selection import SelectKBest, chi2, VarianceThreshold, SelectPercentile, RFE
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split # splitting data
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import MinMaxScaler       # scaling data
from sklearn.model_selection import GridSearchCV     # for grid search
from sklearn.pipeline import Pipeline                # for making pipelines
from sklearn.preprocessing import PolynomialFeatures
from sklearn.model_selection import KFold

def get_data():
    # Read csv
    listings_df = pd.read_csv('./airbnb_data.csv', low_memory = False)

    # Drop columns that aren't related to income or not feasible to capture from user
    columns_to_drop = ['Unnamed: 0', 'id', 'scrape_id', 'host_id', 'host_total_listings_count',
                    'latitude', 'longitude', 'availability_30', 'availability_60', 'availability_90',
                    'availability_365', 'number_of_reviews', 'calculated_host_listings_count', 
                    'reviews_per_month', 'Other', 'listing_url', 'last_scraped', 'host_name',
                    'experiences_offered', 'picture_url', 'name', 'host_url', 'host_since',
                    'host_is_superhost', 'host_thumbnail_url', 'host_picture_url', 'host_listings_count',
                    'host_verifications', 'host_has_profile_pic', 'host_identity_verified', 'street',
                    'city', 'neighbourhood_group_cleansed', 'smart_location', 'country_code',
                    'country', 'is_location_exact', 'amenities', 'price', 'calendar_updated', 'has_availability',
                    'calendar_last_scraped', 'first_review', 'last_review', 'requires_license',
                    'jurisdiction_names', 'instant_bookable', 'is_business_travel_ready',
                    'cancellation_policy', 'require_guest_profile_picture', 'require_guest_phone_verification',
                    'translation missing: en.hosting_amenity_49', 'summary', 'space', 'description',
                    'neighborhood_overview', 'notes', 'transit', 'access', 'interaction', 'house_rules',
                    'thumbnail_url', 'medium_url', 'xl_picture_url', 'host_location', 'host_about',
                    'host_response_time', 'host_response_rate', 'host_acceptance_rate', 'state',
                    'neighbourhood_cleansed', 'host_neighbourhood', 'license', 'review_scores_rating',
                    'review_scores_accuracy', 'review_scores_cleanliness', 'review_scores_checkin',
                    'review_scores_communication', 'review_scores_location', 'review_scores_value',
                    'weekly_price', 'monthly_price', 'security_deposit', 'cleaning_fee', 'market']
    for col in columns_to_drop:
        listings_df.drop([col], axis=1, inplace=True)

    # Remove rows that don't have an estimated income per month
    listings_df = listings_df[~pd.isna(listings_df['estimated_income_per_month'])]

    # Dropping square feet because 7450 out of 7712 (97%) rows are null
    listings_df.drop(['square_feet'], axis=1, inplace=True)

    # Fill values going forward
    listings_df.fillna(method ='ffill', inplace=True)

    # Convert zipcode to string rather than float
    listings_df['zipcode'] = listings_df['zipcode'].astype('int').astype('str')

    # Convert $ amount for extra people from string to float
    listings_df['extra_people'] = listings_df['extra_people'].apply(lambda s: s[1:]).astype('float')

    amenities = listings_df.iloc[:, 13:-1]
    y = np.ravel(listings_df.iloc[:, [-1]])

    # Select 20 top amenities
    select = RFE(LinearRegression(), 20).fit(amenities, y)

    # Remove amenities that weren't selected
    remove_cols = [col for i, col in enumerate(amenities.columns.values) if not select.get_support()[i]]
    for col in remove_cols:
        listings_df.drop([col], axis=1, inplace=True)

    listings_df = pd.get_dummies(listings_df)

    estimated_income = listings_df['estimated_income_per_month']
    listings_df = listings_df.drop(['estimated_income_per_month'], axis=1)

    return listings_df, estimated_income

def build_classifier(features, outcome):
    train_features, test_features, train_outcome, test_outcome = train_test_split(
        features,
        outcome,
        test_size=0.20, 
        random_state=11
    )

    scaler = MinMaxScaler()

    # define a pipeline
    pipe = Pipeline([('scaler', scaler), ('RandomForestRegressor', RandomForestRegressor())])

    folds = KFold(n_splits = 10, shuffle = True)

    # defines a grid to search through
    param_grid = {
        'RandomForestRegressor__n_estimators': [1000]
    }

    # performs a grid search of pipeline
    rand_forest_grid = GridSearchCV(pipe, param_grid, cv=folds, scoring="neg_mean_absolute_error", verbose=3)
    rand_forest_model = rand_forest_grid.fit(train_features, train_outcome)

    return rand_forest_model

def get_model():
    features, outcome = get_data()
    model = build_classifier(features, outcome)
    return model
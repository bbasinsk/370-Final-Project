import React from 'react';
import Typography from "@material-ui/core/Typography";
import images from '../assets';

export default class WriteUpPage extends React.Component {
    render() {
        return (
            <div className='container'>
                <h1 style={{textAlign: "center"}} >Write Up</h1>

                <p>The research paper for this project can be found <a href="https://docs.google.com/document/d/1KV3nNC6_EUo97waj307tN7QIPBwS3h11EIVTe_HNAPI/edit?usp=sharing">here</a></p>


                <h2>Purpose of the Topic</h2>
                <Typography variant="body1" paragraph={true} gutterBottom> 
                    The purpose of this research is to better understand if features of a home impact the amount of income a home will make when listed on Airbnb. This is a relevant topic to research because over the years, Airbnb has gained more attraction and property owners have the option to place their property on Airbnb over renting it out or even put up a listing for short periods of time when their property is not occupied.
By having a better understanding of how features of a home impact income, our team seeks to better assist current and future AirBnb hosts. We believe that this online resource will be able to educate current and future AirBnb hosts on how to increase their average monthly income through their AirBnb listing(s) as well as give them an accurate prediction of what to expect based on their listing’s features. 
                </Typography>

                <h2>Context</h2>
                <Typography variant="body1" paragraph={true} gutterBottom>
                <p>
                    Airbnb takes part in a shared economy, that is to say, Airbnb primarily operates in a peer-to-peer market (Georgios Zervas). Airbnb provides services that long-established companies have dominated in the past, such as hotels, and some would say that it is in this sector that Airbnb is causing the most disruption (Daniel Guttentag).
It is the combination of the shared economy and disruption in the formerly established market that our team believes fits the scope of this project into a larger problem domain: the shift of the housing industry to a peer to peer market.
                </p>

                <p> 
                    In the view of the long-established hotels, this could be an issue as Airbnb is taking what would be potential revenue and drawing it into the peer-to-peer market.
Airbnb has grown in the past few years, affecting the hospitality industry significantly. A study from Zervas showed that for every 10 percent increase in Airbnb listings, there is a 0.35 percent decrease in monthly hotel revenue in Austin, Texas (Oskam . Given 1.5 million Airbnb listings in 2015, there is an impact on hotel businesses, and knowing the income from Airbnb hosts could help clarify or quantify the degree of such impact.
                </p>

                <p> 
                    For Airbnb, the problem could be that long-established housing companies are trying to fight back against this shift. The goal of this project is to explore this impact through analyzing the income of Airbnb hosts, which may potentially allow our team to draw conclusions about the impact of Airbnb on the long-established practices within the hospitality sector.
                </p>
                </Typography>

                <h2 variant="h2" gutterBottom>Data Exploration</h2>
                <p>
                    Interpretation:
                    The following section details the data exploration our team performed on the dataset, which was based on quantitative questions and ultimately led to high level insights about the data. The quantitative questions have been stated before the exploration of the dataset (which can be seen within the visualizations of the data based on the questions), and the high-level insights gained from the dataset can be found within our team’s interpretations of the visualizations. 
                </p>

                <h4 variant="h4">Question: How do number of bedrooms affect estimated income per month?</h4>
                <img src={images.img1} style={{justifyContent: 'center', alignItems: 'center', width: "80%"}}/>
                <p>
                    The violin plot helps clearly show the median estimated income per month based on the number of bedrooms the AirBnB provides. The general trend shows that as the number of bedrooms increases, the estimated income per month for the host increases. This could be due to the fact that a greater number of bedrooms is able to accomodate more people which leads to a higher price rate. 0 bedrooms has a greater median estimate income than 1 bedroom which could be due to the fact that there are different room types such as a studio which may or may not have a bedroom. 
                </p>
                <p>
                    Furthermore, the kernel density estimation shows the distribution of each number of bedrooms, with bedrooms 0-4 having a greater probability that members of population will have the given value due to the thicker widths, and bedrooms 5-10 with lower probability that members of population will have the given value due to the thinner widths. One outlier for 1 bedroom with an estimated income per month of about 82,000 leads to 1 bedroom AirBnbs having the greatest range of incomes.
                </p>

                <h4 variant="h4">Question: How many listings are within each neighborhood?</h4>
                <img src={images.img2} style={{justifyContent: 'center', alignItems: 'center'}}/>
                <p>
                    Interpretation: The graph reveals that Capitol Hill, Downtown, and other neighborhoods have the highest counts for listings. Capitol Hill and Downtown could be consider more urban areas, and thus we might expect that more people would rent out listings closer to the center of the city. In regards to other neighborhoods, this separate grouping could show that there are multiple listings in between the larger neighborhoods listed within the dataset.
                </p>

                <h4 variant="h4">Question: How does estimated monthly income differ between neighborhoods?</h4>
                <img src={images.img3} style={{justifyContent: 'center', alignItems: 'center'}}/>
                <p>
                    Interpretation: Although there are differing counts of listings per neighborhood, the distribution of estimated monthly income per neighborhood is relatively similar. This similar distribution can be seen within the similar peaks for most neighborhoods, as well as the clustering of the points between the 2500 and 5000 estimated income per month marks. Thus, although there are more listings in certain neighborhoods than others, the distribution of estimated income per month is relatively the same for most of the neighborhoods within the dataset.
                </p>

                <h4 variant="h4">Question: how does estimated monthly income differ between property types?</h4>
                <img src={images.img4}/>
                <p>
                    Interpretation: Property types with the more listings seem to have the more variety in terms of estimated income per month. An example of this is the “House” property type, which has estimated income data points across the  entire range of the y-axis. An insight that can be drawn from this graph is that the more listings of a specific property type there are, the more likely there is to be a range on its estimated income per month.
                </p>

                <h4 variant="h4">Question: Does the rating of the listing impact the estimated monthly income of the listing?</h4>
                <img src={images.img5}/>
                <p>
                    Interpretation: There seems to be a positive correlation between the review scores rating and the estimated income per month. There is a clear grouping of points toward the right side of the graph, indicating that not only do higher scores obtain more estimated income per month, but that more people tend to book or leave reviews on homes with previously high review score ratings. 
                </p>

                <h2 variant="h2" gutterBottom>Understanding of Variables</h2>
                <h4 variant="h4">How did we select our features?</h4>
                <img src={images.img6} style={{justifyContent: 'center', alignItems: 'center'}}/>

                <p>
                    During the exploratory phase, our group built a correlation matrix and then ranked all features that were correlated to estimated_income_per_month from largest to smallest. This gave the group a general understanding of the top features that were most correlated to the income.
                </p>

                <p>
                    To gain further inspiration for features to include in the model, we looked into the AirBnb website for what the company asks of hosts when publishing a listing. AirBnb used many house features that could contribute to the price of the listing such as number of bathrooms, bedrooms, accomodations, beds, address, house type, property type, and amenities. Since these were all included in the AirBnb website, we decided to use all the features listed above in our model.
                </p>

                <p>
                    Given the multitude of options for amenities, our group used recursive feature elimination to select the top 20 amenities to include in the model. From backwards selection using RFE, the following amenities were chosen: EV charger', 'Heat lamps', 'Sound system', 'Shared gym', 'Pack ’n Play/travel crib', 'Balcony', 'Waterfront', 'Wine cooler', 'Shared hot tub', 'Doorman', 'Printer', 'Shared pool', 'Ski-in/Ski-out', 'Private gym', 'Heated towel rack', 'Mountain view', 'Formal dining area', 'Bidet', 'Standing valet', 'Sun loungers’.  
                </p>

                <p>
                    Furthermore, dummy variables for bed type, house type, room type, property types, and zip codes were broken down into separate columns because our group believed that these features played a significant role in income predictions. For instance, bed type included Futon, Couch, and Pull-out Sofa were broken down as separate columns as used as features in the model.
                </p>

                <p>
                During exploration, we also removed several features. One of which was the square footage of the home. We found that over 97% of observations were missing square footage, so we didn’t think it would help with prediction. Due to time constraints, we also removed any features that would require natural language processing such as the house’s and neighborhood’s descriptions.
                </p>


                <h2 variant="h2" gutterBottom>Methods and Results</h2>

                <h4 variant="h4">Calculation of Estimated Average Monthly Income</h4>
                <p>
                    The estimated average monthly income was not originally included within the dataset. The value was calculated using the equation listed on the website, which can be seen below:
                </p>

                <img src={images.img7} style={{justifyContent: 'center', alignItems: 'center', width: "100%"}}/>

                <p>
                    This value was added to the original dataset to allow our team to perform the calculations described above, as well as perform the data analysis described in the following sections.
                </p>

                <h4 variant="h4">Method for Measuring Results</h4>
                <p>
                RMSE vs. MAE: Our team decided to utilize MAE because all individual differences within the dataset have been deemed to have equal weight. That is to say, larger errors within the model are not given more weight than small errors (such as in the case of RMSE). The usage of MAE is to account for the large range of average monthly income the AirBnb listing owners have, as some have more listings than others or charge a larger amount for their listing.
                </p>

                <h4 variant="h4">Models Explored and Chosen </h4>
                <p>
                    We took multiple statistical approaches: Random Forest, KNN, Decision Tree, and Gaussian Naive Bias. After running these models, the resulting MAE values are:
                </p>

                <ul>
                    <li>
                        Random Forest : 944
                    </li>
                    <li>
                        KNN: 1040
                    </li>
                    <li>
                        Decision Tree: 1230
                    </li>
                    <li>
                        Gaussian Naive Bias: 1277
                    </li>
                </ul>

                <p>
                    These MAE values mean that the average magnitude of error for the predicted estimated monthly income is $x. From the above models, the two most accurate models were random forest and KNN.
                </p>

                <p>
                    <b> Random Forest:</b> <i>The average magnitude of error for the predicted estimated monthly income is $944.</i> <br></br> Random Forest merges multiple decision trees to create more accurate decisions. This is because while tree nodes split, the model looks for the best features among the random subsets of features. By doing so, Random Forest is able to select the best features that make the most impact on income. Thus, this model gave us the best predictions because it helped discover the Airbnb characteristics that most influenced income. 
                </p>

                <p>
                    <b>KNN:</b> <i>The average magnitude of error for the predicted estimated monthly income is $1040.</i> <br></br> The KNN model works by making predictions based on those with similar features. By running this model, we were able to have a lower MAE because KNN will compare homes that share similar features and estimate income based on home that are alike.
                </p>

                <p>
                    In summary, the two models that provided the most accurate predictions were Random Forest and KNN. This is because these two models helped discover home features that most impacted income and also compared homes that shared similar qualities. 
                </p>

                <p>
                    The following residual plot shows how well our Random Forest Model performs. While this was our best model, our team thinks that we could improve the accuracy by including more predictors such as latitude/longitude as well as possibly performing natural language processing on descriptions.
                </p>

                <img src={images.img8} style={{justifyContent: 'center', alignItems: 'center', width: "70%"}}/>

                <h2 variant="h2" gutterBottom>Works Cited</h2>
                <Typography variant="body1" gutterBottom> 
                    <p>Daniel Guttentag (2015) Airbnb: disruptive innovation and the rise of an informal tourism accommodation sector, Current Issues in Tourism, 18:12, 1192-1217, DOI: 10.1080/13683500.2013.827159 </p>
                    <p>Georgios Zervas, Davide Proserpio, and John W. Byers (2017) The Rise of the Sharing Economy: Estimating the Impact of Airbnb on the Hotel Industry. Journal of Marketing Research: October 2017, Vol. 54, No. 5, pp. 687-705.</p>
                    <p> Jeroen Oskam, Albert Boswijk, (2016) "Airbnb: the future of networked hospitality businesses", Journal of Tourism Futures, Vol. 2 Issue: 1, pp.22-42, https://doi.org/10.1108/JTF-11-2015-0048 </p>
                </Typography>

                <h2 variant="h2" gutterBottom>Our Team</h2>
                <p>Our team is comprised of students from the University of Washington Information school. This project was created for INFO 370, "Core Methods in Data Science".</p>
                    <img src={images.img9} style={{justifyContent: 'center', alignItems: 'center', width: "20%", borderRadius: "50%"}}/>
                    <img src={images.img10} style={{justifyContent: 'center', alignItems: 'center', width: "20%", borderRadius: "50%"}}/>
                    <img src={images.img11} style={{justifyContent: 'center', alignItems: 'center', width: "20%", borderRadius: "50%"}}/>
                    <img src={images.img12} style={{justifyContent: 'center', alignItems: 'center', width: "20%", borderRadius: "50%"}}/>
            </div>
        );
    }
}

import React from 'react';
import Typography from "@material-ui/core/Typography";

export default class WriteUpPage extends React.Component {
    render() {
        return (
            <div className='container'>
                <Typography variant="h1" align="center" gutterBottom>Write Up</Typography>

                <Typography variant="h2" gutterBottom>Purpose of the Topic</Typography>
                <Typography variant="body1" paragraph={true} gutterBottom> 
                    The purpose of this research is to better understand if features of a home impact the amount of income a home will make when listed on Airbnb. This is a relevant topic to research because over the years, Airbnb has gained more attraction and property owners have the option to place their property on Airbnb over renting it out or even put up a listing for short periods of time when their property is not occupied.
By having a better understanding of how features of a home impact income, our team seeks to better assist current and future AirBnb hosts. We believe that this online resource will be able to educate current and future AirBnb hosts on how to increase their average monthly income through their AirBnb listing(s) as well as give them an accurate prediction of what to expect based on their listing’s features. 
                </Typography>

                <Typography variant="h2" gutterBottom>Context</Typography>
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


                <Typography variant="h2" gutterBottom>Quantitative Questions</Typography>
                <Typography variant="h2" gutterBottom>Understanding of the Dataset</Typography>
                <Typography variant="h2" gutterBottom>High-level Insights</Typography>
                <Typography variant="h2" gutterBottom>Methods and Results</Typography>
                
                <Typography variant="h2" gutterBottom>Works Cited</Typography>
                <Typography variant="body1" gutterBottom> 
                    <p>Daniel Guttentag (2015) Airbnb: disruptive innovation and the rise of an informal tourism accommodation sector, Current Issues in Tourism, 18:12, 1192-1217, DOI: 10.1080/13683500.2013.827159 </p>
                    <p>Georgios Zervas, Davide Proserpio, and John W. Byers (2017) The Rise of the Sharing Economy: Estimating the Impact of Airbnb on the Hotel Industry. Journal of Marketing Research: October 2017, Vol. 54, No. 5, pp. 687-705.</p>
                    <p> Jeroen Oskam, Albert Boswijk, (2016) "Airbnb: the future of networked hospitality businesses", Journal of Tourism Futures, Vol. 2 Issue: 1, pp.22-42, https://doi.org/10.1108/JTF-11-2015-0048 </p>
                </Typography>
            </div>
        );
    }
}

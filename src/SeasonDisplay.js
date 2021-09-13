import React from 'react';

// this getSeason function will take the current latitude and month and return the season
const getSeason = (lat,month) => {

    // if month is April (3) thru September (8) it is Summer in Northern Hemisphere
    if (month > 2 && month < 9){
        // use JavaScript ternary expression; 
        // if lat > 0 then we are in Northern Hemisphere
        return lat > 0 ? 'Summer' : 'Winter';
    }
    else {
        return lat > 0 ? 'Winter' : 'Summer';
    }; 
 
};


// create a new functional component called SeasonDisplay
const SeasonDisplay = (props) => {
    console.log(props.lat);

    const season = getSeason(props.lat, new Date().getMonth());
    console.log(season);   
    
    const text = season === 'Winter' ? 'Burr, it is chilly!' : 'Lets hit the beach!';
    const icon = season === 'Winter' ? 'snowflake' : 'sun';

    //return <div>SeasonDisplay</div>;
    // this is JSX interpolation
    return (
            // for icon className, display name of the icon followed by word icon in backticks
            // this is required for semantic-ui notation
            <div>
                <i className={`${icon} icon`} />
                <h1> { text } </h1>
                <i className={`${icon} icon`} />
            </div>
            );
};

export default SeasonDisplay;

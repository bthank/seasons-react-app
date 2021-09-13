import React from 'react';


const Spinner = (props) => {

    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );

};

// this is an object that provides default properties to Spinner in case we forget
// to set props when we create an instance of Spinner
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner; // export this component to make it available to others
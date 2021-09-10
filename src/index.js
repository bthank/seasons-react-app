import React from 'react';
import ReactDOM from 'react-dom';


// develop a class based component
class App extends React.Component {
    render() {

        // this function will determine a user's current position in the world
        window.navigator.geolocation.getCurrentPosition(
            // function callback #1 is the success callback that is called when everything goes as planned
            (position) => console.log(position), 
            // function callback #2 is the failure callback that is called when something goes wrong and the function is unable to determine the user's physical location
            (err) => console.log(err)
        );        

        return <div>Latitude:</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);
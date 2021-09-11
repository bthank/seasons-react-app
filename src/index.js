import React from 'react';
import ReactDOM from 'react-dom';


// develop a class based component
class App extends React.Component {

    constructor(props){
         // super refers to the parent's (React.Component) constructor function
         // anytime we override the parent's constructor by calling our own, we need
         // to make sure the parent's constructor is still called by using super(props)
        super(props); 

        // we can initialize state in a constructor
        // THIS IS THE ONLY TIME we do direct assignment to this.state
        this.state = {lat: null};  // an empty object where we initialize latitude to null


        // this function will determine a user's current position in the world
        window.navigator.geolocation.getCurrentPosition(
            // function callback #1 is the success callback that is called when everything goes as planned
            (position) => {
                // you should only use setStat function to set the state of an object
                this.setState({
                    lat: position.coords.latitude,
                });
            }, 
            // function callback #2 is the failure callback that is called when something goes wrong and the function is unable to determine the user's physical location
            (err) => console.log(err)
        );        

    }


    render() {


        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);
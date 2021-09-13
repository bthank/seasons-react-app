import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


// develop a class based component
class App extends React.Component {

//    constructor(props){
         // super refers to the parent's (React.Component) constructor function
         // anytime we override the parent's constructor by calling our own, we need
         // to make sure the parent's constructor is still called by using super(props)
    //    super(props); 

        // we can initialize state in a constructor
        // THIS IS THE ONLY TIME we do direct assignment to this.state
    //    this.state = {lat: null, errorMsg: ''};  // an empty object where we initialize latitude to null
//      }

    // this line is the same as what is being done in constructor above setting state
    state = { lat: null, errorMsg: '' };


    // a components LIFECYCLE methods:
    // - constructor() - good place to do initial setup
    // - render() - this ones purpose is to return some JSX and not do anything else
    // - componentDidMount() - this is a good place to do some data loading
    // - componentDidUpdate() - this is also a good place to do more data loading for the component
    // - componentWillUnmount() - this is a good place to do cleanup



    // componentDidMount() will be called automatically anytime our component shows up on the screen
    componentDidMount(){
        console.log("My component was rendered to the screen");

        // this function will determine a user's current position in the world
        window.navigator.geolocation.getCurrentPosition(
            // function callback #1 is the success callback that is called when everything goes as planned
            (position) => this.setState({ lat: position.coords.latitude }),

        //    {
                // you should only use setStat function to set the state of an object
        //        this.setState({
         //           lat: position.coords.latitude,
        //        });
        //    }, 
            // function callback #2 is the failure callback that is called when something goes wrong and the function is unable to determine the user's physical location
            (err) => this.setState({ errorMsg: err.message })
        //    {
        //        this.setState({ 
        //            errorMsg: err.message 
        //        });
        //    },
        );           
    }
    // the render() method is called before the componentDidUpdate() method is called
    componentDidUpdate(){
        console.log("My component was just updated - it rerendered");
    }

    renderContent() {
        // if there is an error message and no latitude, then display an error and no latitude
        if (this.state.errorMsg && !this.state.lat) {
            return <div>Error: {this.state.errorMsg}</div>;
        }
        // if there is no error message and there is a latitude, display latitude and no error message
        if (!this.state.errorMsg && this.state.lat) {
          //  return <div>Latitude: {this.state.lat}</div>;

          // pass lat state down into SeasonDisplay as a property
          return <SeasonDisplay lat={ this.state.lat } />;
        }
        // else display loading
        return <Spinner message="Please accept location request"/>;
    };

    render() {

        return (
            <div className="border-red">
                {this.renderContent()}
            </div>
        );

    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);
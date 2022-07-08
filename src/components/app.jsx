/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */

import GoogleMapReact from "google-map-react";
import React, { Component } from "react";

// import Flat from "./flat.jsx";
import FlatList from "./flat_list";
import config from "../../config";
import flats from "../../data/flats";
import Marker from "./marker";

class App extends Component {
  constructor(props) {
    // to add a state need a constructor
    super(props);

    this.state = {
      // parts that will change during the lifetime of the app
      // selected gif
      selectedFlat: flats[0],
    };
    this.select = this.select.bind(this);
  }

  select = (index) => {
    this.setState({
      selectedFlat: flats[index],
    });
  };

  render() {
    // const gifs = [
    //   { id: "a93jwI0wkWTQs" },
    //   { id: "xT5LMBauOi9MgA50L6" }
    // ];

    const defaultProps = {
      center: {
        lat: 48.885707,
        lng: 2.343543,
      },
      zoom: 11,
    };

    return (
      <div>
        <FlatList flats={flats} select={this.select} selectedFlat={this.state.selectedFlat} />
        <div className="map-container">
          <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: config.MY_API_KEY,
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

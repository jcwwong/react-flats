/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

import Flat from "./flat";

class FlatList extends Component {
  renderList = () => {
    return this.props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          selectedFlat={this.props.selectedFlat}
          index={index}
          select={this.props.select}
          key={flat.imageUrl}
        />
      ); // whenever do a map, must pass key which is a unique identifier
    });
  };

  render() {
    return <div className="flat-list">{this.renderList()}</div>;
  }
}

export default FlatList;

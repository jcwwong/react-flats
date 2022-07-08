/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";


class Flat extends Component {
  // shouldComponentUpdate(nextProps, nextState) { // cuts the step of calling render to cf virtual DOM to actual DOM
  //   // ie when you change searchBar value, its a changed props and therefore normally renders this
  //   return nextProps.id !== this.props.id; // dont call render if props.id didn't change
  //   // cannot do this.props !== nextProps because it compares the memory pointer so needs an actual value ie .id
  // }

  handleClick = () => {
    if (this.props.select) {
      this.props.select(this.props.index);
    }
  };

  render() {
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')`,
    };
    return (
      // TO DO: add onClick function, handle the click, need function in app because state is in app and then pass it to children through props
      <div className={`card${this.props.selectedFlat === this.props.flat ? ' active' : ''}`} style={style}>
        <div className="card-category">
          {this.props.flat.price}
          {this.props.flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Flat;

import React, { Component } from 'react';

class Child extends React.Component {
  render() {
    return (
      <>
        {this.props.commentList.map(e => {
          return (
            <li>
              <b>fighting </b>
              {e.text}
            </li>
          );
        })}
      </>
    );
  }
}

export default Child;

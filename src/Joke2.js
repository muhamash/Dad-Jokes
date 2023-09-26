import React, { Component } from "react";

class Joke2 extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
  }
  render() {
    return (
      <div className='Joke'>
        <div className='Joke-buttons'>
          <span onClick={() => this.props.handleVote(this.props.id, 1)}>
            <i className='fas fa-arrow-up'></i>
          </span>{" "}
          <span>{this.props.votes}</span>
          <span onClick={() => this.props.handleVote(this.props.id, -1)}>
            <i className='fas fa-arrow-down'></i>
          </span>{" "}
          {/* <i className='fas fa-arrow-down' onClick={()=>this.props.downvote(this.props.id, -1)}></i> */}
        </div>
        <div className='Joke-text'>{this.props.text}</div>
      </div>
    );
  }
}

export default Joke2;
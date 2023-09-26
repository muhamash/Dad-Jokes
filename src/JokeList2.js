import React, { Component } from "react";
import axios from "axios";
import "./JokeList.css";
import Joke2 from "./Joke2";
import { v4 as uuidv4 } from "uuid";

//api https://icanhazdadjoke.com/ >> get request dile ekta joke dey

class JokeList2 extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      
      jokes: JSON.parse(window.localStorage.getItem('jokes') ||'[]')//nahole parse kore 3rd bracket diye empty array ei dibe
    };
    this.handleVote=this.handleVote.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.getJokes=this.getJokes.bind(this);
  }

   componentDidMount() {
    if(this.state.jokes.length===0) this.getJokes();
  } 

  async getJokes(){
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      jokes.push({ id: uuidv4(), text: res.data.joke, votes: 0 });
    }
    this.setState(st=>({
        
        jokes:[...st.jokes,...jokes]
    }),
    ()=>window.localStorage.setItem('jokes',JSON.stringify(this.state.jokes)));
    // window.localStorage.setItem(
    //     'jokes',
    //     JSON.stringify(jokes)
    // )
  }

  handleVote(id, delta) {
    //delta can be negative/positive
    console.log("Here");
     this.setState((st) => ({
      //stil needing to bind
       jokes: st.jokes.map((j) =>
         j.id === id ? { ...j, votes: j.votes + delta } : j
       ), //isnt j an obj? i can return it
     }),
     ()=>window.localStorage.setItem('jokes',JSON.stringify(this.state.jokes)));
  }
  handleClick(){

   this.getJokes();
  }

  render() {
    return (
      <div className='JokeList'>
        <div className='JokeList-sidebar'>
          <h1 className='JokeList-title'>
            <span className=''>Dad</span> Jokes
          </h1>
          <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
          <button onClick={this.handleClick} className='JokeList-getmore'>Fetch Jokes</button>
        </div>

        <div className='JokeList-jokes'>
          {this.state.jokes.map((j) => (
            // <div>{j.joke}-{j.votes}</div> //rendering inside JOkeList
            <Joke2
              key={j.id}
              votes={j.votes}
              text={j.text}
              id={j.id}
              handleVote={this.handleVote}
            /> //bracket er baire = er ager ta prop jabe oi page e
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList2;
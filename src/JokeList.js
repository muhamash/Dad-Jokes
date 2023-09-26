import React, { Component } from 'react';
import axios from 'axios';
import './JokeList.css';
import Joke from './Joke';
import { v4 as uuidv4 } from 'uuid';

//api https://icanhazdadjoke.com/ >> get request dile ekta joke dey

class JokeList extends Component{

    static defaultProps={
        numJokesToGet:10
    };
    
    constructor(props){
        super(props);
        this.state={
            jokes:[]
        }
    }

    async componentDidMount(){
        let jokes=[];
        while(jokes.length<this.props.numJokesToGet){
            let res= await axios.get('https://icanhazdadjoke.com/',
            {headers:{Accept:'application/json'}})
            jokes.push({id:uuidv4(), text:res.data.joke, votes:0});
        }
        this.setState({jokes:jokes})
    };

    handleVote(id,delta){//delta can be negative/positive
        this.setState(
            st=>({//arrow function used so need for binding in the constructors
                jokes:st.jokes.map(j=>
                    j.id===id?{...j, votes:j.votes+delta}:j) //isnt j an obj? i can return it
            })
        )
        console.log('call jachhe')
    }

    render(){
        return(
            <div className='JokeList'>
                <div className='JokeList-sidebar'>
                    <h1 className='JokeList-title'>
                        <span className=''>Dad</span> Jokes</h1>
                        <img alt='laughing face' src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg'/>
                        <button className='JokeList-getmore'>Fetch Jokes</button>
                </div>
                
                <div className='JokeList-jokes'>
                    {this.state.jokes.map(j=>(
                        // <div>{j.joke}-{j.votes}</div> //rendering inside JOkeList
                        <Joke
                         key={j.id} 
                         votes={j.votes}
                         text={j.text}
                         upvote={(evt)=>this.handleVote(j.id, 1)}
                         downvote={(evt)=>this.handleVote(j.id,-1)}/> //bracket er baire = er ager ta prop jabe oi page e
                    ))}
                </div>
            </div>
        )
    }
}

export default JokeList;
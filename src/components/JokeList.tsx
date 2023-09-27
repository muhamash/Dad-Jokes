import React, { Component } from "react";
import JokeComponent from "./JokeComponents";

export default class JokeList extends Component
{
    render(): React.ReactNode {
        return (
            <div>
                <JokeComponent/>
            </div>
        )
    }
}
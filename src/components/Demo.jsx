import React, { Component } from "react";

class Demo extends Component
{
    render()
    {
        console.log(this.props.message)
        return(
            <div>
                <h1>class based Component</h1>
                <p>{this.props.message}</p>
                <p>{this.props.year}</p>
            </div>
        )
    }
}

export default Demo;
import React from "react"
import Header from "./spa/header";

class RootComponent extends React.Component{

    name='Prafful Daga'

    meClickedOne = function(){
        console.log('Me Clicked One!!!!')
    }

    meClickedTwo(){
        console.log('Me Clicked Two!!!!')
    }

    meClickedThree=()=>{
        console.log('Me Clicked Three!!!!')
    }

    render(){
        return (
            <div>
                <Header></Header>
                <h1>Hello React!!!!</h1>
                <h2>React is easy!</h2>
                <p>Name: {this.name}</p>
                <button onClick={this.meClickedOne}>Click 1</button>
                <button onClick={this.meClickedTwo}>Click 2</button>
                <button onClick={this.meClickedThree}>Click 3</button>
            </div>
        )
    }

}


export default RootComponent
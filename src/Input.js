import React, { Component } from 'react'

class Input extends Component{
    state = {
        first: null,
        second: null,
        delimiter: null,
        tape: [],
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleClick = (tape, delim) =>{
        this.setState({
            delimiter : delim,
            tape : tape
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.inputCatcher(this.state)
    }

    tapeMaker = (props) =>{
        const variable = this.props.variable;
        var tape= [];
        var limit = parseInt(variable.first) + parseInt(variable.second) + 1;
        for (var i =0;i<limit;i++){
            i < variable.first ? tape.push(0) : (i === parseInt(variable.first)) ? tape.push(1) :   tape.push(0) 
        }
        tape.unshift('B')
        tape.push('B')
        const print = variable.list.map((val) => {
            return(
                <div className="box">{val}</div>   
            )
        })
        return(
            <div>
                <input type="submit" id="delimiter" value="+" onClick={() => this.handleClick(tape, '+')}/>
                <div className="scroll-container" >
                    {variable.blank}
                    {print}
                    {variable.blank}
                </div>
            </div>
        )
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="Input 1">Input 1: </label>
                    <input type="text" id="first" onChange={this.handleChange}/>
                    <label htmlFor="Input 2">Input 2: </label>
                    <input type="text" id="second" onChange={this.handleChange}/>
                    <br></br>
                    {this.tapeMaker()}
                </form>
            </div>
        )
    }
}


export default Input;
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
        
        if(variable.delimiter === "+" || variable.delimiter === "-" ){
            tape.unshift('B')
            tape.push('B')
        }else if(variable.delimiter === "x" || variable.delimiter === "/" || variable.delimiter === "%" ||variable.delimiter === "exp" ){
            tape.unshift('B')
            tape.push(1, 'B')
        }else if(variable.delimiter === "log"){
            tape.unshift('B', 1)
            tape.push(1, 'B')
        }else if(variable.delimiter === "!"){
            tape.unshift('B')
            tape.length--
            tape.push('B')
        }
        
        const print = variable.list.map((val) => {
            return(
                <div className="box">{val}</div>   
            )
        })
        return(
            <div>
                <div className="btn-group mb-1" role="group" >
                    <input className='btn bttn' type="submit" id="delimiter" value="+" onClick={() => this.handleClick(tape, '+')}/>
                    <input className='btn bttn' type="submit" id="delimiter" value="-" onClick={() => this.handleClick(tape, '-')}/>
                    <input className='btn bttn' type="submit" id="delimiter" value="/" onClick={() => this.handleClick(tape, '/')}/>
                    <input className='btn bttn' type="submit" id="delimiter" value="x" onClick={() => this.handleClick(tape, 'x')}/>
                    <input className='btn bttn' type="submit" id="delimiter" value="%" onClick={() => this.handleClick(tape, '%')}/>
                    <input className='btn bttn' type="submit" id="delimiter" value="log" onClick={() => this.handleClick(tape, 'log')}/>
                    <input className='btn bttn' type="submit" id="delimiter" value="exp" onClick={() => this.handleClick(tape, 'exp')}/>
                    <input className='btn bttn' type="submit" id="delimiter" value="!" onClick={() => this.handleClick(tape, '!')}/>
                </div>
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
                    <div className="input-group mb-1">
                        <span className="input-group-text no-right input-size" id="Input 1">Input 1:</span>
                        <input className='form-control no-left input-size' type="text" id="first" onChange={this.handleChange}/>
                    </div>
                    <div className="input-group mb-1">
                        <span className="input-group-text no-right input-size" id="Input 1">Input 2:</span>
                        <input className='form-control no-left input-size' type="text" id="second" onChange={this.handleChange}/>
                    </div>
                    <br></br>
                    {this.tapeMaker()}
                </form>
            </div>
        )
    }
}


export default Input;
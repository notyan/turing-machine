import React from 'react'
import './App.css';

const Tape = (props) => {
    const {variable} = props
    var tape=[];
    var limit = parseInt(variable.first) + parseInt(variable.second) + 2;
    for (var i =0;i<limit;i++){
        i < variable.first ? tape.push(0) : (i === parseInt(variable.first)) ? tape.push(1) : (i<limit-1) ?  tape.push(0) : console.log('t')
    }
    const print = variable.list.map((val) => {
        return(
            <div className="box">{val}</div>           
        )
    })

    return(
        <div className="scroll-container" >
            <button onClick={() => props.listAssign(tape)}> Update </button>
            <br></br>
            {variable.blank}
            {print}
            {variable.blank}
        </div>
    )
}

export default Tape

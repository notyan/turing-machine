import React, { Component } from 'react'
import './App.css';
import Input from './Input'
import Tambah from './opr/Tambah';

class App extends Component{
  state = {
    first: null,
    second: null,
    delimiter: null,
    list: [],
    blank : [
      <div className="box"> B </div>,
    ],
  }
  inputCatcher = (input,ls) =>{
    this.setState({
       first: input.first,
       second: input.second,
       delimiter: input.delimiter,
       list: input.tape,
    }, () =>{console.log(this.state)})
  }



  render(){
    return(
      <div>
        <Input variable={this.state} inputCatcher={this.inputCatcher}/>
        {/* <Tape variable={this.state} listAssign={this.listAssign}/> */}
        <Tambah variable={this.state}/>
        
        {/*this.state.list*/}
      </div>
      
    )
  }
}


export default App;

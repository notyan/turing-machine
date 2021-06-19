import React, { Component } from 'react'
import './App.css';
import Input from './Input'
import Tambah from './opr/Tambah';
import Kurang from './opr/Kurang';
import Kali from './opr/Kali';
import Bagi from './opr/Bagi';
import Mod from './opr/Mod';
import Log from './opr/Log';
import Pangkat from './opr/Pangkat';
import Faktorial from './opr/Faktorial';

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
    }, () => {console.log(this.state);}    )
  }

  render(){
    let operation;
    let opr = this.state.delimiter
    opr === '+' ? operation = <Tambah variable={this.state}/> 
      : opr === '-' ? operation = <Kurang variable={this.state}/> 
        : opr === 'x' ? operation = <Kali variable={this.state}/>  
          : opr === '/' ? operation = <Bagi variable={this.state}/>  
            : opr === '%' ? operation = <Mod variable={this.state}/>  
              : opr === 'log' ? operation = <Log variable={this.state}/> 
                : opr === 'exp' ? operation = <Pangkat variable={this.state}/>
                  : opr === '!' ? operation = <Faktorial variable={this.state}/> 
                    : <br></br>
    
    return(
      <div className="m-lay content">
        <Input variable={this.state} inputCatcher={this.inputCatcher}/>
        {operation}
      </div>
      
    )
  }
}


export default App;

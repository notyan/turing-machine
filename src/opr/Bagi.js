import React, { Component } from 'react'

class Kali extends Component {
    state = {
        iter: 1,
        newList: [],
        pos: -1,
    }

    listUpdate = (x,i) =>{
        let temp = this.state.newList.slice()
        temp[i] = x
        this.setState({
            newList:temp
        }, () => console.log("iterasi " + i +" diganti " + x))
        
    }
    start(){
        switch (this.state.pos) {
            case -1 : this.init();      break;
            case 0  : this.zero();      break;
            case 1  : this.first();     break;
            case 2  : this.second();    break;
            case 3  : this.third();     break;
            case 4  : this.forth();     break;
            case 5  : this.fifth();     break;
            case 6  : this.sixth();     break;
            case 7  : this.seventh();   break;
            case 8  : this.eighth();    break;
            case 9  : this.ninth();     break;
            case 10 : this.tenth();     break;
            case 11 : this.eleventh();  break;
            case 12 : this.twelfth();   break;
            case 13 : this.thirteenth();   break;
            default : break;
        }
    }
    
    stateUpdate = (i,pos) => {
        this.setState({
            iter: i, pos: pos,
        })
    }
    init(){
        this.stateUpdate(this.state.iter, 0)
    }
    zero(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 0)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 1)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    first(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 1)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 2)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    second(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter-1, 3)
        }else if(this.state.newList[this.state.iter] === 1 ){
            this.stateUpdate(this.state.iter+1, 8)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    third(){
        //console.log("\nhead "+ this.state.newList[this.state.iter] )
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter-1, 3)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 4)
        }
        
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    forth(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter-1, 4)
        }else if(this.state.newList[this.state.iter] === 'B' ){
            let temp = this.state.newList;  temp.push('B'); this.setState({newList:temp})
            this.stateUpdate(this.state.iter+1, 5)
        }
        console.log("iter " + this.state.iter)
        console.log("state " + this.state.pos)
    }
    fifth(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 6)
        }else if(this.state.newList[this.state.iter] === 1){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 11)
        }
        console.log("iter " + this.state.iter)
        console.log("state " + this.state.pos)
    }
    sixth(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 6)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 7)
        }
        console.log("iter " + this.state.iter)
        console.log("state " + this.state.pos)
    }
    seventh(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 7)
        }else if(this.state.newList[this.state.iter] === "B"){
            this.stateUpdate(this.state.iter-1, 2)
        }
        console.log("iter " + this.state.iter)
        console.log("state " + this.state.pos)
    }
    eighth(){
        if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 9)
        }else if(this.state.newList[this.state.iter] === "B"){
            this.stateUpdate(this.state.iter+1, 8)
        }
        console.log("iter " + this.state.iter)
        console.log("state " + this.state.pos)
    }
    ninth(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 9)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 10)
        }
        console.log("iter " + this.state.iter)
        console.log("state " + this.state.pos)
    }
    tenth(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter-1, 10)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 13)
        }
        console.log("iter " + this.state.iter)
        console.log("state " + this.state.pos)
    }
    eleventh(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 11)
        }else if(this.state.newList[this.state.iter] === 1){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 12)
        }
        console.log("iter " + this.state.iter)
        console.log("state " + this.state.pos)
    }
    twelfth(){
        console.log("ENDED" )
        console.log("ENDED" )
    }
    thirteenth(){
        if(this.state.newList[this.state.iter] === 'B'){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 13)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 1)
        }
        console.log("iter " + this.state.iter)
        console.log("state " + this.state.pos)
    }
    handleClick = () =>{
        if(this.state.newList.length === 0){
            this.setState({
                newList: [...this.props.variable.list]
            }, () => this.start(), console.log(this.state.newList) )
        }else{
            this.start()
        }
    }
    handleReset= () =>{
        this.setState({
            newList: [],
            iter: 1,
            pos: -1,  //-1 karena baru kepikiran di akhir kalau pas initiate tu belum dirubah
        }, () => console.log(this.state.newList))
    }


    tapeMaker = (props) =>{
        const print = this.state.newList.map((val, i) => {
            if(i === this.state.iter){
                return(
                    <div className="box white">
                        {val}
                    </div>   
                )
            }else{
                return (
                    <div className="box">
                        {val}
                    </div>  
                )
            }   
        })
        return(
            <div>
                <input type="submit" id="" value="Manual x" onClick={() => this.handleClick()}/>
                <input type="submit" id="" value="reset" onClick={() => this.handleReset()}/>
                <div className="scroll-container">
                    {print}
                </div>
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.tapeMaker()}
            </div>
        )
    }
}

export default Kali
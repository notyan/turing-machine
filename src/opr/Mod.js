import React, { Component } from 'react'

class Mod extends Component {
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
            case 0  : this.nol();       break;
            case 1  : this.siji();      break;
            case 2  : this.loro();      break;
            case 3  : this.telu();      break;
            case 4  : this.papat();     break;
            case 5  : this.limo();      break;
            case 6  : this.enem();      break;
            case 7  : this.pitu();      break;
            case 8  : this.wolu();      break;
            case 9  : this.songo();     break;
            case 10 : this.sepuluh();   break;
            case 11 : this.sewelas();   break;
            case 12 : this.rolas();     break;
            case 13 : this.telulas();   break;
            case 14 : this.patbelas();  break;
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
    nol(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 1)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 7)
        }
    }
    siji(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 1)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 2)
        }
    }
    loro(){
        if(this.state.newList[this.state.iter] === 'B'){
            this.stateUpdate(this.state.iter+1, 2)
        }else if(this.state.newList[this.state.iter] === 0 ){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter-1, 3)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 5)
        }
    }
    telu(){
        //console.log("\nhead "+ this.state.newList[this.state.iter] )
        if(this.state.newList[this.state.iter] === 'B'){
            this.stateUpdate(this.state.iter-1, 3)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 4)
        } 
    }
    papat(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter-1, 4)
        }else if(this.state.newList[this.state.iter] === 'B' ){
            this.stateUpdate(this.state.iter+1, 0)
        }
    }
    limo(){
        if(this.state.newList[this.state.iter] === 'B'){
            let temp = this.state.newList;  temp.push('B'); this.setState({newList:temp})
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 5)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 6)
        }
    }
    enem(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter-1, 6)
        }else if(this.state.newList[this.state.iter] === "B"){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 14)
        }
    }
    pitu(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter-1, 8)
        }else if(this.state.newList[this.state.iter] === "B"){
            this.stateUpdate(this.state.iter+1, 7)
        }
    }
    wolu(){
        if(this.state.newList[this.state.iter] === 1){
            this.listUpdate("B", this.state.iter)
            this.stateUpdate(this.state.iter+1, 12)
        }else if(this.state.newList[this.state.iter] === "B"){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 9)
        }
    }
    songo(){
        if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 10)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.stateUpdate(this.state.iter-1, 9)
        }
    }
    sepuluh(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter-1, 10)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter+1, 11)
        }
    }
    sewelas(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 11)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 7)
        }
    }
    rolas(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 12)
        }else if(this.state.newList[this.state.iter] === 1){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 13)
        }
    }
    telulas(){
        console.log("ENDED" )
        console.log("ENDED" )
    }
    patbelas(){
        if(this.state.newList[this.state.iter] === 'B'){
            this.stateUpdate(this.state.iter+1, 0)
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
                <input class='bttn' type="submit" id="" value="Manual %" onClick={() => this.handleClick()}/>
                <input class='bttn' type="submit" id="" value="reset" onClick={() => this.handleReset()}/>
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

export default Mod
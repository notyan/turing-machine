import React, { Component } from 'react'

class Kurang extends Component {
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
            case 0  : this.nol();      break;
            case 1  : this.siji();     break;
            case 2  : this.loro();    break;
            case 3  : this.telu();     break;
            case 4  : this.papat();     break;
            case 5  : this.limo();     break;
            case 6  : this.enem();     break;
            default :   break;
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
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 0) 
            : (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 1) 
                : console.log("Err at " + this.state.pos)
    }
    siji(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 1) 
            : (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter-1, 2) 
                : console.log("Err at " + this.state.pos)
    }
    loro(){
        if (this.state.newList[this.state.iter] === 0) {
            this.listUpdate('B', this.state.iter) 
            this.stateUpdate(this.state.iter-1, 3)
        } else if(this.state.newList[this.state.iter] === 1) {
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter-1, 6)
        } 
    }
    telu(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 3) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 4) 
            : console.log("Err at " + this.state.pos)
    }
    papat(){
        (this.state.newList[this.state.iter] === 0) ?this.stateUpdate(this.state.iter-1, 4) :
        (this.state.newList[this.state.iter] === 'B' )? this.stateUpdate(this.state.iter+1, 5) 
            : console.log("Err at " + this.state.pos)
    }
    limo(){
        if(this.state.newList[this.state.iter] === 0) { this.listUpdate('B', this.state.iter); this.stateUpdate(this.state.iter+1, 0)}
            else if(this.state.newList[this.state.iter] === 1){this.stateUpdate(this.state.iter-1, 6)}
    }
    enem(){
        console.log("ENDED")
        console.log("ENDED")
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
                <input class='bttn' type="submit" id="" value="Manual Negatif" onClick={() => this.handleClick()}/>
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

export default Kurang
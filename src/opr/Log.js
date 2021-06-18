import React, { Component } from 'react'

class Log extends Component {
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
            case -1 : this.init();          break;
            case 0  : this.zero();          break;
            case 1  : this.first();         break;
            case 2  : this.second();        break;
            case 3  : this.third();         break;
            case 4  : this.forth();         break;
            case 5  : this.fifth();         break;
            case 6  : this.sixth();         break;
            case 7  : this.seventh();       break;
            case 8  : this.eighth();        break;
            case 9  : this.ninth();         break;
            case 10 : this.tenth();         break;
            case 11 : this.eleventh();      break;
            case 12 : this.twelfth();       break;
            case 13 : this.thirteenth();    break;
            case 14 : this.fourteenth();    break;
            case 15 : this.fifteenth();     break;
            case 16 : this.sixteenth();     break;
            case 17 : this.seventeenth();   break;
            case 18 : this.eighteenth();    break;
            case 19 : this.nineteenth();    break;
            case 20 : this.twentieth();     break;
            case 21 : this.twenFirst();     break;
            case 22 : this.twenSecond();    break;
            case 23 : this.twenThird();     break;
            case 24 : this.twenForth();     break;
            case 25 : this.twenFifth();    break;
            case 26 : this.twenSixth();     break;
            case 27 : this.twenSeventh();   break;
            case 28 : this.twenEighth();    break;
            case 29 : this.twenNinth();     break;
            case 30 : this.thirtieth();     break;
            case 31 : this.thirFirst();     break;
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
        if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 1)
        }
    }
    first(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 1) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 2)
            : console.log("Outside Range")
    }
    second(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 2) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 3)
            : console.log("Outside Range")
    }
    third(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter-1, 4)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 9)
        } 
    }
    forth(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 4) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 5)
            : console.log("Outside Range")
    }
    fifth(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 5) :
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter+1, 6):
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 6)
            : console.log("Outside Range")
    }
    sixth(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 7)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 13)
        }
    }
    seventh(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 7) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 8)
            : console.log("Outside Range")
    }
    eighth(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 8) :
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter-1, 3)
            : console.log("Outside Range")
    }
    ninth(){
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter+1, 9) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 10)
            : console.log("Outside Range")
    }
    tenth(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 10)
        }else if(this.state.newList[this.state.iter] === 'B'){
            let temp = this.state.newList;  temp.push('B'); this.setState({newList:temp})
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 11)
        }
    }
    eleventh(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 11) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 12)
            : console.log("Outside Range")
    }
    twelfth(){
        if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 2)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 12)
        }
    }
    thirteenth(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 13)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter+1, 13)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 14)
        }
    }
    fourteenth(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 14) :
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter-1, 15)
            : console.log("Outside Range")
    }
    fifteenth(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter-1, 16)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 22)
        }
    }
    sixteenth(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 16) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 17)
            : console.log("Outside Range")
    }
    seventeenth(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 17) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 18)
            : console.log("Outside Range")

    }
    eighteenth(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter-1, 18)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter+1, 19)
        }
    }
    nineteenth(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 19) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 20)
            : console.log("Outside Range")
    }
    twentieth(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 20) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 21)
            : console.log("Outside Range")
    }
    twenFirst(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 21) :
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter-1, 15)
            : console.log("Outside Range")
    }
    twenSecond(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 22) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 23)
            : console.log("Outside Range")
    }
    twenThird(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter-1, 23)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 24)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.listUpdate(1, this.state.iter)
            this.stateUpdate(this.state.iter-1, 23)
        }
    }
    twenForth(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter-1, 24)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 24)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.stateUpdate(this.state.iter+1, 25)
            let temp = this.state.newList;  temp.unshift('B'); 
            this.setState({newList:temp}, ()=>{
                this.listUpdate(0, this.state.iter)
            })            
        }
    }
    twenFifth(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 25) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 26)
            : console.log("Outside Range")
    }
    twenSixth(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 27) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 26)
            : console.log("Outside Range")
    }
    twenSeventh(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 1) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 28)
            : console.log("Outside Range")
    }
    twenEighth(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 29)
            : console.log("Outside Range")
    }
    twenNinth(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 30) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 29)
            : console.log("Outside Range")
    }
    thirtieth(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate("B", this.state.iter)
            this.stateUpdate(this.state.iter+1, 30)
        }else if(this.state.newList[this.state.iter] === 1){
            this.listUpdate("B", this.state.iter)
            this.stateUpdate(this.state.iter+1, 30)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.stateUpdate(this.state.iter+1, 31)
        }
    }
    thirFirst(){
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

export default Log
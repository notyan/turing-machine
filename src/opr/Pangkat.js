import React, { Component } from 'react'

class Pangkat extends Component {
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
            case 0  : this.nol();           break;
            case 1  : this.siji();          break;
            case 2  : this.loro();          break;
            case 3  : this.telu();          break;
            case 4  : this.papat();         break;
            case 5  : this.limo();          break;
            case 6  : this.enem();          break;
            case 7  : this.pitu();          break;
            case 8  : this.wolu();          break;
            case 9  : this.songo();         break;
            case 10 : this.sepuluh();       break;
            case 11 : this.sewelas();       break;
            case 12 : this.rolas();         break;
            case 13 : this.telulas();       break;
            case 14 : this.patbelas();      break;
            case 15 : this.limolas();       break;
            case 16 : this.nembelas();      break;
            case 17 : this.pitulas();       break;
            case 18 : this.wolulas();       break;
            case 19 : this.songolas();      break;
            case 20 : this.rongpuluh();     break;
            case 21 : this.selikur();       break;
            case 22 : this.rolikur();       break;
            case 23 : this.telulikur();     break;
            case 24 : this.patlikur();      break;
            case 25 : this.selawe();        break;
            case 26 : this.nemlikur();      break;
            case 27 : this.pitulikur();      break; //New state after finding error
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
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 23)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    siji(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 1) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 2)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    loro(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 3)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 7)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.stateUpdate(this.state.iter+1, 2)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    telu(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 3) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 4)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    papat(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 4)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 11)
        }else if(this.state.newList[this.state.iter] === 'B'){
            let temp = this.state.newList;  temp.push('B'); this.setState({newList:temp})
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 5)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    limo(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 5) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 6)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    enem(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 6) :
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter+1, 2)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    pitu(){
        if(this.state.newList[this.state.iter] === 0){  
            this.stateUpdate(this.state.iter+1, 7) 
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 27)
        }else if(this.state.newList[this.state.iter] === 'B'){
            let temp = this.state.newList;  temp.push('B'); this.setState({newList:temp})
            this.listUpdate(1, this.state.iter)
            this.stateUpdate(this.state.iter-1, 8)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    wolu(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 8) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 9)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    songo(){
        if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 10)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 9)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    sepuluh(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 10) :
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter+1, 0)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    sewelas(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 12)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 15)
        }else if(this.state.newList[this.state.iter] === "B"){
            this.stateUpdate(this.state.iter-1, 11)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    rolas(){
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 13) :
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter+1, 12)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    telulas(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 13)
        }else if(this.state.newList[this.state.iter] === 'B'){
            let temp = this.state.newList;  temp.push('B'); this.setState({newList:temp})
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 14)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    patbelas(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 14) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 11)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    limolas(){
        if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 16)
        }else if(this.state.newList[this.state.iter] === "B"){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter+1, 15)
        }
    }
    nembelas(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 16) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 17)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    pitulas(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 17) :
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter+1, 2)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    wolulas(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate(1, this.state.iter)
            this.stateUpdate(this.state.iter+1, 18)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 19)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    songolas(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 19)
        }else if(this.state.newList[this.state.iter] === 'B'){
            let temp = this.state.newList;  temp.push('B'); this.setState({newList:temp})
            this.listUpdate(1, this.state.iter)
            this.stateUpdate(this.state.iter-1, 20)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    rongpuluh(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 20)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 20)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 21)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    selikur(){
        if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 22)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 21)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    rolikur(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 22) :
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter+1, 0)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    telulikur(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 23)
        }else if(this.state.newList[this.state.iter] === 1){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 24)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    patlikur(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 25)
        }else if(this.state.newList[this.state.iter] === 1){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 24)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    selawe(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 25)
        }else if(this.state.newList[this.state.iter] === 1){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 26)          
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    nemlikur(){
        console.log("ENDED")
        console.log("ENDED")
    }
    pitulikur(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 27) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 18)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
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
        }, () => console.clear())
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

export default Pangkat
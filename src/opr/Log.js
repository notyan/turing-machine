import React, { Component } from 'react'

class Log extends Component {
    state = {
        iter: 1,
        newList: [],
        pos: -1,
        auto: 'Auto',
        manual: 'Start'
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
            case 27 : this.pitulikur();     break;
            case 28 : this.wolulikur();     break;
            case 29 : this.songolikur();    break;
            case 30 : this.telungpuluh();   break;
            case 31 : this.telusiji();      break;
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
        if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 1)
        }
    }
    siji(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 1) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 2)
            : console.log("Outside Range")
    }
    loro(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 2) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 3)
            : console.log("Outside Range")
    }
    telu(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter-1, 4)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 9)
        } 
    }
    papat(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 4) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 5)
            : console.log("Outside Range")
    }
    limo(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 5) :
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter+1, 6):
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 6)
            : console.log("Outside Range")
    }
    enem(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 7)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 13)
        }
    }
    pitu(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 7) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 8)
            : console.log("Outside Range")
    }
    wolu(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 8) :
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter-1, 3)
            : console.log("Outside Range")
    }
    songo(){
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter+1, 9) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 10)
            : console.log("Outside Range")
    }
    sepuluh(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 10)
        }else if(this.state.newList[this.state.iter] === 'B'){
            let temp = this.state.newList;  temp.push('B'); this.setState({newList:temp})
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 11)
        }
    }
    sewelas(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 11) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 12)
            : console.log("Outside Range")
    }
    rolas(){
        if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 2)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 12)
        }
    }
    telulas(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 13)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter+1, 13)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 14)
        }
    }
    patbelas(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 14) :
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter-1, 15)
            : console.log("Outside Range")
    }
    limolas(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter-1, 16)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 22)
        }
    }
    nembelas(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 16) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 17)
            : console.log("Outside Range")
    }
    pitulas(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 17) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 18)
            : console.log("Outside Range")

    }
    wolulas(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter-1, 18)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter+1, 19)
        }
    }
    songolas(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 19) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 20)
            : console.log("Outside Range")
    }
    rongpuluh(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 20) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 21)
            : console.log("Outside Range")
    }
    selikur(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 21) :
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter-1, 15)
            : console.log("Outside Range")
    }
    rolikur(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 22) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 23)
            : console.log("Outside Range")
    }
    telulikur(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter-1, 23)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 24)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.listUpdate(1, this.state.iter)
            this.stateUpdate(this.state.iter-1, 23)
        }
    }
    patlikur(){
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
    selawe(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 25) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 26)
            : console.log("Outside Range")
    }
    nemlikur(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 27) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 26)
            : console.log("Outside Range")
    }
    pitulikur(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 1) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 28)
            : console.log("Outside Range")
    }
    wolulikur(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 29)
            : console.log("Outside Range")
    }
    songolikur(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 30) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 29)
            : console.log("Outside Range")
    }
    telungpuluh(){
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
    telusiji(){
        console.log("ENDED")
        console.log("ENDED")
    }

    handleClick = () =>{
        if(this.state.newList.length === 0){
            this.setState({
                newList: [...this.props.variable.list],
                manual: 'Next'
            }, () => this.start(), console.log(this.state.newList) )
        }else{
            this.start()
        }
    }
    handleAuto = () =>{
        this.setState({
            auto: 'SpeedUp',
        })
        if(this.state.newList.length === 0){
            this.setState({
                newList: [...this.props.variable.list],
            }, () => this.start() )
        }else if(this.state.pos !== 31 ){ //TERMINATE THE LOOP
            this.start()
            setTimeout(this.handleAuto, 1000);
        }else if(this.state.pos == -1){
            clearTimeout(this.handleAuto)
        }
    }
    handleReset= () =>{
        clearTimeout(this.handleAuto)
        this.setState({
            newList: [],
            iter: 1,
            pos: -1,  //-1 karena baru kepikiran di akhir kalau pas initiate tu belum dirubah
            auto: 'Auto',
            manual: 'Start'
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
                <input className='bttn manual' type="submit" id="manual" value={this.state.manual} onClick={() => this.handleClick()}/>
                <input className='bttn auto' type="submit" id="auto" value={this.state.auto} onClick={() => this.handleAuto()}/>
                <input className='bttn' type="submit" id="" value="Reset" onClick={() => this.handleReset()}/>
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
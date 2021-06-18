import React, { Component } from 'react';
class Sister extends Component{
  constructor(props) {
    super(props);
    this.state={ // 宣告state物件，內包含一個變數percent
      feeling:"bad" 
    }
    this.argueFor70NTD=this.argueFor70NTD.bind(this);
  }

    componentDidMount(){
    }

    argueFor70NTD(){
        this.props.argue("sister",70);
    }

    render(){
        return(<div>我是女兒，我拿到{this.props.money}<button onClick={this.argueFor70NTD}>要求提升到70塊</button></div>);
    }
}
export default Sister;
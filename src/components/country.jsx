import React, { Component } from 'react';

class Country extends Component {
    state = {  
        // name: 'America',
        // goldMedalCount: 0
        name: this.props.name,
        goldMedalCount: this.props.goldMedalCount
    }
    handleIncrement=()=> {
        this.setState({ goldMedalCount: this.state.goldMedalCount+1  })
    }
    handleReduction=()=> {
        if(this.state.goldMedalCount >= 1){
            //I have no idea why this works. Im not a wizard at math but this should only work if its zero right? but when i tried that it went until negative 1 and then stopped... weird.
            this.setState({ goldMedalCount: this.state.goldMedalCount-1  })
        }
        
    }
    render() { 
        return ( <div style={{ textAlign:'center' }}>{ this.state.name } <br></br><div> Amount of gold medals: {this.state.goldMedalCount} </div><button onClick={ this.handleIncrement }>add medal</button><button onClick={ this.handleReduction }>minus medal</button></div> );
    }
}

export default Country;
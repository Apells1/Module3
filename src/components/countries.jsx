import React, { Component } from 'react';
import Country from './country';

class Countries extends Component {
  state = { 
    countries: [
      { id: 1, name: 'America', goldMedalCount: 0},
      { id: 2, name: 'China', goldMedalCount: 0 },
      { id: 3, name: 'Russia', goldMedalCount: 0 },
    ]
   }
  render() { 
    return ( <React.Fragment>
          { this.state.countries.map(country => 
          <Country 
            key={ country.id } 
            name={ country.name } 
            goldMedalCount={ country.goldMedalCount } 
          />) }
    </React.Fragment> );
  }
}

export default Countries;
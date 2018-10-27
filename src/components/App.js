import React, {Component} from 'react';

import FruitBasket from './FruitBasket';

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      filters: [],
      selectedFilter: 'all',
      items: []

    }
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  render(){
    return(
      <div>
        <select onChange={this.handleFilterChange} defaultValue='all'>
            <option value='all'>All</option>
            {this.state.filters.map(filter =>
              <option key={filter} value={filter}>{filter}</option>
            )}
        </select>

      </div>
    )
  }

}

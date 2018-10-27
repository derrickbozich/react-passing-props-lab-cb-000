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

  componentWillMount() {
    this.fetchFilters();
    this.fetchItems();
  }

  fetchItems = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  render(){

    const list = this.state.filter === 'all' ? this.state.items : this.state.items.filter(i => i.fruit_type === this.state.filter);

    return(
      <div>
        <select onChange={this.handleFilterChange} defaultValue='all'>
            <option value='all'>All</option>
            {this.state.filters.map(filter =>
              <option key={filter} value={filter}>{filter}</option>
            )}
        </select>

        
        <ul className="fruit-list">
          {list.map((item, index) => <li key={index}>{item.char}</li>)}
        </ul>
        

      </div>
    )
  }

}

import React from 'react';

const Filter = (props) => {
  return(
    <div>
      <h1>test</h1>
      <select onChange={this.props.handleChange} defaultValue='all'>
          <option value='all'>All</option>
          {this.props.filters.map(filter =>
            <option key={filter} value={filter}>{filter}</option>
          )}
      </select>
    </div>
    
  )
}

// class Filter extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filters: []
//     };
//   }
//
//   componentWillMount() {
//     this.fetchFilters();
//   }
//
//   fetchFilters = () => {
//     fetch('/api/fruit_types')
//       .then(response => response.json())
//       .then(filters => this.setState({ filters }));
//   }
//
//   render() {
//     return (
//       <select onChange={this.props.handleChange} defaultValue='all'>
//         <option value='all'>All</option>
//         {this.state.filters.map(filter =>
//           <option key={filter} value={filter}>{filter}</option>
//         )}
//       </select>
//     );
//   }
// }
//
export default Filter;

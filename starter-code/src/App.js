import React, { Component } from 'react';
import data from '../data.json'
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {

  state={
    data: data
  }

  render() {
    return (
      <div className="App">
        <FilterableProductTable products={...this.state.data } />
      </div>
    );
  }
}

export default App;

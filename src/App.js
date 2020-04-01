import React from 'react';
import './App.css';
import dataBase from './database/data';
import { FilterableProductTable } from './components/FilterableProductTable';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = dataBase;
    return (
      <div>
        <FilterableProductTable data={data} />
      </div>
    )
  }
}

export default App;

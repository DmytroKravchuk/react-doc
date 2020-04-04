import React from 'react';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false,
            data: props.data
        }
    }

    filterData = () => {
        const { filterText, inStockOnly, data} = this.state;
        if (inStockOnly) {
            return data.filter(item => {
                return this._isExistProductName(item, filterText) && item.stocked ? item : null; 
            });
        } else {
            return data.filter(item => this._isExistProductName(item, filterText) ? item : null);
        }
    }

    _isExistProductName = (product, inputVal) => {
        return product.name.toUpperCase().includes(inputVal.toUpperCase());
    }

    onStockFilter = (isStock) => {
        this.setState({
            inStockOnly: isStock,
        });
    }

    onNameFilter = (name) => {
        this.setState({
            filterText: name,
        })
    }

    render() {
        return (
            <div className="FilterableProductTable">
                <SearchBar 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    handleListUpdateStock={this.onStockFilter}
                    handleUpdateListSearch={this.onNameFilter}
                    />
                <ProductTable 
                    data={this.filterData()}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    />
            </div>
        )
    }
}

export {FilterableProductTable};

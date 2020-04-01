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
        const { filterText, inStockOnly } = this.state;
        return this.state.data.filter(item => {
            if(!filterText.length && this.state.inStockOnly) {
                return item.stocked;
            } 
            if(this._isCorrectProduct(item, filterText, inStockOnly)) {
                console.log(item);
                return item;
            }
        })
    }

    _isCorrectProduct = (product, inputVal, isStock) => {
        let isCorrect = true;
        let nameChar = product.name.split('');
        inputVal.split('').forEach((item, index) => {
            if(item.toUpperCase() === nameChar[index].toUpperCase() && product.stocked === isStock) {
                isCorrect = true;
            } else {
                isCorrect = false;
            }
        });
        return isCorrect;
    }

    onStockFilter = (isStock) => {
        this.setState(state => ({
            inStockOnly: isStock,
        }));
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
                    listUpdateStock={this.onStockFilter}
                    listUpdateSearcn={this.onNameFilter}
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

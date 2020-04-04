import React from 'react';

const SearchBar = ({filterText, inStockOnly, ...props}) => {

    function handleChangeStock(e) {
        props.handleListUpdateStock(e.target.checked);
    }

    function handleChangeSeartch(e) {
        props.handleUpdateListSearch(e.target.value);
    }

    return (
        <form>
            <div>
                <input type="text" 
                    placeholder="Search..." 
                    value={filterText} 
                    onChange={handleChangeSeartch}/>
            </div>
            <div>
                <input 
                    type="checkbox" 
                    checked={inStockOnly}
                    onChange={handleChangeStock} id="stock"/> 
                <label htmlFor="stock">Only show products in stock</label>
            </div>
        </form>
    )
}

export { SearchBar };
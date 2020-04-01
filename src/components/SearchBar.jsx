import React from 'react';

function SearchBar(props) {

    function handleChangeStock(e) {
        props.listUpdateStock(e.target.checked);
    }

    function handleChangeSeartch(e) {
        props.listUpdateSearcn(e.target.value);
    }

    return (
        <form>
            <div>
                <input type="text" 
                    placeholder="Search..." 
                    value={props.filterText} 
                    onChange={handleChangeSeartch}/>
            </div>
            <div>
                <input 
                    type="checkbox" 
                    checked={props.inStockOnly}
                    onChange={handleChangeStock} id="stock"/> 
                <label htmlFor="stock">Only show products in stock</label>
            </div>
        </form>
    )
}

export { SearchBar };